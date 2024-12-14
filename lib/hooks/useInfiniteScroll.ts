"use client";

import { useEffect, useRef, useState } from 'react';

export function useInfiniteScroll(callback: () => void, threshold = 100) {
  const [isFetching, setIsFetching] = useState(false);
  const observerRef = useRef<IntersectionObserver>();
  const targetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: `${threshold}px`,
      threshold: 0,
    };

    observerRef.current = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !isFetching) {
        setIsFetching(true);
        callback();
      }
    }, options);

    return () => observerRef.current?.disconnect();
  }, [callback, threshold, isFetching]);

  useEffect(() => {
    if (targetRef.current) {
      observerRef.current?.observe(targetRef.current);
    }
  }, [targetRef]);

  return { targetRef, isFetching, setIsFetching };
}