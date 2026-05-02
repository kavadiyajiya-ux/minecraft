import React from 'react';
import { ChevronDown, ExternalLink } from 'lucide-react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero-section" id="hero">
      <div className="hero-content" style={{ animation: 'float 6s ease-in-out infinite' }}>
        <span className="hero-badge pixel-text">⚡ Season 6</span>
        <h1 className="hero-title pixel-text">HackSprint 6.0</h1>
        <p className="hero-subtitle">Build. Innovate. Conquer.</p>
        <p className="hero-date">🗓️ October 24–25, 2026 • 24-Hour Hackathon</p>

        <div className="hero-actions">
          <a href="#registration" className="hero-btn primary-btn pixel-text" style={{fontSize: "0.8rem"}}>
            <ExternalLink size={16} />
            JOIN SERVER
          </a>
          <a href="#about" className="hero-btn secondary-btn pixel-text" style={{fontSize: "0.8rem"}}>
            VIEW QUEST
          </a>
        </div>
      </div>

      <div className="scroll-hint">
        <ChevronDown size={24} />
        <ChevronDown size={24} />
      </div>
    </section>
  );
};

export default HeroSection;
