import React, { useEffect, useRef, useState } from 'react';
import { MapPin, Pickaxe, Bug, Trophy } from 'lucide-react';
import './RulesSection.css';

const AdventureMapSection = () => {
  const [activePhase, setActivePhase] = useState(0);
  const [offsets, setOffsets] = useState([]);
  const [pathData, setPathData] = useState('');
  const stepRefs = useRef([]);
  const mapRef = useRef(null);

  const phases = [
    { 
      day: "DAY 1 • 09:00", 
      title: "SPAWN IN", 
      desc: "Opening ceremony, team formation, world generation.", 
      icon: <MapPin size={24} />,
      color: "#2ecc71" // Emerald
    },
    { 
      day: "DAY 1 • 12:00", 
      title: "MINE & CRAFT", 
      desc: "Hacking begins. Workshops, mentor stations, first commits.", 
      icon: <Pickaxe size={24} />,
      color: "#00f3ff" // Cyan
    },
    { 
      day: "DAY 2 • 18:00", 
      title: "SURVIVE", 
      desc: "Midnight debugging arena. Energy drinks. Mob defense.", 
      icon: <Bug size={24} />,
      color: "#e74c3c" // Red
    },
    { 
      day: "DAY 3 • 12:00", 
      title: "FINAL BOSS", 
      desc: "Demos, judging, prize ceremony. Diamond loot distributed.", 
      icon: <Trophy size={24} />,
      color: "#f1c40f" // Gold
    }
  ];

  // Intersection Observer for scrolling logic
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActivePhase(Number(entry.target.getAttribute('data-index')));
        }
      });
    }, { 
      threshold: 0.6,
      rootMargin: "-10% 0px -20% 0px"
    });

    stepRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  // Recalculate physical positions AND draw the SVG path
  useEffect(() => {
    const calcMap = () => {
      const newOffsets = stepRefs.current.map(el => el ? el.offsetTop : 0);
      setOffsets(newOffsets);

      if (mapRef.current && newOffsets.length === 4) {
        const w = mapRef.current.offsetWidth;
        const cx = w / 2;
        // The path curves outwards to almost the edge of the cards
        const curveOffset = Math.min(w * 0.45, 200); 

        const y0 = newOffsets[0];
        const y1 = newOffsets[1];
        const y2 = newOffsets[2];
        const y3 = newOffsets[3];

        // M cx y0 (Start)
        // C right-curve to y1
        // C left-curve to y2
        // C right-curve to y3
        const path = `M ${cx} ${y0} C ${cx + curveOffset} ${y0}, ${cx + curveOffset} ${y1}, ${cx} ${y1} C ${cx - curveOffset} ${y1}, ${cx - curveOffset} ${y2}, ${cx} ${y2} C ${cx + curveOffset} ${y2}, ${cx + curveOffset} ${y3}, ${cx} ${y3}`;
        setPathData(path);
      }
    };
    
    calcMap();
    window.addEventListener('resize', calcMap);
    const timeout = setTimeout(calcMap, 500); 
    
    return () => {
      window.removeEventListener('resize', calcMap);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <section className="section map-section" id="rules">
      <div style={{ textAlign: "center", marginBottom: "3rem" }}>
        <h2 className="mc-badge" style={{ marginBottom: "2rem" }}>◆ THE ADVENTURE MAP ◆</h2>
        <div className="quest-intro">
          <h3 className="pixel-text map-welcome">48 Hours · 4 Phases</h3>
          <p className="quest-desc">
            From spawn to final boss — here's the path through the server.
          </p>
        </div>
      </div>

      <div className="snake-map" ref={mapRef}>
        
        {/* Seamless Smooth SVG Path line */}
        {pathData && (
          <svg className="snake-svg" style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0, pointerEvents: 'none'}}>
            <path 
              d={pathData} 
              stroke="var(--glass-border)" 
              strokeWidth="6" 
              strokeLinecap="round"
              strokeDasharray="14 14" 
              fill="none" 
            />
            {/* Actively glowing line segment */}
            <path 
              d={pathData} 
              stroke={phases[activePhase].color} 
              strokeWidth="6" 
              strokeLinecap="round"
              fill="none" 
              style={{
                strokeDasharray: '4000',
                strokeDashoffset: `${4000 - (activePhase / 3) * 4000}`,
                transition: 'stroke-dashoffset 1s ease-in-out, stroke 0.6s'
              }}
            />
          </svg>
        )}

        {/* The Running Map Avatar (Restored and tracing the path) */}
        {pathData && (
          <div 
            className="map-running-avatar" 
            style={{ 
              offsetPath: `path('${pathData}')`,
              offsetDistance: `${activePhase * (100 / (phases.length - 1))}%`,
              offsetRotate: "0deg",
              transform: `translateX(-50%) translateY(-24px) scaleX(${activePhase % 2 !== 0 ? -1 : 1})`
            }}
          >
            <div className="mini-steve">
              <div className="ms-head">
                <div className="ms-eye left"></div>
                <div className="ms-eye right"></div>
                <div className="ms-mouth"></div>
              </div>
              <div className="ms-arm ms-arm-left"></div>
              <div className="ms-body"></div>
              <div className="ms-arm ms-arm-right"></div>
              <div className="ms-leg ms-leg-left"></div>
              <div className="ms-leg ms-leg-right"></div>
            </div>
          </div>
        )}

        {phases.map((phase, i) => (
          <div 
            key={i} 
            ref={el => stepRefs.current[i] = el}
            data-index={i}
            className={`map-step ${i % 2 === 0 ? 'step-left' : 'step-right'} ${i === phases.length - 1 ? 'step-last' : ''} ${activePhase >= i ? 'active' : ''}`}
            style={{ '--phase-color': phase.color }}
          >
            <div className="map-node">
              <div className="map-icon-container">
                {phase.icon}
              </div>
            </div>

            <div className="map-card glass-panel">
              <span className="map-day pixel-text">{phase.day}</span>
              <h3 className="pixel-text map-title">{phase.title}</h3>
              <p className="map-desc">{phase.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AdventureMapSection;
