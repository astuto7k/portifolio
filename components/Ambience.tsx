import React, { useEffect, useRef } from 'react';

export const ScrollProgress: React.FC = () => {
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let frame = 0;

    const update = () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = maxScroll > 0 ? window.scrollY / maxScroll : 0;
      progressRef.current?.style.setProperty('--progress', String(Math.min(1, Math.max(0, progress))));
      document.documentElement.style.setProperty('--page-y', String(window.scrollY));
      frame = 0;
    };

    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div className="scroll-progress" aria-hidden="true">
      <div ref={progressRef} className="scroll-progress__bar" />
    </div>
  );
};

export const AmbientLayer: React.FC = () => {
  useEffect(() => {
    const finePointer = window.matchMedia('(pointer: fine)');
    let frame = 0;
    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;

    const paint = () => {
      document.documentElement.style.setProperty('--pointer-x', `${x}px`);
      document.documentElement.style.setProperty('--pointer-y', `${y}px`);
      frame = 0;
    };

    const onPointerMove = (event: PointerEvent) => {
      if (!finePointer.matches) return;
      x = event.clientX;
      y = event.clientY;
      if (!frame) frame = window.requestAnimationFrame(paint);
    };

    window.addEventListener('pointermove', onPointerMove, { passive: true });
    return () => {
      window.removeEventListener('pointermove', onPointerMove);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div className="ambient-layer" aria-hidden="true">
      <div className="ambient-layer__glow" />
    </div>
  );
};
