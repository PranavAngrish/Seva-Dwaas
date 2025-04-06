import React from 'react';
import { Box, Typography, Grid, Card, CardContent, Container } from '@mui/material';
import { motion } from 'framer-motion';
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import NotificationsIcon from '@mui/icons-material/Notifications';
import TrackChangesIcon from '@mui/icons-material/TrackChanges';

const features = [
  {
    icon: <SearchIcon sx={{ fontSize: 40, color: '#ff8c42' }} />,
    title: 'Easy Search',
    description: 'Find relevant government schemes quickly with our intelligent search system.'
  },
  {
    icon: <LanguageIcon sx={{ fontSize: 40, color: '#ff8c42' }} />,
    title: 'Multi-language Support',
    description: 'Access information in your preferred language from our wide range of supported languages.'
  },
  {
    icon: <NotificationsIcon sx={{ fontSize: 40, color: '#ff8c42' }} />,
    title: 'Real-time Updates',
    description: 'Stay informed with instant notifications about new schemes and application status.'
  },
  {
    icon: <TrackChangesIcon sx={{ fontSize: 40, color: '#ff8c42' }} />,
    title: 'Track Applications',
    description: 'Monitor the progress of your applications and get timely updates on their status.'
  }
];

const FeatureCard = ({ icon, title, description, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
  >
    <Card
      sx={{
        height: '100%',
        borderRadius: 2,
        boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
        transition: 'transform 0.3s ease',
        '&:hover': {
          transform: 'translateY(-5px)',
        },
      }}
    >
      <CardContent sx={{ p: 3 }}>
        <Box sx={{ mb: 2 }}>{icon}</Box>
        <Typography variant="h6" sx={{ mb: 1, fontWeight: 'bold', color: '#ff8c42' }}>
          {title}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
    </Card>
  </motion.div>
);

const FeaturesSection = () => {
  return (
    <Box sx={{ py: 8, bgcolor: '#fff5f0' }}>
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
              color: '#ff8c42',
            }}
          >
            Why Choose Seva Dwaar?
          </Typography>
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
            We make accessing government schemes simple and efficient
          </Typography>
        </motion.div>

        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <FeatureCard {...feature} index={index} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default FeaturesSection; 