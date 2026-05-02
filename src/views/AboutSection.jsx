import React from 'react';
import { Pickaxe, Sword, Sparkles, Shield } from 'lucide-react';
import './AboutSection.css';

const AboutSection = () => {
  const cards = [
    { icon: <Pickaxe size={24} />, title: 'MINE IDEAS', desc: '48 hours of relentless building, prototyping, and shipping.' },
    { icon: <Sword size={24} />, title: 'BATTLE BUGS', desc: 'Squash glitches, defeat blockers, slay scope creep.' },
    { icon: <Sparkles size={24} />, title: 'CRAFT MAGIC', desc: 'Forge code into experiences worth showing off.' },
    { icon: <Shield size={24} />, title: 'SURVIVE & WIN', desc: 'Outlast the night. Claim diamond-tier loot at sunrise.' },
  ];

  return (
    <section className="section about-section" id="about">
      <div className="text-center mb-10" style={{ textAlign: "center", marginBottom: "3rem" }}>
        <h2 className="mc-badge" style={{ marginBottom: "2rem" }}>◆ THE QUEST ◆</h2>
        
        <div className="quest-intro">
          <h3 className="pixel-text quest-welcome">Welcome To The Server</h3>
          <p className="quest-desc">
            <strong>HackSprint 6.0</strong> is a 48-hour cinematic build-marathon. 
            Spawn in, team up, and craft the future from raw blocks of code.
          </p>
        </div>
      </div>

      <div className="flash-cards-grid">
        {cards.map((card, i) => (
          <div key={i} className="flash-card">
            <div className="flash-icon-box">{card.icon}</div>
            <h3 className="pixel-text flash-title">{card.title}</h3>
            <p className="flash-desc">{card.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutSection;
