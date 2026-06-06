import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);
  const [visible, setVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
      setIsTouchDevice(true);
      return;
    }

    const move = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
      setVisible(true);
    };

    const handleOver = (e) => {
      if (
        e.target.closest('a, button, [role="button"], input, textarea, select, [data-cursor-hover]')
      ) {
        setHovering(true);
      }
    };

    const handleOut = () => setHovering(false);
    const handleLeave = () => setVisible(false);

    window.addEventListener('mousemove', move);
    window.addEventListener('mouseover', handleOver);
    window.addEventListener('mouseout', handleOut);
    document.addEventListener('mouseleave', handleLeave);

    return () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseover', handleOver);
      window.removeEventListener('mouseout', handleOut);
      document.removeEventListener('mouseleave', handleLeave);
    };
  }, []);

  if (isTouchDevice) return null;

  return (
    <>
      {/* Main Cursor */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full mix-blend-difference"
        animate={{
          x: pos.x - (hovering ? 20 : 8),
          y: pos.y - (hovering ? 20 : 8),
          width: hovering ? 40 : 16,
          height: hovering ? 40 : 16,
          opacity: visible ? 1 : 0,
        }}
        transition={{ type: 'spring', stiffness: 500, damping: 28, mass: 0.5 }}
        style={{
          background: 'rgba(124, 58, 237, 0.6)',
          border: '1px solid rgba(255, 255, 255, 0.4)',
        }}
      />
      {/* Trailing dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998] rounded-full"
        animate={{
          x: pos.x - 3,
          y: pos.y - 3,
          opacity: visible ? 0.6 : 0,
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 20, mass: 0.8 }}
        style={{
          width: 6,
          height: 6,
          background: '#06B6D4',
        }}
      />
    </>
  );
}
