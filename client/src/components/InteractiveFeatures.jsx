import React, { useState } from 'react';
import { Box, Typography, Container, Grid, IconButton, Paper } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useInView } from 'react-intersection-observer';

const FeatureCard = ({ icon, title, description, delay }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay }}
    >
      <Paper
        elevation={isHovered ? 8 : 3}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        sx={{
          p: 4,
          height: '100%',
          borderRadius: 2,
          background: 'rgba(255, 255, 255, 0.9)',
          backdropFilter: 'blur(10px)',
          cursor: 'pointer',
          transition: 'all 0.3s ease',
          '&:hover': {
            transform: 'translateY(-5px)',
          },
        }}
      >
        <motion.div
          animate={{
            scale: isHovered ? 1.1 : 1,
            rotate: isHovered ? 5 : 0,
          }}
          transition={{ duration: 0.3 }}
        >
          <IconButton
            sx={{
              bgcolor: 'rgba(255, 140, 66, 0.1)',
              mb: 2,
              '&:hover': {
                bgcolor: 'rgba(255, 140, 66, 0.2)',
              },
            }}
          >
            {icon}
          </IconButton>
        </motion.div>
        <Typography variant="h5" sx={{ mb: 2, fontWeight: 'bold', color: '#ff8c42' }}>
          {title}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          {description}
        </Typography>
      </Paper>
    </motion.div>
  );
};

const InteractiveFeatures = () => {
  const features = [
    {
      icon: <SearchIcon sx={{ fontSize: 30, color: '#ff8c42' }} />,
      title: 'Smart Search',
      description: 'Find relevant government schemes instantly with our AI-powered search technology.',
    },
    {
      icon: <LanguageIcon sx={{ fontSize: 30, color: '#ff8c42' }} />,
      title: 'Multi-Language Support',
      description: 'Access information in your preferred language with our comprehensive translation system.',
    },
    {
      icon: <NotificationsIcon sx={{ fontSize: 30, color: '#ff8c42' }} />,
      title: 'Real-time Updates',
      description: 'Stay informed with instant notifications about your applications and new schemes.',
    },
    {
      icon: <LightbulbIcon sx={{ fontSize: 30, color: '#ff8c42' }} />,
      title: 'Smart Recommendations',
      description: 'Get personalized scheme recommendations based on your profile and needs.',
    },
  ];

  return (
    <Box
      sx={{
        py: 8,
        background: 'linear-gradient(135deg, #fff5f0 0%, #ffe4d6 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 4 }}>
            <LightbulbIcon sx={{ fontSize: 40, color: '#ff8c42', mr: 2 }} />
            <Typography
              variant="h3"
              align="center"
              sx={{
                fontWeight: 'bold',
                color: '#ff8c42',
              }}
            >
              Interactive Features
            </Typography>
          </Box>
          <Typography
            variant="h6"
            align="center"
            sx={{
              mb: 6,
              color: 'text.secondary',
              maxWidth: '800px',
              mx: 'auto',
            }}
          >
            Experience the power of our innovative features designed to make your journey seamless
          </Typography>
        </motion.div>

        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <FeatureCard {...feature} delay={index * 0.1} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default InteractiveFeatures; 