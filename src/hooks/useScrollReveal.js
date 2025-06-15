import { useEffect, useRef, useMemo } from 'react';

const useScrollReveal = (options = {}) => {
  const elementRef = useRef(null);

  // Memoize options to prevent unnecessary effect re-runs
  const memoizedOptions = useMemo(() => options, [
    JSON.stringify(options)
  ]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      ...memoizedOptions
    });

    const element = elementRef.current;
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [memoizedOptions]);

  return elementRef;
};

export default useScrollReveal;