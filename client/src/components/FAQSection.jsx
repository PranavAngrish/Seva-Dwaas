import React, { useState } from 'react';
import { Box, Typography, Container, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import { motion } from 'framer-motion';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

const faqs = [
  {
    question: 'How does Seva Dwaar help me find government schemes?',
    answer: 'Seva Dwaar uses advanced AI technology to match your profile and needs with relevant government schemes. Simply enter your query or use voice search to find schemes that are most suitable for you.',
  },
  {
    question: 'Is the service available in multiple languages?',
    answer: 'Yes! Seva Dwaar supports all 22 official languages of India, plus English. You can switch between languages at any time to ensure you understand all scheme details clearly.',
  },
  {
    question: 'How do I apply for a scheme?',
    answer: 'Once you find a scheme that matches your needs, you can view detailed information and requirements. The platform will guide you through the application process step by step, and you can track your application status in real-time.',
  },
  {
    question: 'Is my personal information secure?',
    answer: 'Absolutely. We use state-of-the-art encryption and security measures to protect your data. Your information is only used to help you find and apply for relevant schemes.',
  },
  {
    question: 'Can I track my application status?',
    answer: 'Yes, you can track your application status in real-time through your dashboard. You\'ll receive notifications about any updates or required actions.',
  },
];

const FAQSection = () => {
  const [expanded, setExpanded] = useState(null);

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <Box
      sx={{
        py: 8,
        background: 'linear-gradient(135deg, #fff 0%, #fff5f0 100%)',
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
            <HelpOutlineIcon sx={{ fontSize: 40, color: '#ff8c42', mr: 2 }} />
            <Typography
              variant="h3"
              align="center"
              sx={{
                fontWeight: 'bold',
                color: '#ff8c42',
              }}
            >
              Frequently Asked Questions
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
            Find answers to common questions about Seva Dwaar
          </Typography>
        </motion.div>

        <Box sx={{ maxWidth: 800, mx: 'auto' }}>
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Accordion
                expanded={expanded === index}
                onChange={handleChange(index)}
                sx={{
                  mb: 2,
                  borderRadius: 2,
                  boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                  '&:before': {
                    display: 'none',
                  },
                  '&.Mui-expanded': {
                    margin: 0,
                  },
                }}
              >
                <AccordionSummary
                  expandIcon={
                    <motion.div
                      animate={{ rotate: expanded === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ExpandMoreIcon sx={{ color: '#ff8c42' }} />
                    </motion.div>
                  }
                  sx={{
                    backgroundColor: expanded === index ? 'rgba(255, 140, 66, 0.1)' : 'white',
                    borderRadius: 2,
                    '&.Mui-expanded': {
                      minHeight: 64,
                    },
                  }}
                >
                  <Typography
                    sx={{
                      fontWeight: 'bold',
                      color: expanded === index ? '#ff8c42' : 'text.primary',
                    }}
                  >
                    {faq.question}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails
                  sx={{
                    backgroundColor: 'white',
                    borderRadius: '0 0 16px 16px',
                  }}
                >
                  <Typography
                    sx={{
                      color: 'text.secondary',
                      lineHeight: 1.6,
                    }}
                  >
                    {faq.answer}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </motion.div>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default FAQSection; 