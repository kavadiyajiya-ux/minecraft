import React, { useState } from 'react';
import './TracksSection.css';

const TRACKS = [
  { id: 1, title: 'Web & Product', biome: 'Overworld', image: '/track1.png', desc: 'Build delightful web apps, SaaS tools, and consumer products that ship fast.' },
  { id: 2, title: 'AI & ML', biome: 'Deep Caves', image: '/track2.jpg', desc: 'Mine intelligence from data. Train models, build agents, surface insight.' },
  { id: 3, title: 'Systems & Infra', biome: 'The Nether', image: '/track3.png', desc: 'Forge in the fire. Distributed systems, devtools, performance, low-level magic.' },
  { id: 4, title: 'Open Source', biome: 'Coral Reefs', image: '/track4.jpg', desc: 'Contribute to the commons. Libraries, frameworks, dev experience.' },
  { id: 5, title: 'WILDCARD', biome: 'The End', image: '/track5.png', desc: 'Anything goes. Web3, hardware, generative art, games, the truly strange.' }
];

const TracksSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="section tracks-section" id="tracks">
      <div className="tracks-header">
        <button 
          className={`minecraft-btn dirt-btn pixel-text ${isOpen ? 'active' : ''}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="btn-grass-top"></div>
          {isOpen ? 'CLOSE TRACKS' : 'THE FIVE TRACK'}
        </button>
      </div>

      <div className={`tracks-collapse ${isOpen ? 'open' : ''}`}>
        <div className="tracks-grid">
          {TRACKS.map((track) => (
            <div key={track.id} className="track-card glass-panel">
              <div className="track-image-container">
                <img src={track.image} alt={track.title} className="track-image" />
                <div className="track-overlay">
                  <span className="track-biome pixel-text">{track.biome}</span>
                  <h3 className="pixel-text track-title">{track.title}</h3>
                </div>
              </div>
              <div className="track-details">
                <p className="track-desc">{track.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TracksSection;
