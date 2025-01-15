import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Sphere } from "@react-three/drei";
import * as THREE from "three";

const InteractiveSphere = () => {
  const sphereRef = useRef();
  const lightRef = useRef();

  useFrame(({ mouse }) => {
    if (sphereRef.current) {
      // Rotate sphere based on cursor movement
      sphereRef.current.rotation.y = mouse.x * Math.PI;
      sphereRef.current.rotation.x = -mouse.y * Math.PI;
    }
    if (lightRef.current) {
      // Move light based on cursor
      lightRef.current.position.set(mouse.x * 10, mouse.y * 10, 10);
    }
  });

  return (
    <>
      <pointLight
        ref={lightRef}
        intensity={1.5}
        color="white"
        position={[0, 0, 5]}
        castShadow
      />
      <Sphere ref={sphereRef} args={[1.5, 64, 64]} castShadow>
        <meshPhysicalMaterial
          attach="material"
          clearcoat={1}
          clearcoatRoughness={0}
          metalness={0.9}
          roughness={0.1}
          color="#0078D7"
          envMapIntensity={1}
        />
      </Sphere>
    </>
  );
};

const Interactive3DScene = () => {
  return (
    <div className="relative w-full h-screen">
      <Canvas
        shadows
        camera={{ position: [0, 0, 5], fov: 50 }}
        className="absolute inset-0"
      >
        <color attach="background" args={["#1E293B"]} />
        <ambientLight intensity={0.2} />
        <InteractiveSphere />
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
};

export default Interactive3DScene;
