import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-brand pixel-text">HackSprint 6.0</p>
        <p className="footer-tagline">Built with 💚 by the HackSprint Team</p>
        <div className="footer-links">
          <a href="#hero">Home</a>
          <a href="#about">About</a>
          <a href="#rules">Rules</a>
          <a href="#prizes">Prizes</a>
          <a href="#registration">Register</a>
        </div>
        <p className="footer-copy">© 2026 HackSprint. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
