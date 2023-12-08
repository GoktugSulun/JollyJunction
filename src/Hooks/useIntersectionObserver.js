import { useEffect, useRef, useState } from 'react';

const defaultOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0
};

export const useIntersectionObserver = ({ options = {} }) => {
  const ref = useRef(null);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [entry, setEntry] = useState(false);
  const [intersectionRatio, setIntersectionRatio] = useState(0);
   
  useEffect(() => {
    const callback = (entries) => {
      const element = entries[0];
      setEntry(element);
      setIsIntersecting(element.isIntersecting);
      setIntersectionRatio(Math.round(element.intersectionRatio * 100));
    };
    const observer = new IntersectionObserver(callback, { ...defaultOptions, ...options });
    
    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [options, ref.current]);

  return { ref, isIntersecting, entry, intersectionRatio };
};