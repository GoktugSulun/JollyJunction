import { useEffect, useRef, useState } from 'react';

const defaultOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0
};

export const useIntersectionObserver = ({ options = {}, dependencies = [], triggerOnce = false }) => {
  const ref = useRef(null);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [entry, setEntry] = useState(false);
  const [intersectionRatio, setIntersectionRatio] = useState(0);
   
  useEffect(() => {
    const callback = (entries, observer) => {
      const element = entries[0];
      setEntry(element);
      setIsIntersecting(element.isIntersecting);
      setIntersectionRatio(Math.round(element.intersectionRatio * 100));
      if (triggerOnce) {
        observer.unobserve(ref.current);
      }
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
  }, [options, ref.current, ...dependencies]);

  return { ref, isIntersecting, entry, intersectionRatio };
};