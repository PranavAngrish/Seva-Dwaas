import React, { useEffect, useState } from 'react';
import { Box, Typography, CircularProgress } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';

const Loading = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Box
            sx={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'linear-gradient(135deg, #fff5f0 0%, #ffe4d6 100%)',
              zIndex: 9999,
            }}
          >
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 360],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Box
                component="img"
                src="/logo.svg"
                alt="Seva Dwaar Logo"
                sx={{
                  width: 150,
                  height: 150,
                  mb: 3,
                }}
              />
            </motion.div>
            <Typography
              variant="h4"
              component={motion.h4}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              sx={{
                color: '#ff8c42',
                fontWeight: 'bold',
                mb: 2,
              }}
            >
              Seva Dwaar
            </Typography>
            <CircularProgress
              size={40}
              sx={{
                color: '#ff8c42',
                '& .MuiCircularProgress-circle': {
                  strokeLinecap: 'round',
                },
              }}
            />
          </Box>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loading; 