import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-brand pixel-text">HackSprint 6.0</p>
        <p className="footer-tagline">Built with 💚 by the HackSprint Team</p>
        <div className="footer-links">
          <a href="#hero">Spawn Point</a>
          <a href="#about">The Quest</a>
          <a href="#rules">Server Rules</a>
          <a href="#prizes">Diamond Loot</a>
          <a href="#registration">Spawn In</a>
        </div>
        <p className="footer-copy">© 2026 HackSprint. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
