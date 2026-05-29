import { useEffect } from 'react';
import Lenis from 'lenis';

const useLenis = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 0.6,          // faster — was 0.8
      easing: (t) => 1 - Math.pow(1 - t, 3), // cubic ease-out: snappy & natural
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.0,   // natural wheel speed
      touchMultiplier: 1.8,   // faster on touch/trackpad gesture
      infinite: false,
    });

    let rafId;

    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId); // properly cancel on unmount
      lenis.destroy();
    };
  }, []);
};

export default useLenis;
