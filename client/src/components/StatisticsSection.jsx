import React, { useEffect, useState } from 'react';
import { Box, Typography, Grid, Container } from '@mui/material';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const StatCard = ({ number, label, icon, index }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [count, setCount] = useState(0);

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
      const duration = 2000;
      const steps = 60;
      const increment = number / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= number) {
          setCount(number);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [inView, number]);

  return (
    <Grid item xs={12} sm={6} md={3}>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={controls}
        transition={{ duration: 0.5, delay: index * 0.1 }}
      >
        <Box
          sx={{
            textAlign: 'center',
            p: 3,
            borderRadius: 2,
            background: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(10px)',
            boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
            transition: 'transform 0.3s ease',
            '&:hover': {
              transform: 'translateY(-5px)',
            },
          }}
        >
          <Box
            sx={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: 80,
              height: 80,
              borderRadius: '50%',
              bgcolor: 'rgba(255, 140, 66, 0.1)',
              mb: 2,
            }}
          >
            {icon}
          </Box>
          <Typography
            variant="h3"
            sx={{
              color: '#ff8c42',
              fontWeight: 'bold',
              mb: 1,
            }}
          >
            {count.toLocaleString()}+
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: 'text.secondary',
            }}
          >
            {label}
          </Typography>
        </Box>
      </motion.div>
    </Grid>
  );
};

const StatisticsSection = () => {
  const stats = [
    {
      number: 1000,
      label: 'Government Schemes',
      icon: '📋',
    },
    {
      number: 50000,
      label: 'Active Users',
      icon: '👥',
    },
    {
      number: 1000000,
      label: 'Applications Processed',
      icon: '✅',
    },
    {
      number: 22,
      label: 'Languages Supported',
      icon: '🌐',
    },
  ];

  return (
    <Box
      sx={{
        py: 8,
        background: 'linear-gradient(135deg, #ff6b35 0%, #ff8c42 100%)',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'url("/pattern.svg")',
          opacity: 0.1,
        },
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Typography
            variant="h3"
            align="center"
            sx={{
              mb: 2,
              fontWeight: 'bold',
              color: 'white',
              textShadow: '2px 2px 4px rgba(0,0,0,0.2)',
            }}
          >
            Our Impact
          </Typography>
          <Typography
            variant="h6"
            align="center"
            sx={{
              mb: 6,
              color: 'rgba(255,255,255,0.9)',
              maxWidth: '800px',
              mx: 'auto',
              textShadow: '1px 1px 2px rgba(0,0,0,0.2)',
            }}
          >
            Making a difference in people's lives through accessible government services
          </Typography>
        </motion.div>

        <Grid container spacing={4}>
          {stats.map((stat, index) => (
            <StatCard key={index} {...stat} index={index} />
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default StatisticsSection; 