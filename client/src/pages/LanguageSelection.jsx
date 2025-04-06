import React from 'react';
import { Box, Typography, Grid, Button, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const languages = [
  { code: 'en', name: 'English' },
  { code: 'hi', name: 'हिंदी' },
  { code: 'bn', name: 'বাংলা' },
  { code: 'ta', name: 'தமிழ்' },
  { code: 'te', name: 'తెలుగు' },
  { code: 'kn', name: 'ಕನ್ನಡ' }
];

const LanguageSelection = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const { changeLanguage } = useLanguage();

  const handleLanguageSelect = (languageCode) => {
    changeLanguage(languageCode);
    navigate('/loading');
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, rgba(255, 140, 66, 0.1) 0%, rgba(255, 107, 53, 0.1) 100%)',
        p: 4
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Typography
          variant="h2"
          sx={{
            mb: 4,
            textAlign: 'center',
            color: '#ff6b35',
            fontWeight: 'bold',
            fontSize: { xs: '2.5rem', md: '3.5rem' }
          }}
        >
          Welcome to Seva Dwaar
        </Typography>

        <Typography
          variant="h5"
          sx={{
            mb: 6,
            textAlign: 'center',
            color: 'text.secondary',
            fontSize: { xs: '1.2rem', md: '1.5rem' }
          }}
        >
          Select Your Language
        </Typography>

        <Grid container spacing={3} justifyContent="center">
          {languages.map((lang) => (
            <Grid item xs={6} sm={4} md={3} key={lang.code}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  onClick={() => handleLanguageSelect(lang.code)}
                  sx={{
                    width: '100%',
                    height: '100px',
                    background: 'linear-gradient(135deg, rgba(255, 107, 53, 0.1), rgba(255, 140, 66, 0.1))',
                    borderRadius: 2,
                    color: '#ff6b35',
                    fontSize: '1.2rem',
                    fontWeight: 'bold',
                    '&:hover': {
                      background: 'linear-gradient(135deg, rgba(255, 107, 53, 0.2), rgba(255, 140, 66, 0.2))',
                    }
                  }}
                >
                  {lang.name}
                </Button>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </motion.div>
    </Box>
  );
};

export default LanguageSelection; 