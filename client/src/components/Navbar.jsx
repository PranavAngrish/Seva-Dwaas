import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Box,
  Menu,
  MenuItem,
  useTheme,
  useMediaQuery,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Divider
} from '@mui/material';
import { motion } from 'framer-motion';
import MenuIcon from '@mui/icons-material/Menu';
import LanguageIcon from '@mui/icons-material/Language';
import { useLanguage } from '../context/LanguageContext';

const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [languageMenuAnchor, setLanguageMenuAnchor] = useState(null);
  const { translations, setLanguage } = useLanguage();

  const handleLanguageMenuOpen = (event) => {
    setLanguageMenuAnchor(event.currentTarget);
  };

  const handleLanguageMenuClose = () => {
    setLanguageMenuAnchor(null);
  };

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
    handleLanguageMenuClose();
  };

  const navItems = [
    { text: 'Home', href: '/' },
    { text: 'Schemes', href: '/schemes' },
    { text: 'About', href: '/about' },
    { text: 'Contact', href: '/contact' }
  ];

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'hi', name: 'हिंदी' },
    { code: 'bn', name: 'বাংলা' },
    { code: 'te', name: 'తెలుగు' },
    { code: 'mr', name: 'मराठी' },
    { code: 'ta', name: 'தமிழ்' },
    { code: 'gu', name: 'ગુજરાતી' },
    { code: 'kn', name: 'ಕನ್ನಡ' },
    { code: 'ml', name: 'മലയാളം' },
    { code: 'pa', name: 'ਪੰਜਾਬੀ' }
  ];

  const renderMobileMenu = () => (
    <Drawer
      anchor="right"
      open={mobileMenuOpen}
      onClose={() => setMobileMenuOpen(false)}
    >
      <Box sx={{ width: 250 }}>
        <List>
          {navItems.map((item) => (
            <ListItem key={item.text} button component="a" href={item.href}>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
          <Divider />
          <ListItem button onClick={handleLanguageMenuOpen}>
            <ListItemText primary="Change Language" />
          </ListItem>
        </List>
      </Box>
    </Drawer>
  );

  return (
    <AppBar 
      position="sticky" 
      sx={{ 
        background: 'rgba(255, 255, 255, 0.9)',
        backdropFilter: 'blur(10px)',
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
      }}
    >
      <Toolbar>
        <Typography
          variant="h6"
          component={motion.div}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          sx={{
            flexGrow: 1,
            color: '#ff8c42',
            fontWeight: 'bold',
            fontSize: '1.5rem',
          }}
        >
          Seva Dwaar
        </Typography>

        {isMobile ? (
          <>
            <IconButton
              color="inherit"
              onClick={() => setMobileMenuOpen(true)}
              sx={{ color: '#ff8c42' }}
            >
              <MenuIcon />
            </IconButton>
            {renderMobileMenu()}
          </>
        ) : (
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            {navItems.map((item) => (
              <Button
                key={item.text}
                component={motion.button}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={item.href}
                sx={{
                  color: '#ff8c42',
                  fontWeight: 'medium',
                  '&:hover': {
                    backgroundColor: 'rgba(255, 140, 66, 0.1)',
                  },
                }}
              >
                {item.text}
              </Button>
            ))}
            <IconButton
              onClick={handleLanguageMenuOpen}
              sx={{ color: '#ff8c42' }}
            >
              <LanguageIcon />
            </IconButton>
          </Box>
        )}

        <Menu
          anchorEl={languageMenuAnchor}
          open={Boolean(languageMenuAnchor)}
          onClose={handleLanguageMenuClose}
          PaperProps={{
            sx: {
              maxHeight: 300,
              width: 200,
              '& .MuiMenuItem-root': {
                padding: '8px 16px',
              },
            },
          }}
        >
          {languages.map((lang) => (
            <MenuItem
              key={lang.code}
              onClick={() => handleLanguageChange(lang.code)}
              sx={{
                '&:hover': {
                  backgroundColor: 'rgba(255, 140, 66, 0.1)',
                },
              }}
            >
              {lang.name}
            </MenuItem>
          ))}
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar; 