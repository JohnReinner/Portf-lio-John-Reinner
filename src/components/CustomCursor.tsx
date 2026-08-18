import React, { useEffect, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [cursorText, setCursorText] = useState('');
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    // Detect touch device
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
      setIsTouch(true);
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      // Check if hovering over element with data-cursor attribute
      const target = e.target as HTMLElement | null;
      const cursorTarget = target?.closest('[data-cursor]') as HTMLElement | null;
      
      if (cursorTarget) {
        setCursorText(cursorTarget.getAttribute('data-cursor') || '');
        setIsHovered(true);
      } else {
        const isClickable = target?.closest('button, a, input, textarea, select, [role="button"]');
        if (isClickable) {
          setCursorText('');
          setIsHovered(true);
        } else {
          setCursorText('');
          setIsHovered(false);
        }
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isVisible]);

  if (isTouch || !isVisible) return null;

  return (
    <div
      className="fixed pointer-events-none z-50 transition-transform duration-75 ease-out"
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
        left: 0,
        top: 0
      }}
    >
      {/* Outer Follower Ring */}
      <div
        className={`-translate-x-1/2 -translate-y-1/2 flex items-center justify-center rounded-full transition-all duration-200 border ${
          isHovered
            ? cursorText
              ? 'w-20 h-20 bg-emerald-500/15 border-emerald-400/60 backdrop-blur-xs scale-100 shadow-[0_0_20px_rgba(52,211,153,0.3)]'
              : 'w-10 h-10 bg-white/10 border-white/40 scale-100'
            : 'w-4 h-4 bg-emerald-400/20 border-emerald-400/50'
        }`}
      >
        {cursorText && (
          <span className="text-[9px] font-mono font-bold tracking-[0.2em] text-emerald-300 uppercase select-none text-center px-1">
            {cursorText}
          </span>
        )}
      </div>

      {/* Center Core Dot */}
      {!cursorText && (
        <div
          className={`absolute left-0 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full transition-all duration-150 ${
            isHovered
              ? 'w-1.5 h-1.5 bg-emerald-400'
              : 'w-1 h-1 bg-white'
          }`}
        />
      )}
    </div>
  );
};
