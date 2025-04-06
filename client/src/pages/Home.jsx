import React from 'react';
import { Box } from '@mui/material';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import FeaturesSection from '../components/FeaturesSection';
import SearchSection from '../components/SearchSection';
import StatisticsSection from '../components/StatisticsSection';
import TestimonialsSection from '../components/TestimonialsSection';
import FAQSection from '../components/FAQSection';
import ContactSection from '../components/ContactSection';
import InteractiveFeatures from '../components/InteractiveFeatures';
import AnimatedBackground from '../components/AnimatedBackground';
import AnimatedScrollIndicator from '../components/AnimatedScrollIndicator';
import Footer from '../components/Footer';
import CommunicationChannels from '../components/CommunicationChannels';

const Home = () => {
  return (
    <Box sx={{ overflowX: 'hidden' }}>
      <AnimatedBackground />
      <AnimatedScrollIndicator />
      <Navbar />
      <HeroSection />
      <SearchSection />
      <CommunicationChannels />
      <FeaturesSection />
      <InteractiveFeatures />
      <StatisticsSection />
      <TestimonialsSection />
      <FAQSection />
      <ContactSection />
      <Footer />
    </Box>
  );
};

export default Home; 