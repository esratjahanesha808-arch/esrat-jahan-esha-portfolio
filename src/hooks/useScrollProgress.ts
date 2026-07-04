import { useState, useEffect } from 'react';

interface ScrollPosition {
  x: number;
  y: number;
  progress: number;
}

export const useScrollProgress = (): ScrollPosition => {
  const [scrollPosition, setScrollPosition] = useState<ScrollPosition>({
    x: 0,
    y: 0,
    progress: 0,
  });

  useEffect(() => {
    const handleScroll = () => {
      const x = window.scrollX;
      const y = window.scrollY;
      
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? y / docHeight : 0;

      setScrollPosition({ x, y, progress });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Call once on mount

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return scrollPosition;
};
