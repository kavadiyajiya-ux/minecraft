import React from 'react';
import GlassPanel from '../components/GlassPanel';
import { MapPin, Clock, Users, Zap } from 'lucide-react';
import './AboutSection.css';

const AboutSection = () => {
  const cards = [
    { icon: <Zap size={28} />, title: '24 Hours', desc: 'Non-stop building, innovating, and creating something extraordinary.' },
    { icon: <Users size={28} />, title: '500+ Builders', desc: 'Join a massive community of developers, designers, and innovators.' },
    { icon: <MapPin size={28} />, title: 'Campus Arena', desc: 'Institute of Technology Campus — Main Hall, fully equipped.' },
    { icon: <Clock size={28} />, title: 'Oct 24, 2026', desc: 'Gates open at 09:00 AM. Be ready for the adventure of a lifetime.' },
  ];

  return (
    <section className="section about-section" id="about">
      <h2 className="section-title pixel-text">📍 About The Event</h2>
      <div className="about-grid">
        {cards.map((card, i) => (
          <GlassPanel key={i} className="about-card">
            <div className="about-card-icon">{card.icon}</div>
            <h3>{card.title}</h3>
            <p>{card.desc}</p>
          </GlassPanel>
        ))}
      </div>
      <GlassPanel className="about-highlight">
        <p>
          <strong>HackSprint 6.0</strong> is the ultimate inter-college hackathon where teams of 2–4 members 
          compete across cutting-edge domains. Bring your ideas, your passion, and your code — 
          we'll provide the rest. 🚀
        </p>
      </GlassPanel>
    </section>
  );
};

export default AboutSection;
