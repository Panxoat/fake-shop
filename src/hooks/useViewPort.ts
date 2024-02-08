'use client';

import { useEffect, useState } from 'react';

const useViewPort = () => {
  const [throttle, setThrottle] = useState(false);
  const [height, setHeight] = useState(0);

  const getViewPortHeight = () => {
    if (throttle) return;

    setThrottle(true);
    setTimeout(() => {
      setHeight(window.innerHeight);
      setThrottle(false);
    }, 300);
  };

  useEffect(() => {
    getViewPortHeight();
    window.addEventListener('resize', getViewPortHeight);

    return () => {
      window.removeEventListener('resize', getViewPortHeight);
    };
  }, []);
};

export default useViewPort;
