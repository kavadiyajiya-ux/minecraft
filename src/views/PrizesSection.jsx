import React from 'react';
import './PrizesSection.css';

const PrizesSection = () => {
  return (
    <section className="section prizes-section" id="prizes">
      <div style={{ textAlign: "center", marginBottom: "3rem" }}>
        <h2 className="mc-badge" style={{ marginBottom: "1.5rem" }}>◆ DIAMOND LOOT ◆</h2>
        <div style={{ margin: "0 auto", maxWidth: "600px", color: "#111" }}>
          <h3 className="pixel-text" style={{ fontSize: "1.4rem", marginBottom: "0.8rem", textShadow: "0 0 10px rgba(255,255,255,0.8)" }}>$50,000 In Diamond Loot</h3>
          <p style={{ fontWeight: 800, lineHeight: "1.6", textShadow: "0 0 10px rgba(255,255,255,0.8)" }}>The top three crews walk away with cash, credits, and bragging rights worth more than netherite.</p>
        </div>
      </div>

      <div className="prizes-grid">
        {/* 1st Place - Diamond */}
        <div className="prize-card diamond-tier">
          <div className="tier-badge">1st Place</div>
          <h3 className="prize-amount pixel-text">$25,000</h3>
          <div className="tier-name pixel-text">Diamond Tier</div>
          <ul className="prize-list">
            <li>Cash prize</li>
            <li>Mentorship with top founders</li>
            <li>Cloud credits ($10K)</li>
            <li>Featured launch</li>
          </ul>
        </div>

        {/* 2nd Place - Emerald */}
        <div className="prize-card emerald-tier">
          <div className="tier-badge">2nd Place</div>
          <h3 className="prize-amount pixel-text">$15,000</h3>
          <div className="tier-name pixel-text">Emerald Tier</div>
          <ul className="prize-list">
            <li>Cash prize</li>
            <li>Investor intros</li>
            <li>Cloud credits ($5K)</li>
            <li>Swag drop</li>
          </ul>
        </div>

        {/* 3rd Place - Gold */}
        <div className="prize-card gold-tier">
          <div className="tier-badge">3rd Place</div>
          <h3 className="prize-amount pixel-text">$10,000</h3>
          <div className="tier-name pixel-text">Gold Tier</div>
          <ul className="prize-list">
            <li>Cash prize</li>
            <li>Hardware kit</li>
            <li>Cloud credits ($2.5K)</li>
            <li>Swag drop</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default PrizesSection;
