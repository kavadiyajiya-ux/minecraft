import React from 'react';
import GlassPanel from '../components/GlassPanel';
import './RulesSection.css';

const rules = [
  { num: 'I', title: 'Team Size', desc: 'Teams of 2–4 members. Solo participation is not allowed.' },
  { num: 'II', title: 'Original Code Only', desc: 'All code must be written during the hackathon. No pre-built projects.' },
  { num: 'III', title: 'Pick Your Domain', desc: 'Choose one domain: AI/ML, Web3, IoT, or Data Science. Stay in your lane.' },
  { num: 'IV', title: 'Time Limit', desc: '24 hours of uninterrupted building. The clock starts when the realm opens.' },
  { num: 'V', title: 'AI Tools Allowed', desc: 'AI tools are permitted but must be disclosed. Original thinking wins.' },
  { num: 'VI', title: 'Fair Play', desc: 'Plagiarism or sabotage = instant disqualification. Respect all builders.' },
];

const RulesSection = () => {
  return (
    <section className="section rules-section" id="rules">
      <h2 className="section-title pixel-text">📜 Server Rules</h2>
      <GlassPanel className="rules-panel">
        <div className="rules-list">
          {rules.map((rule, i) => (
            <div key={i} className="rule-item">
              <span className="rule-num pixel-text">{rule.num}</span>
              <div className="rule-text">
                <strong>{rule.title}</strong>
                <p>{rule.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </GlassPanel>
    </section>
  );
};

export default RulesSection;
