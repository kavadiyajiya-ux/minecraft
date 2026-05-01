import React, { useState } from 'react';
import GlassPanel from '../components/GlassPanel';
import { ArrowRight, ArrowLeft, CheckCircle, Sparkles } from 'lucide-react';
import './RegistrationSection.css';

const STEPS = [
  { id: 1, title: 'Personal Info' },
  { id: 2, title: 'Team Details' },
  { id: 3, title: 'Domain Selection' },
  { id: 4, title: 'Review & Join' },
];

const RegistrationSection = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isJoined, setIsJoined] = useState(false);
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '',
    teamName: '', members: '',
    domain: '',
  });

  const handleNext = () => { if (currentStep < 4) setCurrentStep(v => v + 1); };
  const handlePrev = () => { if (currentStep > 1) setCurrentStep(v => v - 1); };
  const handleSubmit = () => setIsJoined(true);
  const progressPercent = (currentStep / STEPS.length) * 100;

  if (isJoined) {
    return (
      <section className="section registration-section" id="registration">
        <div className="success-container">
          <Sparkles size={64} className="success-icon" />
          <h2 className="pixel-text success-title">Server Joined!</h2>
          <p className="success-subtitle">🎉 Your registration has been submitted successfully.</p>
          <button className="reset-btn" onClick={() => { setIsJoined(false); setCurrentStep(1); setFormData({ name: '', email: '', phone: '', teamName: '', members: '', domain: '' }); }}>
            Register Another Team
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="section registration-section" id="registration">
      <h2 className="section-title pixel-text">⚔️ Join The Quest</h2>

      <GlassPanel className="reg-panel">
        <div className="reg-header">
          <h3 className="pixel-text reg-step-title">Quest: Registration</h3>
          <span className="reg-step-indicator">Step {currentStep} of {STEPS.length}</span>
        </div>

        <div className="xp-bar-container">
          <div className="xp-bar" style={{ width: `${progressPercent}%` }}></div>
        </div>

        <div className="reg-content">
          <h4 className="reg-content-title">{STEPS[currentStep - 1].title}</h4>

          {currentStep === 1 && (
            <div className="input-group">
              <input type="text" className="input-glass" placeholder="Your Name"
                value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} />
              <input type="email" className="input-glass" placeholder="Email Address"
                value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })} />
              <input type="tel" className="input-glass" placeholder="Phone Number"
                value={formData.phone} onChange={e => setFormData({ ...formData, phone: e.target.value })} />
            </div>
          )}

          {currentStep === 2 && (
            <div className="input-group">
              <input type="text" className="input-glass" placeholder="Team Name"
                value={formData.teamName} onChange={e => setFormData({ ...formData, teamName: e.target.value })} />
              <textarea className="input-glass" placeholder="Team Members (comma separated)" rows={3}
                value={formData.members} onChange={e => setFormData({ ...formData, members: e.target.value })} />
            </div>
          )}

          {currentStep === 3 && (
            <div className="domains-grid">
              {['AI & ML', 'Web3', 'IoT & Hardware', 'Data Science'].map(domain => (
                <div
                  key={domain}
                  className={`domain-card ${formData.domain === domain ? 'selected' : ''}`}
                  onClick={() => setFormData({ ...formData, domain })}
                >
                  {domain}
                </div>
              ))}
            </div>
          )}

          {currentStep === 4 && (
            <div className="review-section">
              <div className="review-row"><strong>Name:</strong> <span>{formData.name || '—'}</span></div>
              <div className="review-row"><strong>Email:</strong> <span>{formData.email || '—'}</span></div>
              <div className="review-row"><strong>Team:</strong> <span>{formData.teamName || '—'}</span></div>
              <div className="review-row"><strong>Domain:</strong> <span>{formData.domain || '—'}</span></div>
              <p className="review-prompt">Ready to enter the realm?</p>
            </div>
          )}
        </div>

        <div className="reg-actions">
          <button className="nav-btn prev-btn" onClick={handlePrev} disabled={currentStep === 1}>
            <ArrowLeft size={18} /> Prev
          </button>
          {currentStep < 4 ? (
            <button className="nav-btn next-btn" onClick={handleNext}>
              Next <ArrowRight size={18} />
            </button>
          ) : (
            <button className="nav-btn submit-btn" onClick={handleSubmit}>
              <CheckCircle size={18} /> Join Server
            </button>
          )}
        </div>
      </GlassPanel>
    </section>
  );
};

export default RegistrationSection;
