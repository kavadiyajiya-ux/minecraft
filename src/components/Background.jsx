import React, { useMemo } from 'react';
import './Background.css';

const Background = () => {
  const fireflies = useMemo(() => {
    return Array.from({ length: 25 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 60}%`,
      animDuration: `${Math.random() * 6 + 5}s`,
      animDelay: `${Math.random() * 8}s`,
      size: `${Math.random() * 5 + 2}px`,
      rx: (Math.random() - 0.5) * 2,
      ry: (Math.random() - 0.5) * 2,
    }));
  }, []);

  const butterflies = useMemo(() => {
    return Array.from({ length: 5 }).map((_, i) => ({
      id: i,
      startLeft: `${Math.random() * 80 + 10}%`,
      startTop: `${Math.random() * 50 + 15}%`,
      animDuration: `${Math.random() * 10 + 12}s`,
      animDelay: `${Math.random() * 5}s`,
      color: ['#3b82f6', '#22c55e', '#fbbf24', '#ef4444', '#a855f7'][i],
    }));
  }, []);

  const petals = useMemo(() => {
    return Array.from({ length: 10 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      animDuration: `${Math.random() * 10 + 10}s`,
      animDelay: `${Math.random() * 12}s`,
      size: `${Math.random() * 8 + 4}px`,
      color: ['#ff6b6b', '#ffe66d', '#ffffff', '#ff9ff3', '#a8e6cf'][Math.floor(Math.random() * 5)],
    }));
  }, []);

  return (
    <div className="bg-container">
      <div className="bg-image"></div>
      <div className="sun-glow-bright"></div>

      <div className="cloud-layer">
        <div className="mc-cloud c1"></div>
        <div className="mc-cloud c2"></div>
        <div className="mc-cloud c3"></div>
        <div className="mc-cloud c4"></div>
        <div className="mc-cloud c5"></div>
      </div>

      <div className="butterflies-layer">
        {butterflies.map((bf) => (
          <div
            key={bf.id}
            className="butterfly"
            style={{
              left: bf.startLeft,
              top: bf.startTop,
              animationDuration: bf.animDuration,
              animationDelay: bf.animDelay,
            }}
          >
            <div className="b-wing b-wing-l" style={{ background: bf.color }}></div>
            <div className="b-body"></div>
            <div className="b-wing b-wing-r" style={{ background: bf.color }}></div>
          </div>
        ))}
      </div>

      <div className="petals-layer">
        {petals.map((petal) => (
          <div
            key={petal.id}
            className="petal"
            style={{
              left: petal.left,
              animationDuration: petal.animDuration,
              animationDelay: petal.animDelay,
              width: petal.size,
              height: petal.size,
              backgroundColor: petal.color,
            }}
          ></div>
        ))}
      </div>

      <div className="particles-container">
        {fireflies.map((ff) => (
          <div
            key={ff.id}
            className="firefly"
            style={{
              left: ff.left,
              top: ff.top,
              animationDuration: ff.animDuration,
              animationDelay: ff.animDelay,
              width: ff.size,
              height: ff.size,
              '--rx': ff.rx,
              '--ry': ff.ry,
            }}
          ></div>
        ))}
      </div>

      <div className="vignette"></div>
    </div>
  );
};

export default Background;
