import React, { useEffect, useRef, useState } from 'react';
import './LogoLoop.css';

/**
 * Simple LogoLoop component
 * Props:
 * - logos: array of { node?, src?, title, href? }
 * - speed: pixels per second
 * - direction: 'left' | 'right'
 * - logoHeight: px
 * - gap: px
 * - pauseOnHover: bool
 * - fadeOut: bool
 * - scaleOnHover: bool
 * - fadeOutColor: string
 */
const LogoLoop = ({
  logos = [],
  speed = 100,
  direction = 'left',
  logoHeight = 60,
  gap = 90,
  pauseOnHover = true,
  fadeOut = true,
  scaleOnHover = true,
  fadeOutColor,
  ariaLabel = 'Logo loop'
}) => {
  const trackRef = useRef(null);
  const rafRef = useRef(0);
  const lastRef = useRef(0);
  const [paused, setPaused] = useState(false);
  const [width, setWidth] = useState(0);

  // CSS vars
  const wrapperStyle = {
    ['--logoloop-gap']: `${gap}px`,
    ['--logoloop-logoHeight']: `${logoHeight}px`,
    ['--logoloop-fadeColor']: fadeOutColor || undefined,
  };

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    // Measure width of one list (first child). Defer to next frame to ensure layout.
    const measure = () => {
      const firstList = track.querySelector('.logoloop__list');
      if (!firstList) return 0;
      return Math.max(0, Math.round(firstList.getBoundingClientRect().width));
    };

    let w = measure();
    if (!w) {
      // try again on next frame
      requestAnimationFrame(() => {
        w = measure();
        setWidth(w);
      });
    } else {
      setWidth(w);
    }

    let pos = 0;
    const dir = direction === 'left' ? -1 : 1;

    const tick = (ts) => {
      if (!lastRef.current) lastRef.current = ts;
      const dt = Math.max(0, ts - lastRef.current) / 1000;
      lastRef.current = ts;

      if (!paused && w > 0) {
        pos += dir * speed * dt;
        if (dir === -1 && pos <= -w) pos += w;
        if (dir === 1 && pos >= w) pos -= w;
        track.style.transform = `translate3d(${pos}px,0,0)`;
      }

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [logos, speed, direction, paused, gap, logoHeight]);

  const classes = ['logoloop'];
  if (scaleOnHover) classes.push('logoloop--scale-hover');
  if (fadeOut) classes.push('logoloop--fade');

  return (
    <div
      className={classes.join(' ')}
      style={wrapperStyle}
      onMouseEnter={() => pauseOnHover && setPaused(true)}
      onMouseLeave={() => pauseOnHover && setPaused(false)}
      role="region"
      aria-label={ariaLabel}
    >
      <div className="logoloop__track" ref={trackRef} aria-hidden={false}>
        {/* duplicate list twice for seamless loop */}
        {[0, 1].map((idx) => (
          <div className="logoloop__list" key={idx}>
            {logos.map((l, i) => (
              <div className="logoloop__item" key={`${idx}-${i}`}>
                {l.href ? (
                  <a className="logoloop__link" href={l.href} target="_blank" rel="noreferrer">
                    {l.src ? <img src={l.src} alt={l.alt || l.title || ''} /> : (
                      <span className="logoloop__node">{l.node ?? l.title}</span>
                    )}
                  </a>
                ) : (
                  l.src ? <img src={l.src} alt={l.alt || l.title || ''} /> : (
                    <span className="logoloop__node">{l.node ?? l.title}</span>
                  )
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoLoop;