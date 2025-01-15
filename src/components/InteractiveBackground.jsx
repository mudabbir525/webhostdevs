import React, { useRef, useEffect } from "react";
import * as THREE from "three";
import { Canvas, extend, useFrame, useThree } from "@react-three/fiber";
import { shaderMaterial } from "@react-three/drei";

// Custom Shader Material
const ParticleShaderMaterial = shaderMaterial(
  {
    uTime: 0,
    uMouse: new THREE.Vector2(0, 0),
    uResolution: new THREE.Vector2(0, 0),
    uColor: new THREE.Color(0x0066ff),
  },
  // Vertex Shader
  `
    uniform float uTime;
    uniform vec2 uMouse;
    attribute float size;
    attribute vec3 customColor;
    varying vec3 vColor;
    
    void main() {
      vColor = customColor;
      vec3 pos = position;

      float dist = distance(uMouse, vec2(pos.x, pos.y));
      pos.z += sin(dist * 10.0 - uTime) * 0.1;
      pos.z += sin(pos.x * 2.0 + uTime) * cos(pos.y * 2.0 + uTime) * 0.25;

      vec4 modelPosition = modelMatrix * vec4(pos, 1.0);
      vec4 viewPosition = viewMatrix * modelPosition;
      vec4 projectedPosition = projectionMatrix * viewPosition;

      gl_Position = projectedPosition;
      gl_PointSize = size * (1.0 / -viewPosition.z);
    }
  `,
  // Fragment Shader
  `
    uniform vec3 uColor;
    varying vec3 vColor;

    void main() {
      float dist = length(gl_PointCoord - vec2(0.5));
      float alpha = 1.0 - smoothstep(0.45, 0.5, dist);
      
      gl_FragColor = vec4(vColor * uColor, alpha * 0.7);
    }
  `
);

extend({ ParticleShaderMaterial });

const Particles = ({ count = 5000, mouse }) => {
  const mesh = useRef();
  const { size } = useThree();

  const positions = new Float32Array(count * 3);
  const colors = new Float32Array(count * 3);
  const sizes = new Float32Array(count);

  for (let i = 0; i < count; i++) {
    const i3 = i * 3;
    positions[i3] = (Math.random() - 0.5) * 10;
    positions[i3 + 1] = (Math.random() - 0.5) * 10;
    positions[i3 + 2] = (Math.random() - 0.5) * 2;

    colors[i3] = Math.random() * 0.3 + 0.7;
    colors[i3 + 1] = Math.random() * 0.3 + 0.7;
    colors[i3 + 2] = Math.random() * 0.3 + 0.7;

    sizes[i] = Math.random() * 2 + 1;
  }

  useFrame((state) => {
    if (!mesh.current) return;
    const time = state.clock.getElapsedTime();

    mesh.current.material.uniforms.uTime.value = time * 0.5;
    mesh.current.material.uniforms.uMouse.value.set(
      mouse.current[0],
      mouse.current[1]
    );
    mesh.current.material.uniforms.uResolution.value.set(size.width, size.height);
    mesh.current.rotation.z = time * 0.05;
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attachObject={["attributes", "position"]}
          count={count}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attachObject={["attributes", "customColor"]}
          count={count}
          array={colors}
          itemSize={3}
        />
        <bufferAttribute
          attachObject={["attributes", "size"]}
          count={count}
          array={sizes}
          itemSize={1}
        />
      </bufferGeometry>
      <particleShaderMaterial
        transparent
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
};

const Scene = () => {
  const mouse = useRef([0, 0]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouse.current = [
        (e.clientX / window.innerWidth) * 2 - 1,
        -(e.clientY / window.innerHeight) * 2 + 1,
      ];
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return <Particles mouse={mouse} />;
};

const InteractiveBackground = () => {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75, near: 0.1, far: 1000 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <Scene />
      </Canvas>
    </div>
  );
};

export default InteractiveBackground;
