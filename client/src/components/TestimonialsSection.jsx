import React, { useState, useEffect } from 'react';
import { Box, Typography, Container, Avatar, Paper } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const testimonials = [
  {
    id: 1,
    name: 'Priya Sharma',
    role: 'Cancer Treatment Beneficiary',
    image: 'https://i.pravatar.cc/150?img=1',
    content: 'Thanks to Seva Dwaar, I found the right government scheme for my cancer treatment. The financial assistance helped me focus on recovery without worrying about medical expenses.',
  },
  {
    id: 2,
    name: 'Rahul Verma',
    role: 'Mental Health Support',
    image: 'https://i.pravatar.cc/150?img=2',
    content: 'I was struggling with depression and didn\'t know where to turn. Seva Dwaar connected me with mental health support schemes that provided counseling and medication assistance.',
  },
  {
    id: 3,
    name: 'Meena Patel',
    role: 'Maternity Care',
    image: 'https://i.pravatar.cc/150?img=3',
    content: 'The maternity care schemes I found through Seva Dwaar made my pregnancy journey much easier. I received proper medical care and financial support throughout.',
  },
  {
    id: 4,
    name: 'Arjun Singh',
    role: 'Disability Support',
    image: 'https://i.pravatar.cc/150?img=4',
    content: 'As a person with disability, I found comprehensive support through the schemes recommended by Seva Dwaar. It helped me get the medical equipment and therapy I needed.',
  },
  {
    id: 5,
    name: 'Sunita Devi',
    role: 'Senior Citizen Care',
    image: 'https://i.pravatar.cc/150?img=5',
    content: 'The health schemes for senior citizens helped me manage my chronic conditions better. I now have access to regular check-ups and necessary medications.',
  },
];

const TestimonialsSection = () => {
  const { translations } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleDotClick = (index) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  return (
    <Box
      sx={{
        py: 8,
        background: 'linear-gradient(135deg, #fff5f0 0%, #ffe4d6 100%)',
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          align="center"
          sx={{
            mb: 2,
            fontWeight: 'bold',
            color: '#ff8c42',
          }}
        >
          {translations?.testimonials?.title || 'Health Success Stories'}
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
          {translations?.testimonials?.subtitle || 'Real stories from people who found the right health support through government schemes'}
        </Typography>

        <Box
          sx={{
            position: 'relative',
            height: '400px',
            overflow: 'hidden',
          }}
        >
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              initial={{ opacity: 0, x: direction > 0 ? 1000 : -1000 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction > 0 ? -1000 : 1000 }}
              transition={{
                x: { type: 'spring', stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
              }}
            >
              <Paper
                elevation={3}
                sx={{
                  p: 4,
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  background: 'rgba(255, 255, 255, 0.9)',
                  borderRadius: 4,
                }}
              >
                <Avatar
                  src={testimonials[currentIndex].image}
                  sx={{
                    width: 100,
                    height: 100,
                    mb: 3,
                    border: '3px solid #ff8c42',
                  }}
                />
                <Typography
                  variant="h5"
                  sx={{
                    mb: 2,
                    fontWeight: 'bold',
                    color: '#ff8c42',
                  }}
                >
                  {testimonials[currentIndex].name}
                </Typography>
                <Typography
                  variant="subtitle1"
                  sx={{
                    mb: 3,
                    color: 'text.secondary',
                  }}
                >
                  {testimonials[currentIndex].role}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: 'text.primary',
                    maxWidth: '800px',
                    mx: 'auto',
                    lineHeight: 1.8,
                  }}
                >
                  {testimonials[currentIndex].content}
                </Typography>
              </Paper>
            </motion.div>
          </AnimatePresence>
        </Box>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            mt: 4,
            gap: 1,
          }}
        >
          {testimonials.map((_, index) => (
            <motion.div
              key={index}
              onClick={() => handleDotClick(index)}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <Box
                sx={{
                  width: 12,
                  height: 12,
                  borderRadius: '50%',
                  bgcolor: index === currentIndex ? '#ff8c42' : 'rgba(255, 140, 66, 0.3)',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                }}
              />
            </motion.div>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default TestimonialsSection; 