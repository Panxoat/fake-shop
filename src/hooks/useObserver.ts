'use client';

import { useEffect, useRef } from 'react';

const options = {
  threshold: 1.0,
};

interface UseObserverProps {
  callback: () => void;
}

export const useObserver = ({ callback }: UseObserverProps) => {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (ref && ref.current) {
      const intersectionCallback = (entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            callback();
          }
        });
      };

      const observer = new IntersectionObserver(intersectionCallback, options);

      observer.observe(ref.current);

      return () => {
        if (ref && ref.current) {
          observer.unobserve(ref.current);
        }
      };
    }
  }, [ref]);

  return {
    ref,
  };
};
