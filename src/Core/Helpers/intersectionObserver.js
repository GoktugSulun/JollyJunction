const intersectionObserver = ({ element, callback, threshold=0, triggerOnce=false }) => {
  if (!element) {
    return;
  }
  const observer = new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting) {
      callback();
      if (triggerOnce) {
        observer.unobserve(element);
      }
    } 
  }, { threshold });
  observer.observe(element);
};

export default intersectionObserver;