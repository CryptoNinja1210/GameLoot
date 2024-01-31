import { useState, useEffect } from "react"

const useOnScreen = (ref: { current: any; }, rootMargin = "0px") => {
	// Some code...
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        rootMargin
      }
    );

    const currentElement = ref?.current;

    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      observer.unobserve(currentElement);
    };
  }, [ref, rootMargin]);
  return isVisible;
}

export default useOnScreen
