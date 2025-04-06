import React, { useState, useEffect } from 'react';
import { 
  Box, 
  Typography, 
  TextField, 
  Button, 
  Paper,
  IconButton,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
  Divider,
  CircularProgress,
  Alert,
  Snackbar,
  Container,
  Tooltip,
  Chip
} from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import MicIcon from '@mui/icons-material/Mic';
import SearchIcon from '@mui/icons-material/Search';
import TranslateIcon from '@mui/icons-material/Translate';
import { useLanguage } from '../context/LanguageContext';
import { useInView } from 'react-intersection-observer';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import DescriptionIcon from '@mui/icons-material/Description';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import SmsIcon from '@mui/icons-material/Sms';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import { useNavigate } from 'react-router-dom';

const exampleQueries = [
  "I am pregnant, which schemes can I use?",
  "I need financial help for cancer treatment",
  "I am looking for mental health support",
  "I need help with my child's medical expenses",
  "I am a senior citizen with health issues",
  "I need assistance for disability treatment"
];

const keyframes = `
  @keyframes pulse {
    0% {
      transform: scale(1);
      opacity: 0.5;
    }
    50% {
      transform: scale(1.1);
      opacity: 0.8;
    }
    100% {
      transform: scale(1);
      opacity: 0.5;
    }
  }

  @keyframes colorPulse {
    0% {
      color: #ff6b35;
      filter: drop-shadow(0 0 8px rgba(255, 107, 53, 0.5));
    }
    50% {
      color: #ff8c42;
      filter: drop-shadow(0 0 12px rgba(255, 140, 66, 0.7));
    }
    100% {
      color: #ff6b35;
      filter: drop-shadow(0 0 8px rgba(255, 107, 53, 0.5));
    }
  }

  @keyframes gradientPulse {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  @keyframes glow {
    0% {
      box-shadow: 0 0 20px rgba(255, 107, 53, 0.3);
    }
    50% {
      box-shadow: 0 0 30px rgba(255, 140, 66, 0.5);
    }
    100% {
      box-shadow: 0 0 20px rgba(255, 107, 53, 0.3);
    }
  }
`;

const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = keyframes;
document.head.appendChild(styleSheet);

const SearchSection = () => {
  const navigate = useNavigate();
  const { language } = useLanguage();
  const [isVoiceMode, setIsVoiceMode] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [schemes, setSchemes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showError, setShowError] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [isMicActive, setIsMicActive] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const inputRef = React.useRef(null);

  const scrollToInput = () => {
    if (inputRef.current) {
      inputRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    }
  };

  const handleInputClick = () => {
    scrollToInput();
  };

  const handleVoiceClick = () => {
    setIsVoiceMode(!isVoiceMode);
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) {
      setError('Please enter a search query');
      setShowError(true);
      return;
    }

    setIsLoading(true);
    setError(null);
    
    try {
      // TODO: Replace with actual API call
      // const response = await fetch('/api/search', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ query: searchQuery })
      // });
      // const data = await response.json();
      // setSchemes(data.schemes);

      // Simulating API call
      setTimeout(() => {
        setSchemes([
          {
            id: 1,
            title: 'Registered BOC Workers in case of an Accidental Death',
            description: 'Launched on 1st January 2018, the scheme "Registered BOC Workers in Case of Accidental Death" is a Welfare Scheme by the Building and Other Construction Workers Welfare Board, Labour Department, Jammu & Kashmir. Through this scheme, financial assistance of ₹4,00,000/- is provided to the nominee or dependents of registered BOC workers in the event of an accidental death.'
          },
          {
            id: 2,
            title: 'Accidental Death Benefit Scheme',
            description: 'The "Accidental Death Benefit Scheme" is a Welfare Scheme by the Puducherry Building and Other Construction Workers Welfare Board, Labour Department, Union Territory of Puducherry. This scheme extends financial assistance of ₹2,25,000/- to the nominees/dependents of the deceased Construction Worker, apart from the ₹2,00,000/- extended through the Life Insurance Corporation (LIC). '
          }
        ]);
        setIsLoading(false);
      }, 1500);
    } catch (err) {
      setError('Failed to fetch schemes. Please try again.');
      setShowError(true);
      setIsLoading(false);
    }
  };

  const handleVoiceSearch = () => {
    setIsMicActive(!isMicActive);
    scrollToInput();
  };

  const handleLanguageChange = () => {
    // Implement language change logic here
  };

  const handleExampleClick = (query) => {
    setSearchQuery(query);
  };

  const handleSchemeClick = (scheme) => {
    navigate(`/scheme/${scheme.id}`, { state: { scheme } });
  };

  return (
    <Box
      ref={ref}
      id="search-section"
      sx={{
        py: 12,
        background: '#fff',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(135deg, rgba(255, 140, 66, 0.1) 0%, rgba(255, 107, 53, 0.1) 100%)',
          zIndex: 0,
        },
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <Box sx={{ position: 'relative', mb: 8 }}>
            <Typography
              variant="h4"
              sx={{
                mb: 2,
                color: '#ff6b35',
                fontWeight: 'bold',
                textAlign: 'center',
                fontSize: { xs: '1.8rem', md: '2.2rem' }
              }}
            >
              Find Your Scheme
            </Typography>
            <Typography
              variant="h5"
              align="center"
              sx={{
                mb: 6,
                color: 'text.secondary',
                maxWidth: '800px',
                mx: 'auto',
                fontWeight: 500,
                position: 'relative',
                lineHeight: 1.6,
              }}
            >
              Tell us about your situation or needs, and we'll find the perfect government schemes for you
            </Typography>
          </Box>
        </motion.div>

        

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Paper
            elevation={6}
            sx={{
              p: 6,
              borderRadius: 4,
              background: '#fff',
              maxWidth: 900,
              mx: 'auto',
              border: '1px solid rgba(255, 140, 66, 0.1)',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
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
                borderRadius: '2px 2px 0 0',
              },
            }}
          >
            <Box sx={{ position: 'relative', zIndex: 1 }}>
              <motion.div
                initial={{ opacity: 1, scale: 1, y: 0 }}
                animate={{ 
                  opacity: isMicActive ? 0 : 1,
                  scale: isMicActive ? 0.95 : 1,
                  y: isMicActive ? -20 : 0,
                }}
                transition={{ 
                  duration: 0.6,
                  ease: [0.4, 0, 0.2, 1],
                  opacity: { duration: 0.4 },
                  scale: { duration: 0.5 },
                  y: { duration: 0.5 }
                }}
              >
                <Box 
                  ref={inputRef}
                  sx={{ display: 'flex', gap: 2, mb: 4 }}
                  onClick={handleInputClick}
                >
                  <TextField
                    fullWidth
                    variant="outlined"
                    placeholder="Describe your situation or needs..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    multiline
                    rows={3}
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        borderRadius: 2,
                        fontSize: '1.1rem',
                        background: 'rgba(255, 255, 255, 0.9)',
                        '&:hover .MuiOutlinedInput-notchedOutline': {
                          borderColor: '#ff8c42',
                        },
                        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                          borderColor: '#ff8c42',
                          borderWidth: '2px',
                        },
                      },
                    }}
                  />
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      variant="contained"
                      onClick={handleSearch}
                      sx={{
                        background: 'linear-gradient(135deg, #ff6b35, #ff8c42)',
                        '&:hover': {
                          background: 'linear-gradient(135deg, #ff8c42, #ff6b35)',
                        },
                        px: 6,
                        py: 2,
                        borderRadius: 2,
                        fontSize: '1.1rem',
                        fontWeight: 'bold',
                        textTransform: 'none',
                        boxShadow: '0 4px 12px rgba(255, 140, 66, 0.3)',
                        minWidth: '120px',
                      }}
                    >
                      <SearchIcon sx={{ mr: 1, fontSize: '1.5rem' }} />
                      Search
                    </Button>
                  </motion.div>
                </Box>
              </motion.div>

              <Box 
                sx={{ 
                  display: 'flex', 
                  flexDirection: isMicActive ? 'column' : 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: isMicActive ? 2 : 3, 
                  mb: isMicActive ? 2 : (schemes.length > 0 ? 2 : 4),
                  transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
                  width: isMicActive ? '400px' : 'auto',
                  mx: 'auto',
                  transform: isMicActive ? 'scale(1.02)' : 'scale(1)',
                }}
              >
                <motion.div
                  style={{
                    position: 'relative',
                    width: isMicActive ? 'auto' : 'auto',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: 2,
                  }}
                  layout
                  transition={{
                    layout: { 
                      duration: 0.8,
                      ease: [0.4, 0, 0.2, 1]
                    }
                  }}
                >
                  <Tooltip title="Change Language">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <IconButton
                        onClick={handleLanguageChange}
                        sx={{
                          background: 'linear-gradient(135deg, rgba(255, 107, 53, 0.1), rgba(255, 140, 66, 0.1))',
                          '&:hover': {
                            background: 'linear-gradient(135deg, rgba(255, 107, 53, 0.3), rgba(255, 140, 66, 0.3))',
                          },
                          width: 56,
                          height: 56,
                        }}
                      >
                        <TranslateIcon sx={{ color: '#ff8c42', fontSize: '1.8rem' }} />
                      </IconButton>
                    </motion.div>
                  </Tooltip>

                  <Tooltip title="Voice Search">
                    <IconButton
                      onClick={handleVoiceSearch}
                      sx={{
                        background: isMicActive 
                          ? 'linear-gradient(135deg, rgba(255, 107, 53, 0.4), rgba(255, 140, 66, 0.4))'
                          : 'linear-gradient(135deg, rgba(255, 107, 53, 0.1), rgba(255, 140, 66, 0.1))',
                        '&:hover': {
                          background: 'linear-gradient(135deg, rgba(255, 107, 53, 0.5), rgba(255, 140, 66, 0.5))',
                        },
                        width: isMicActive ? '200px' : '56px',
                        height: isMicActive ? '200px' : '56px',
                        position: 'relative',
                        transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
                        transform: isMicActive ? 'scale(1.05)' : 'scale(1)',
                        '&::before': isMicActive ? {
                          content: '""',
                          position: 'absolute',
                          top: -16,
                          left: -16,
                          right: -16,
                          bottom: -16,
                          borderRadius: '50%',
                          background: 'linear-gradient(135deg, rgba(255, 107, 53, 0.15), rgba(255, 140, 66, 0.15))',
                          animation: 'pulse 2s infinite',
                          zIndex: -1,
                        } : {},
                        '&::after': isMicActive ? {
                          content: '""',
                          position: 'absolute',
                          top: -12,
                          left: -12,
                          right: -12,
                          bottom: -12,
                          borderRadius: '50%',
                          border: '2px solid #ff8c42',
                          animation: 'pulse 2s infinite',
                          animationDelay: '1s',
                        } : {},
                      }}
                    >
                      <MicIcon sx={{ 
                        color: '#ff8c42', 
                        fontSize: isMicActive ? '4rem' : '1.8rem',
                        transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
                        transform: isMicActive ? 'scale(1.1)' : 'scale(1)',
                        animation: isMicActive ? 'colorPulse 2s infinite' : 'none',
                        filter: isMicActive ? 'drop-shadow(0 0 8px rgba(255, 140, 66, 0.5))' : 'none',
                      }} />
                    </IconButton>
                  </Tooltip>
                </motion.div>

                {isMicActive && (
                  <motion.div
                    initial={{ opacity: 0, y: 20, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 20, scale: 0.9 }}
                    transition={{ 
                      duration: 0.8,
                      ease: [0.4, 0, 0.2, 1],
                      opacity: { duration: 0.6 },
                      y: { duration: 0.7 },
                      scale: { duration: 0.7 }
                    }}
                  >
                    <Box
                      sx={{
                        mt: 2,
                        p: 4,
                        borderRadius: 2,
                        background: 'linear-gradient(135deg, rgba(255, 107, 53, 0.1), rgba(255, 140, 66, 0.1))',
                        textAlign: 'center',
                        border: '1px solid rgba(255, 140, 66, 0.2)',
                        width: '100%',
                        maxWidth: '400px',
                        mx: 'auto',
                        transform: 'scale(1)',
                        transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
                        '&:hover': {
                          transform: 'scale(1.02)',
                        },
                      }}
                    >
                      <Typography 
                        variant="h6" 
                        sx={{ 
                          color: '#ff8c42',
                          fontWeight: 600,
                          transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
                        }}
                      >
                        Listening... Speak now
                      </Typography>
                    </Box>
                  </motion.div>
                )}
              </Box>

              {!isMicActive && !schemes.length && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.5 }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      mb: 3,
                      color: 'text.secondary',
                      textAlign: 'center',
                      fontWeight: 600,
                      position: 'relative',
                    }}
                  >
                    Try these example queries:
                  </Typography>

                  <Box
                    sx={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: 2,
                      justifyContent: 'center',
                    }}
                  >
                    {exampleQueries.map((query, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ 
                          duration: 0.5,
                          delay: index * 0.05,
                          ease: [0.4, 0, 0.2, 1]
                        }}
                      >
                        <Chip
                          label={query}
                          onClick={() => handleExampleClick(query)}
                          sx={{
                            background: 'linear-gradient(135deg, rgba(255, 107, 53, 0.1), rgba(255, 140, 66, 0.1))',
                            color: '#ff8c42',
                            '&:hover': {
                              background: 'linear-gradient(135deg, rgba(255, 107, 53, 0.2), rgba(255, 140, 66, 0.2))',
                            },
                            fontSize: '1rem',
                            height: '40px',
                            px: 2,
                            borderRadius: '20px',
                            border: '1px solid rgba(255, 140, 66, 0.2)',
                            cursor: 'pointer',
                            transition: 'all 0.3s ease',
                          }}
                        />
                      </motion.div>
                    ))}
                  </Box>
                </motion.div>
              )}

              {schemes.length > 0 && !isLoading && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ 
                    duration: 0.6, 
                    ease: [0.4, 0, 0.2, 1],
                    delay: 0.2
                  }}
                  style={{
                    width: '100%',
                    maxWidth: '800px',
                    mx: 'auto',
                    mt: isMicActive ? 1 : 0,
                  }}
                >
                  <List sx={{ py: 0 }}>
                    {schemes.map((scheme, index) => (
                      <React.Fragment key={scheme.id}>
                        <ListItem disablePadding>
                          <ListItemButton
                            component={motion.div}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ 
                              duration: 0.5,
                              delay: index * 0.1,
                              ease: [0.4, 0, 0.2, 1]
                            }}
                            whileHover={{ 
                              x: 10,
                              scale: 1.02,
                              boxShadow: '0 8px 24px rgba(255, 140, 66, 0.2)',
                            }}
                            onClick={() => handleSchemeClick(scheme)}
                            sx={{
                              py: 3,
                              px: 4,
                              borderRadius: 2,
                              background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.95))',
                              backdropFilter: 'blur(10px)',
                              border: '1px solid rgba(255, 140, 66, 0.1)',
                              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                              position: 'relative',
                              overflow: 'hidden',
                              '&:hover': {
                                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 1))',
                                borderColor: 'rgba(255, 140, 66, 0.2)',
                                '& .scheme-icon': {
                                  transform: 'scale(1.1) rotate(5deg)',
                                },
                                '& .scheme-arrow': {
                                  transform: 'translateX(5px)',
                                },
                              },
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
                              '&::after': {
                                content: '""',
                                position: 'absolute',
                                top: 0,
                                right: 0,
                                width: '100px',
                                height: '100px',
                                background: 'radial-gradient(circle, rgba(255, 107, 53, 0.05) 0%, rgba(255, 140, 66, 0) 70%)',
                                transform: 'translate(50%, -50%)',
                                transition: 'all 0.3s ease',
                              },
                            }}
                          >
                            <Box
                              className="scheme-icon"
                              sx={{
                                mr: 3,
                                width: 48,
                                height: 48,
                                borderRadius: '12px',
                                background: 'linear-gradient(135deg, rgba(255, 107, 53, 0.1), rgba(255, 140, 66, 0.1))',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                transition: 'all 0.3s ease',
                              }}
                            >
                              <DescriptionIcon sx={{ color: '#ff8c42', fontSize: '1.8rem' }} />
                            </Box>
                            <ListItemText
                              primary={
                                <Typography
                                  variant="h6"
                                  sx={{ 
                                    color: '#ff6b35',
                                    fontWeight: 'bold',
                                    fontSize: '1.2rem',
                                    mb: 1,
                                    position: 'relative',
                                    display: 'inline-block',
                                    '&::after': {
                                      content: '""',
                                      position: 'absolute',
                                      bottom: '4px',
                                      left: 0,
                                      width: '100%',
                                      height: '2px',
                                      background: 'linear-gradient(90deg, rgba(255, 107, 53, 0.3), rgba(255, 140, 66, 0.3))',
                                      transform: 'scaleX(0)',
                                      transformOrigin: 'left',
                                      transition: 'transform 0.3s ease',
                                    },
                                    '&:hover::after': {
                                      transform: 'scaleX(1)',
                                    },
                                  }}
                                >
                                  {scheme.title}
                                </Typography>
                              }
                              secondary={
                                <Typography
                                  variant="body1"
                                  sx={{
                                    color: 'text.secondary',
                                    mt: 1,
                                    fontSize: '1.1rem',
                                    lineHeight: 1.6,
                                    position: 'relative',
                                    '&::before': {
                                      content: '""',
                                      position: 'absolute',
                                      top: -8,
                                      left: 0,
                                      width: '40px',
                                      height: '2px',
                                      background: 'linear-gradient(90deg, rgba(255, 107, 53, 0.2), rgba(255, 140, 66, 0.2))',
                                    },
                                  }}
                                >
                                  {scheme.description}
                                </Typography>
                              }
                            />
                            <motion.div
                              className="scheme-arrow"
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.95 }}
                              sx={{
                                position: 'absolute',
                                right: 16,
                                top: '50%',
                                transform: 'translateY(-50%)',
                                transition: 'all 0.3s ease',
                              }}
                            >
                              <IconButton
                                sx={{
                                  background: 'linear-gradient(135deg, rgba(255, 107, 53, 0.1), rgba(255, 140, 66, 0.1))',
                                  '&:hover': {
                                    background: 'linear-gradient(135deg, rgba(255, 107, 53, 0.2), rgba(255, 140, 66, 0.2))',
                                  },
                                }}
                              >
                                <ArrowForwardIcon sx={{ color: '#ff8c42' }} />
                              </IconButton>
                            </motion.div>
                          </ListItemButton>
                        </ListItem>
                        {index < schemes.length - 1 && (
                          <Divider 
                            sx={{ 
                              my: 2,
                              background: 'linear-gradient(90deg, rgba(255, 107, 53, 0.1), rgba(255, 140, 66, 0.1))',
                              height: '1px',
                            }} 
                          />
                        )}
                      </React.Fragment>
                    ))}
                  </List>
                </motion.div>
              )}
            </Box>

            <AnimatePresence>
              {isLoading && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  style={{ textAlign: 'center', margin: '20px 0' }}
                >
                  <Box sx={{ position: 'relative', display: 'inline-block' }}>
                    <CircularProgress 
                      sx={{ 
                        color: '#ff8c42',
                        width: '60px !important',
                        height: '60px !important',
                      }} 
                    />
                  </Box>
                  <Typography 
                    sx={{ 
                      mt: 2, 
                      color: '#ff8c42',
                      fontSize: '1.2rem',
                      fontWeight: 500,
                    }}
                  >
                    AI is searching for the perfect schemes...
                  </Typography>
                </motion.div>
              )}
            </AnimatePresence>
          </Paper>
        </motion.div>

        <Snackbar
          open={showError}
          autoHideDuration={6000}
          onClose={() => setShowError(false)}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        >
          <Alert
            onClose={() => setShowError(false)}
            severity="error"
            sx={{ 
              width: '100%',
              bgcolor: 'error.main',
              color: 'white',
              '& .MuiAlert-icon': {
                color: 'white',
              },
            }}
          >
            {error}
          </Alert>
        </Snackbar>
      </Container>
    </Box>
  );
};

export default SearchSection; 