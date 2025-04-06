import React, { useEffect, useRef } from 'react';
import { Box } from '@mui/material';
import { motion, useAnimation, useScroll } from 'framer-motion';

const Particle = ({ x, y, size, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: [0, 1, 0],
        scale: [0, 1, 0],
        x: [x, x + Math.random() * 100 - 50],
        y: [y, y + Math.random() * 100 - 50],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        delay,
        ease: 'easeInOut',
      }}
      style={{
        position: 'absolute',
        width: size,
        height: size,
        borderRadius: '50%',
        background: 'rgba(255, 140, 66, 0.1)',
        pointerEvents: 'none',
      }}
    />
  );
};

const AnimatedBackground = () => {
  const controls = useAnimation();
  const { scrollY } = useScroll();
  const containerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = scrollY.get();
      controls.start({
        background: `linear-gradient(${
          135 + scrollPosition * 0.1
        }deg, rgba(255, 245, 240, 0.8) 0%, rgba(255, 228, 214, 0.8) 100%)`,
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [controls, scrollY]);

  const particles = Array.from({ length: 20 }, (_, i) => ({
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 50 + 20,
    delay: Math.random() * 2,
  }));

  return (
    <Box
      ref={containerRef}
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: -1,
        overflow: 'hidden',
      }}
    >
      <motion.div
        animate={controls}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(135deg, rgba(255, 245, 240, 0.8) 0%, rgba(255, 228, 214, 0.8) 100%)',
        }}
      />
      {particles.map((particle, index) => (
        <Particle key={index} {...particle} />
      ))}
      <motion.div
        animate={{
          background: [
            'radial-gradient(circle at 50% 50%, rgba(255, 140, 66, 0.1) 0%, transparent 50%)',
            'radial-gradient(circle at 30% 70%, rgba(255, 140, 66, 0.1) 0%, transparent 50%)',
            'radial-gradient(circle at 70% 30%, rgba(255, 140, 66, 0.1) 0%, transparent 50%)',
            'radial-gradient(circle at 50% 50%, rgba(255, 140, 66, 0.1) 0%, transparent 50%)',
          ],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          pointerEvents: 'none',
        }}
      />
    </Box>
  );
};

export default AnimatedBackground; 