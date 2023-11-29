const intersectionObserver = (element, callback, threshold=0.8) => {
  if (!element) {
    return;
  }
  const observer = new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting) {
      observer.unobserve(element);
      callback();
    } 
  });
  observer.observe(element, { threshold }); //! Doesnt work threshold :(
};

export default intersectionObserver;