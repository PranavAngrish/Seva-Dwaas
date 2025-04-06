import React, { useState } from 'react';
import { Box, Typography, Container, TextField, Button, Grid, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import SendIcon from '@mui/icons-material/Send';
import ContactMailIcon from '@mui/icons-material/ContactMail';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
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
            <ContactMailIcon sx={{ fontSize: 40, color: '#ff8c42', mr: 2 }} />
            <Typography
              variant="h3"
              align="center"
              sx={{
                fontWeight: 'bold',
                color: '#ff8c42',
              }}
            >
              Contact Us
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
            Have questions or feedback? We'd love to hear from you!
          </Typography>
        </motion.div>

        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Paper
                elevation={3}
                sx={{
                  p: 4,
                  borderRadius: 2,
                  background: 'rgba(255, 255, 255, 0.9)',
                  backdropFilter: 'blur(10px)',
                  height: '100%',
                }}
              >
                <Typography variant="h5" sx={{ mb: 3, color: '#ff8c42', fontWeight: 'bold' }}>
                  Get in Touch
                </Typography>
                <Typography variant="body1" sx={{ mb: 2 }}>
                  Our team is here to help you with any questions about government schemes, the application process, or technical support.
                </Typography>
                <Typography variant="body1" sx={{ mb: 2 }}>
                  <strong>Email:</strong> support@seva-dwaar.com
                </Typography>
                <Typography variant="body1" sx={{ mb: 2 }}>
                  <strong>Phone:</strong> +91 12345 67890
                </Typography>
                <Typography variant="body1">
                  <strong>Address:</strong> 123 Government Services Avenue, New Delhi, India
                </Typography>
              </Paper>
            </motion.div>
          </Grid>
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Paper
                elevation={3}
                sx={{
                  p: 4,
                  borderRadius: 2,
                  background: 'rgba(255, 255, 255, 0.9)',
                  backdropFilter: 'blur(10px)',
                }}
              >
                <form onSubmit={handleSubmit}>
                  <TextField
                    fullWidth
                    label="Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    margin="normal"
                    required
                    sx={{ mb: 2 }}
                  />
                  <TextField
                    fullWidth
                    label="Email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    margin="normal"
                    required
                    sx={{ mb: 2 }}
                  />
                  <TextField
                    fullWidth
                    label="Subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    margin="normal"
                    required
                    sx={{ mb: 2 }}
                  />
                  <TextField
                    fullWidth
                    label="Message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    margin="normal"
                    required
                    multiline
                    rows={4}
                    sx={{ mb: 3 }}
                  />
                  <Button
                    type="submit"
                    variant="contained"
                    endIcon={<SendIcon />}
                    sx={{
                      bgcolor: '#ff8c42',
                      '&:hover': {
                        bgcolor: '#ff6b35',
                      },
                      py: 1.5,
                      px: 4,
                      borderRadius: 2,
                    }}
                  >
                    Send Message
                  </Button>
                </form>
              </Paper>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ContactSection; 