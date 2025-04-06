import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Typography, Grid, Button, Container } from '@mui/material';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const languages = [
  { code: 'en', name: 'English' },
  { code: 'hi', name: 'हिंदी' },
  { code: 'bn', name: 'বাংলা' },
  { code: 'te', name: 'తెలుగు' },
  { code: 'ta', name: 'தமிழ்' },
  { code: 'kn', name: 'ಕನ್ನಡ' },
  { code: 'mr', name: 'मराठी' },
  { code: 'gu', name: 'ગુજરાતી' },
  { code: 'pa', name: 'ਪੰਜਾਬੀ' },
  { code: 'ml', name: 'മലയാളം' },
  { code: 'or', name: 'ଓଡ଼ିଆ' },
  { code: 'as', name: 'অসমীয়া' },
  { code: 'ur', name: 'اردو' },
  { code: 'ne', name: 'नेपाली' },
  { code: 'sd', name: 'سنڌي' },
  { code: 'sa', name: 'संस्कृतम्' },
  { code: 'ks', name: 'کٲشُر' },
  { code: 'kok', name: 'कोंकणी' },
  { code: 'mai', name: 'मैथिली' },
  { code: 'mni', name: 'মৈতৈলোন্' },
  { code: 'doi', name: 'डोगरी' },
  { code: 'sat', name: 'ᱥᱟᱱᱛᱟᱲᱤ' }
];

const LanguageSelection = () => {
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
        background: 'linear-gradient(135deg, rgba(255, 140, 66, 0.1) 0%, rgba(255, 107, 53, 0.1) 100%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        py: 4,
      }}
    >
      <Container maxWidth="md">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Typography
            variant="h2"
            align="center"
            sx={{
              mb: 2,
              color: '#ff6b35',
              fontWeight: 'bold',
              fontSize: { xs: '2.5rem', md: '3.5rem' }
            }}
          >
            Welcome to Seva Dwaar
          </Typography>
          <Typography
            variant="h3"
            align="center"
            sx={{
              mb: 2,
              color: '#ff6b35',
              fontWeight: 'bold',
            }}
          >
            Select Your Language
          </Typography>
          <Typography
            variant="h6"
            align="center"
            sx={{
              mb: 4,
              color: 'text.secondary',
              maxWidth: '600px',
              mx: 'auto',
            }}
          >
            Choose your preferred language to continue
          </Typography>
        </motion.div>

        <Grid container spacing={2} justifyContent="center">
          {languages.map((language, index) => (
            <Grid item xs={6} sm={4} md={3} key={language.code}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  fullWidth
                  variant="contained"
                  onClick={() => handleLanguageSelect(language.code)}
                  sx={{
                    py: 2,
                    borderRadius: 2,
                    background: 'rgba(255,255,255,0.9)',
                    color: '#ff8c42',
                    fontWeight: 'bold',
                    '&:hover': {
                      background: 'white',
                    },
                  }}
                >
                  {language.name}
                </Button>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default LanguageSelection; 