import React, { useEffect, useRef, useState } from 'react';
import NET from 'vanta/dist/vanta.net.min';
import * as THREE from 'three';

function VantaBackground({ theme }) {
  const vantaRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState(null);

  useEffect(() => {
    if (vantaEffect) vantaEffect.destroy();

    const isDark = theme === 'dark';

    const newEffect = NET({
      el: vantaRef.current,
      THREE,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.0,
      minWidth: 200.0,
      scale: 1.0,
      scaleMobile: 1.0,
      points: 6.0,
      maxDistance: 20.0,
      spacing: 20.0,
      color: isDark ? 0xffffff : 0x000000,
      backgroundColor: isDark ? 0x0d1117 : 0xf2f2f2,
    });

    setVantaEffect(newEffect);

    return () => {
      newEffect?.destroy();
    };
  }, [theme]);

  return (
    <div
      ref={vantaRef}
      style={{
        position: 'fixed',
        width: '100%',
        height: '100%',
        top: 0,
        left: 0,
        zIndex: -1,
      }}
    />
  );
}

export default VantaBackground;
