import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const HeroSection = () => {
  const navigate = useNavigate();
  const { translations } = useLanguage();

  const handleGetStarted = () => {
    const searchSection = document.getElementById('search-section');
    if (searchSection) {
      searchSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        background: 'linear-gradient(135deg, #fff5f0 0%, #ffe4d6 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            textAlign: 'center',
            maxWidth: 800,
            mx: 'auto',
            position: 'relative',
            zIndex: 1,
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Typography
              variant="h1"
              sx={{
                mb: 3,
                fontWeight: 'bold',
                color: '#ff8c42',
                fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.5rem' },
              }}
            >
              {translations?.hero?.title || 'Welcome to Seva Dwaar'}
            </Typography>
            <Typography
              variant="h5"
              sx={{
                mb: 4,
                color: 'text.secondary',
                maxWidth: '600px',
                mx: 'auto',
              }}
            >
              {translations?.hero?.subtitle || 'Your gateway to government schemes and services. Find, apply, and track all government benefits in one place.'}
            </Typography>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                variant="contained"
                onClick={handleGetStarted}
                sx={{
                  bgcolor: '#ff8c42',
                  '&:hover': {
                    bgcolor: '#ff6b35',
                  },
                  py: 2,
                  px: 6,
                  borderRadius: 2,
                  fontSize: '1.2rem',
                }}
              >
                {translations?.hero?.getStarted || 'Get Started'}
              </Button>
            </motion.div>
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
};

export default HeroSection; 