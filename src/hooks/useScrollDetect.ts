'use client';

import { useEffect, useState } from 'react';

const useScrollDetect = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [throttle, setThrottle] = useState(false);

  useEffect(() => {
    const updateScrollPosition = (element: HTMLElement | Window) => {
      setScrollPosition(window.scrollY);
    };

    const onScroll = () => {
      if (throttle) return;
      setThrottle(true);
      setTimeout(() => {
        updateScrollPosition(window);
        setThrottle(false);
      }, 300);
    };

    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return scrollPosition;
};

export default useScrollDetect;
