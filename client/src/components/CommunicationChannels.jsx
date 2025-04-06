import React from 'react';
import { Box, Typography, Paper, Button, Container } from '@mui/material';
import { motion } from 'framer-motion';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import SmsIcon from '@mui/icons-material/Sms';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';

const CommunicationChannels = () => {
  return (
    <Box sx={{ py: 8, bgcolor: '#fff' }}>
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
            Multiple Ways to Connect
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
            Access our services through various communication channels
          </Typography>
        </motion.div>

        <Box sx={{ 
          display: 'flex', 
          flexDirection: { xs: 'column', md: 'row' },
          gap: 4,
          justifyContent: 'center',
          alignItems: 'center',
          mb: 8,
          px: 2
        }}>
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            style={{ width: '100%', maxWidth: '350px' }}
          >
            <Paper
              elevation={6}
              sx={{
                p: 4,
                borderRadius: 3,
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.95))',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 140, 66, 0.1)',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                position: 'relative',
                overflow: 'hidden',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '4px',
                  background: 'linear-gradient(90deg, #ff6b35, #ff8c42)',
                  opacity: 0.8,
                },
              }}
            >
              <Box sx={{ 
                display: 'flex', 
                alignItems: 'center', 
                mb: 3,
                gap: 2
              }}>
                <WhatsAppIcon sx={{ 
                  color: '#25D366', 
                  fontSize: '2.5rem',
                  background: 'rgba(37, 211, 102, 0.1)',
                  borderRadius: '50%',
                  p: 1
                }} />
                <Typography variant="h5" sx={{ 
                  color: '#ff6b35',
                  fontWeight: 'bold'
                }}>
                  WhatsApp Chatbot
                </Typography>
              </Box>
              <Typography variant="body1" sx={{ 
                color: 'text.secondary',
                mb: 3,
                lineHeight: 1.6
              }}>
                Chat with our AI assistant on WhatsApp for instant access to all government schemes. Get personalized recommendations and detailed information in your preferred language.
              </Typography>
              <Button
                variant="contained"
                sx={{
                  background: 'linear-gradient(135deg, #25D366, #128C7E)',
                  '&:hover': {
                    background: 'linear-gradient(135deg, #128C7E, #25D366)',
                  },
                  mt: 'auto',
                  py: 1.5,
                  borderRadius: 2,
                  fontSize: '1.1rem',
                  fontWeight: 'bold',
                  textTransform: 'none',
                  boxShadow: '0 4px 12px rgba(37, 211, 102, 0.3)',
                }}
              >
                Start Chat
              </Button>
            </Paper>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            style={{ width: '100%', maxWidth: '350px' }}
          >
            <Paper
              elevation={6}
              sx={{
                p: 4,
                borderRadius: 3,
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.95))',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 140, 66, 0.1)',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                position: 'relative',
                overflow: 'hidden',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '4px',
                  background: 'linear-gradient(90deg, #ff6b35, #ff8c42)',
                  opacity: 0.8,
                },
              }}
            >
              <Box sx={{ 
                display: 'flex', 
                alignItems: 'center', 
                mb: 3,
                gap: 2
              }}>
                <SmsIcon sx={{ 
                  color: '#ff6b35', 
                  fontSize: '2.5rem',
                  background: 'rgba(255, 107, 53, 0.1)',
                  borderRadius: '50%',
                  p: 1
                }} />
                <Typography variant="h5" sx={{ 
                  color: '#ff6b35',
                  fontWeight: 'bold'
                }}>
                  SMS Service
                </Typography>
              </Box>
              <Typography variant="body1" sx={{ 
                color: 'text.secondary',
                mb: 3,
                lineHeight: 1.6
              }}>
                Register for our SMS service to get scheme information directly on your phone. Simply send your query via SMS and receive detailed responses in your preferred language.
              </Typography>
              <Button
                variant="contained"
                sx={{
                  background: 'linear-gradient(135deg, #ff6b35, #ff8c42)',
                  '&:hover': {
                    background: 'linear-gradient(135deg, #ff8c42, #ff6b35)',
                  },
                  mt: 'auto',
                  py: 1.5,
                  borderRadius: 2,
                  fontSize: '1.1rem',
                  fontWeight: 'bold',
                  textTransform: 'none',
                  boxShadow: '0 4px 12px rgba(255, 140, 66, 0.3)',
                }}
              >
                Register Now
              </Button>
            </Paper>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            style={{ width: '100%', maxWidth: '350px' }}
          >
            <Paper
              elevation={6}
              sx={{
                p: 4,
                borderRadius: 3,
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.95))',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 140, 66, 0.1)',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                position: 'relative',
                overflow: 'hidden',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '4px',
                  background: 'linear-gradient(90deg, #ff6b35, #ff8c42)',
                  opacity: 0.8,
                },
              }}
            >
              <Box sx={{ 
                display: 'flex', 
                alignItems: 'center', 
                mb: 3,
                gap: 2
              }}>
                <PhoneInTalkIcon sx={{ 
                  color: '#ff6b35', 
                  fontSize: '2.5rem',
                  background: 'rgba(255, 107, 53, 0.1)',
                  borderRadius: '50%',
                  p: 1
                }} />
                <Typography variant="h5" sx={{ 
                  color: '#ff6b35',
                  fontWeight: 'bold'
                }}>
                  IVR Service
                </Typography>
              </Box>
              <Typography variant="body1" sx={{ 
                color: 'text.secondary',
                mb: 3,
                lineHeight: 1.6
              }}>
                Call our toll-free number to speak with our AI voice assistant. Get instant responses to your queries in your preferred language through our interactive voice response system.
              </Typography>
              <Button
                variant="contained"
                sx={{
                  background: 'linear-gradient(135deg, #ff6b35, #ff8c42)',
                  '&:hover': {
                    background: 'linear-gradient(135deg, #ff8c42, #ff6b35)',
                  },
                  mt: 'auto',
                  py: 1.5,
                  borderRadius: 2,
                  fontSize: '1.1rem',
                  fontWeight: 'bold',
                  textTransform: 'none',
                  boxShadow: '0 4px 12px rgba(255, 140, 66, 0.3)',
                }}
              >
                Call Now
              </Button>
            </Paper>
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
};

export default CommunicationChannels; 