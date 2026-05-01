import React from 'react';
import GlassPanel from '../components/GlassPanel';
import './PrizesSection.css';

const PrizesSection = () => {
  return (
    <section className="section prizes-section" id="prizes">
      <h2 className="section-title pixel-text">🏆 Loot Drops</h2>
      <div className="prizes-grid">
        <GlassPanel className="prize-card grand-prize">
          <div className="prize-emoji">👑</div>
          <h3 className="pixel-text">Grand Champion</h3>
          <p className="prize-amount">$5,000</p>
          <span className="prize-extras">+ Trophy & Merch Kit</span>
        </GlassPanel>

        <GlassPanel className="prize-card silver-prize">
          <div className="prize-emoji">⚔️</div>
          <h3 className="pixel-text">Runner Up</h3>
          <p className="prize-amount">$2,500</p>
          <span className="prize-extras">+ Certificate</span>
        </GlassPanel>

        <GlassPanel className="prize-card bronze-prize">
          <div className="prize-emoji">🛡️</div>
          <h3 className="pixel-text">Third Place</h3>
          <p className="prize-amount">$1,000</p>
          <span className="prize-extras">+ Certificate</span>
        </GlassPanel>

        <GlassPanel className="prize-card domain-prize">
          <div className="prize-emoji">🎯</div>
          <h3 className="pixel-text">Domain Winners</h3>
          <p className="prize-amount">$500 / Category</p>
          <span className="prize-extras">AI · Web3 · IoT · Data Science</span>
        </GlassPanel>
      </div>
    </section>
  );
};

export default PrizesSection;
