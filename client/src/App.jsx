import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, CssBaseline } from '@mui/material';
import theme from './theme';
import Home from './pages/Home';
import LanguageSelection from './pages/LanguageSelection';
import Loading from './components/Loading';
import SchemeDetails from './components/SchemeDetails';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>
          <Route path="/" element={<LanguageSelection />} />
          <Route path="/loading" element={<Loading />} />
          <Route path="/home" element={<Home />} />
          <Route path="/scheme/:id" element={<SchemeDetails />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App; 