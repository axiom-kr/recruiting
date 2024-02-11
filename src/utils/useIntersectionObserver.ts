import { useRef, RefObject } from "react";

type ObserveFunction = (element: Element | null) => void;
type UnobserveFunction = (element: Element | null) => void;
type IntersectionObserverTuple = [ObserveFunction, UnobserveFunction];

export default function useIntersectionObserver(
  callback: () => void
): IntersectionObserverTuple {
  const observer = useRef<IntersectionObserver | null>(null);

  const observe: ObserveFunction = (element) => {
    if (observer.current && element) {
      observer.current.observe(element);
    }
  };

  const unobserve: UnobserveFunction = (element) => {
    if (observer.current && element) {
      observer.current.unobserve(element);
    }
  };

  if (!observer.current) {
    observer.current = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            callback();
          }
        });
      },
      { threshold: 1 }
    );
  }

  return [observe, unobserve];
}
