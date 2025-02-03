import React from 'react';
import { motion, useMotionValue, useTransform, animate, useInView } from 'framer-motion';

const Counter = ({ from, to, inView }) => {
  const count = useMotionValue(from);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  
  React.useEffect(() => {
    if (inView) {
      const controls = animate(count, to, {
        duration: 4,
        ease: "easeOut",
        from: 0
      });
      
      return controls.stop;
    }
    // Reset when out of view
    count.set(from);
  }, [count, to, inView, from]);

  return <motion.span>{rounded}</motion.span>;
};

const StatsSection = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { 
    amount: 0.3, // Trigger when 30% of the component is visible
    once: true  // Only trigger once
  });

  const stats = [
    { number: 10, label: "Projects Completed", suffix: "+" },
    { number: 10, label: "Happy Clients", suffix: "+" },
    { number: 24, label: "Months Experience", suffix: "+" },
    { number: 24, label: "Support", prefix: "", suffix: "/7" }
  ];

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="py-20 bg-blue-600 dark:bg-blue-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ scale: 0.5, opacity: 0 }}
              animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.5, opacity: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-white"
            >
              <div className="text-4xl font-bold mb-2">
                {stat.prefix}
                <Counter from={0} to={stat.number} inView={isInView} />
                {stat.suffix}
              </div>
              <div className="text-blue-100">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default StatsSection;