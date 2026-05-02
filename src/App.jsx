import React from 'react';
import Background from './components/Background';
import HeroSection from './views/HeroSection';
import AboutSection from './views/AboutSection';
import TracksSection from './views/TracksSection';
import RulesSection from './views/RulesSection';
import PrizesSection from './views/PrizesSection';
import RegistrationSection from './views/RegistrationSection';
import Footer from './views/Footer';
import ScrollSteve from './components/ScrollSteve';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <div className="crt-overlay"></div>
      <Background />
      <ScrollSteve />
      <div className="scroll-content">
        <HeroSection />
        <AboutSection />
        <TracksSection />
        <RulesSection />
        <PrizesSection />
        <RegistrationSection />
        <Footer />
      </div>
    </div>
  );
}

export default App;
