import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import LanguageSelection from './pages/LanguageSelection';
import Loading from './components/Loading';
import { LanguageProvider } from './context/LanguageContext';
import SchemeDetails from './components/SchemeDetails';

function App() {
  return (
    <LanguageProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LanguageSelection />} />
          <Route path="/loading" element={<Loading />} />
          <Route path="/home" element={<Home />} />
          <Route path="/scheme/:id" element={<SchemeDetails />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </LanguageProvider>
  );
}

export default App;
