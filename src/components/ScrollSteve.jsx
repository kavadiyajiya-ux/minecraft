import React, { useState, useEffect, useRef } from 'react';
import './ScrollSteve.css';

const SECTIONS = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'rules', label: 'Rules' },
  { id: 'prizes', label: 'Prizes' },
  { id: 'registration', label: 'Register' },
];

const ScrollSteve = () => {
  const [scrollPercent, setScrollPercent] = useState(0);
  const [isWalking, setIsWalking] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const walkTimeout = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const percent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setScrollPercent(Math.min(percent, 100));

      // Trigger walking animation
      setIsWalking(true);
      clearTimeout(walkTimeout.current);
      walkTimeout.current = setTimeout(() => setIsWalking(false), 150);

      // Determine active section
      for (let i = SECTIONS.length - 1; i >= 0; i--) {
        const el = document.getElementById(SECTIONS[i].id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2) {
            setActiveSection(SECTIONS[i].id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(walkTimeout.current);
    };
  }, []);

  // Steve's vertical position on screen (clamped with padding)
  const steveTop = 10 + (scrollPercent / 100) * 70; // 10% to 80% of viewport

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="scroll-steve-container">
      {/* Track line */}
      <div className="steve-track">
        <div className="steve-track-fill" style={{ height: `${scrollPercent}%` }}></div>
      </div>

      {/* Section dots */}
      <div className="section-dots">
        {SECTIONS.map((sec, i) => (
          <button
            key={sec.id}
            className={`section-dot ${activeSection === sec.id ? 'active' : ''}`}
            onClick={() => scrollTo(sec.id)}
            title={sec.label}
            style={{ top: `${10 + (i / (SECTIONS.length - 1)) * 70}%` }}
          >
            <span className="dot-label">{sec.label}</span>
            <span className="dot-circle"></span>
          </button>
        ))}
      </div>

      {/* Steve character */}
      <div
        className={`steve-character ${isWalking ? 'walking' : 'idle'}`}
        style={{ top: `${steveTop}%` }}
      >
        {/* Head */}
        <div className="steve-head">
          <div className="steve-hair"></div>
          <div className="steve-face">
            <div className="steve-eye left-eye"></div>
            <div className="steve-eye right-eye"></div>
            <div className="steve-nose"></div>
            <div className="steve-mouth"></div>
          </div>
        </div>

        {/* Body */}
        <div className="steve-body">
          {/* Arms */}
          <div className="steve-arm arm-left"></div>
          <div className="steve-torso"></div>
          <div className="steve-arm arm-right"></div>
        </div>

        {/* Legs */}
        <div className="steve-legs">
          <div className="steve-leg leg-left"></div>
          <div className="steve-leg leg-right"></div>
        </div>
      </div>
    </div>
  );
};

export default ScrollSteve;
