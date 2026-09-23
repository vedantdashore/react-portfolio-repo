import React, { useEffect, useRef } from 'react';
import NET from 'vanta/dist/vanta.net.min';
import * as THREE from 'three';

function VantaBackground({ theme }) {
  const vantaRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return undefined;

    const isDark = theme === 'dark';
    const isMobile = window.innerWidth < 640;

    let effect;
    try {
      effect = NET({
        el: vantaRef.current,
        THREE,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        scale: 1.0,
        scaleMobile: 1.0,
        points: isMobile ? 5.0 : 7.0,
        maxDistance: isMobile ? 16.0 : 20.0,
        spacing: isMobile ? 22.0 : 18.0,
        color: isDark ? 0x5ec8f2 : 0x0369a1, // dot + line color
        backgroundColor: isDark ? 0x0a0e14 : 0xf5f7fb,
        showDots: true,
      });
    } catch (e) {
      // No WebGL (old devices, locked-down browsers, crawlers): keep the plain CSS background
      // instead of letting the error unmount the whole app.
      return undefined;
    }

    return () => effect?.destroy();
  }, [theme]);

  return <div ref={vantaRef} className="vanta-bg" aria-hidden="true" />;
}

export default VantaBackground;
