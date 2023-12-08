const intersectionObserver = ({ element, callback, threshold=0, triggerOnce=false }) => {
  if (!element) {
    return;
  }
  const observer = new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting) {
      callback(entry);
      if (triggerOnce) {
        observer.unobserve(element);
      }
    } 
  }, { threshold });
  observer.observe(element);
};

export default intersectionObserver;

// const defaultOptions = {
//   root: null,
//   rootMargin: 0,
//   threshold: 0
// };

// const intersectionObserver = ({ element, callback, options=defaultOptions, triggerOnce=false }) => {
//   if (!element) {
//     return;
//   }
//   const observer = new IntersectionObserver(([entry]) => {
//     if (entry.isIntersecting) {
//       callback();
//       if (triggerOnce) {
//         observer.unobserve(element);
//       }
//     } 
//   }, options);
//   observer.observe(element);
// };

// export default intersectionObserver;