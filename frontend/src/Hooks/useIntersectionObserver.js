import { useEffect, useRef, useState } from 'react';

const defaultOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0
};

export const useIntersectionObserver = (
  { 
    options = {}, 
    dependencies = [], 
    triggerOnce = false ,
    element = null
  }) => {
  const ref = useRef(null);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [entry, setEntry] = useState(false);
  const [intersectionRatio, setIntersectionRatio] = useState(0);
   
  useEffect(() => {
    const callback = (entries, observer) => {
      const el = entries[0];
      setEntry(el);
      setIsIntersecting(el.isIntersecting);
      setIntersectionRatio(Math.round(el.intersectionRatio * 100));
      if (el.isIntersecting && triggerOnce) {
        observer.unobserve(ref.current);
      }
    };
    const observer = new IntersectionObserver(callback, { ...defaultOptions, ...options });

    if (element) {
      ref.current = element;
    }
    
    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [...dependencies, options, element]);

  return { ref, isIntersecting, entry, intersectionRatio };
};