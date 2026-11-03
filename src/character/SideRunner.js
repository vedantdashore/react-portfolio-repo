import React, { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { FRAMES, PALETTE, SPRITE_W, SPRITE_H } from './sprite';
import './SideRunner.css';

const SECTIONS = [
  { id: 'hero', label: 'Start' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'leadership', label: 'Leadership' },
  { id: 'education', label: 'Education' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
];

// The character faces left (toward the content), so a forward flip turns counter-clockwise.
const TRICKS = [
  { name: 'Front flip', rotate: -360, frame: 'tuck' },
  { name: 'Backflip', rotate: 360, frame: 'tuck' },
  { name: 'Corkscrew', rotate: -360, spins: 2, frame: 'leap' },
  { name: 'Cannonball', rotate: 0, frame: 'tuck', height: 1.5 },
  { name: '360 spin', rotate: 0, spins: 3, frame: 'leap' },
];
const DOUBLE = { name: 'Double flip', rotate: -720, frame: 'tuck', height: 1.3 };
const HOP = { name: '', rotate: 0, frame: 'leap', height: 0.6 };

const RAIL_MIN_WIDTH = 1320;
const RAIL_MIN_HEIGHT = 600;
const IDLE_AFTER = 1600;

const levelNo = (i) => String(i + 1).padStart(2, '0');
const reducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const easeInOut = (t) => (t < 0.5 ? 2 * t * t : 1 - (-2 * t + 2) ** 2 / 2);

function currentSection() {
  if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) return SECTIONS.length - 1;
  const line = window.innerHeight * 0.4;
  let idx = 0;
  SECTIONS.forEach((s, i) => {
    const el = document.getElementById(s.id);
    if (el && el.getBoundingClientRect().top <= line) idx = i;
  });
  return idx;
}

function Sprite({ frame }) {
  return (
    <svg className="runner-svg" viewBox={`0 0 ${SPRITE_W} ${SPRITE_H}`} shapeRendering="crispEdges">
      {FRAMES[frame].map(({ c, d }) => (
        <path key={c} d={d} fill={c === 'o' ? 'var(--sprite-outline)' : PALETTE[c]} />
      ))}
    </svg>
  );
}

function SideRunner() {
  const railRef = useRef(null);
  const charRef = useRef(null);
  const bodyRef = useRef(null);
  const ysRef = useRef([]);
  const posRef = useRef(null);
  const targetRef = useRef(0);
  const busyRef = useRef(false);
  const lastTrickRef = useRef(-1);
  const restSinceRef = useRef(0);
  const jumpRef = useRef(null);

  const [mode, setMode] = useState('rail');
  const [current, setCurrent] = useState(0);
  const [frame, setFrame] = useState('carry');
  const [toast, setToast] = useState(null);
  const [dust, setDust] = useState(null);

  const place = useCallback((i) => {
    if (charRef.current && ysRef.current[i] != null) charRef.current.style.top = `${ysRef.current[i]}px`;
  }, []);

  // Records the y each platform's surface sits at, relative to the rail.
  const measure = useCallback(() => {
    const rail = railRef.current;
    if (!rail || !charRef.current) return;
    const top = rail.getBoundingClientRect().top;
    const h = charRef.current.offsetHeight;
    // In corner mode only one platform exists, so every section maps onto it.
    const blocks = [...rail.querySelectorAll('.platform-block')];
    const yOf = (el) => el.getBoundingClientRect().top - top - h;
    ysRef.current = SECTIONS.map((_, i) => yOf(blocks.length === SECTIONS.length ? blocks[i] : blocks[0]));
    if (!busyRef.current && posRef.current != null) place(posRef.current);
  }, [place]);

  const jumpTo = useCallback((target) => {
    const from = posRef.current;
    if (from === target || !charRef.current) return;

    if (reducedMotion()) {
      posRef.current = target;
      place(target);
      return;
    }

    const dy = ysRef.current[target] - ysRef.current[from];
    const steps = Math.abs(target - from);
    let trick;
    if (dy < -1 || (dy === 0 && target < from)) trick = HOP;
    else if (steps >= 2) trick = DOUBLE;
    else {
      let i = Math.floor(Math.random() * TRICKS.length);
      if (i === lastTrickRef.current) i = (i + 1) % TRICKS.length;
      lastTrickRef.current = i;
      trick = TRICKS[i];
    }

    const height = (dy === 0 ? 62 : 44) * (trick.height || 1);
    const duration = Math.min(1300, 640 + Math.abs(dy) * 0.9);
    const keyframes = Array.from({ length: 25 }, (_, k) => {
      const t = k / 24;
      const x = -18 * Math.sin(Math.PI * t);
      const y = dy * t - height * 4 * t * (1 - t);
      const spinT = easeInOut(Math.min(1, Math.max(0, (t - 0.08) / 0.8)));
      const scaleX = trick.spins ? Math.cos(spinT * Math.PI * 2 * trick.spins) : 1;
      const tuck = trick.name === 'Cannonball' ? 1 - 0.12 * Math.sin(Math.PI * t) : 1;
      return {
        transform: `translate(${x}px, ${y}px) rotate(${trick.rotate * spinT}deg) scale(${scaleX * tuck}, ${tuck})`,
      };
    });

    busyRef.current = true;
    setFrame(trick.frame);

    const anim = charRef.current.animate(keyframes, { duration, easing: 'linear' });
    anim.onfinish = () => {
      posRef.current = target;
      place(target);
      anim.cancel();
      setFrame('carry');
      const landY = ysRef.current[target];
      setDust({ key: Date.now(), top: landY + charRef.current.offsetHeight });
      if (trick.name) setToast({ text: trick.name, key: Date.now(), top: landY });
      bodyRef.current?.animate(
        [{ transform: 'scale(1.18, 0.78)' }, { transform: 'scale(0.96, 1.05)', offset: 0.6 }, { transform: 'none' }],
        { duration: 260, easing: 'ease-out' }
      );
      restSinceRef.current = performance.now();
      busyRef.current = false;
      // If the reader kept scrolling mid-air, head straight for the new section.
      if (targetRef.current !== target) setTimeout(() => jumpRef.current(targetRef.current), 90);
    };
  }, [place]);
  jumpRef.current = jumpTo;

  // Pick rail or corner mode from the viewport, then re-measure.
  useLayoutEffect(() => {
    const onResize = () => {
      const rail = window.innerWidth >= RAIL_MIN_WIDTH && window.innerHeight >= RAIL_MIN_HEIGHT;
      setMode(rail ? 'rail' : 'corner');
      requestAnimationFrame(measure);
    };
    onResize();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [measure]);

  useLayoutEffect(() => {
    measure();
  }, [mode, measure]);

  useEffect(() => {
    // Start on whichever section the page loaded at, without a jump.
    const start = currentSection();
    posRef.current = start;
    targetRef.current = start;
    setCurrent(start);
    measure();
    place(start);
    restSinceRef.current = performance.now();

    let frameId;
    const onScroll = () => {
      cancelAnimationFrame(frameId);
      frameId = requestAnimationFrame(() => {
        restSinceRef.current = performance.now();
        const idx = currentSection();
        if (idx !== targetRef.current) {
          targetRef.current = idx;
          setCurrent(idx);
          if (!busyRef.current) jumpTo(idx);
        }
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener('scroll', onScroll);
    };
  }, [jumpTo, measure, place]);

  // Idle moves: after a pause he opens the laptop and types, or celebrates at Contact.
  useEffect(() => {
    const id = setInterval(() => {
      if (busyRef.current || reducedMotion()) return;
      const now = performance.now();
      const idle = now - restSinceRef.current > IDLE_AFTER;
      const atEnd = posRef.current === SECTIONS.length - 1;
      const atStart = posRef.current === 0;
      let next;
      if (idle && atEnd) next = Math.floor(now / 420) % 2 ? 'cheer' : 'carry';
      else if (idle && atStart) next = Math.floor(now / 260) % 2 ? 'wave1' : 'wave2';
      else if (idle) next = Math.floor(now / 170) % 2 ? 'type1' : 'type2';
      else next = now % 3200 < 150 ? 'blink' : 'carry';
      setFrame((f) => (f === next ? f : next));
    }, 60);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    if (!toast) return undefined;
    const t = setTimeout(() => setToast(null), 1300);
    return () => clearTimeout(t);
  }, [toast]);

  const goTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  const shown = mode === 'rail' ? SECTIONS : [SECTIONS[current]];

  return (
    <aside className={`runner runner-${mode}`} ref={railRef} aria-label="Section map">
      <ol className="runner-platforms">
        {shown.map((s) => {
          const i = SECTIONS.indexOf(s);
          return (
            <li key={s.id}>
              <button
                type="button"
                className={`platform ${i === current ? 'active' : ''} ${i < current ? 'done' : ''}`}
                onClick={() => goTo(s.id)}
                aria-current={i === current ? 'location' : undefined}
              >
                <span className="platform-label pixel">
                  {levelNo(i)} {s.label}
                </span>
                <span className="platform-block" />
              </button>
            </li>
          );
        })}
      </ol>

      <div className="runner-char" ref={charRef} aria-hidden="true">
        <div className="runner-body" ref={bodyRef}>
          <Sprite frame={frame} />
        </div>
      </div>

      {toast && (
        <span key={toast.key} className="runner-toast pixel" style={{ top: toast.top }} aria-hidden="true">
          {toast.text}!
        </span>
      )}

      {dust && (
        <span key={dust.key} className="runner-dust" style={{ top: dust.top }} aria-hidden="true">
          <i />
          <i />
          <i />
          <i />
        </span>
      )}
    </aside>
  );
}

export default SideRunner;
