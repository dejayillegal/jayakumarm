import { useEffect } from 'react';

export function useSmoothScroll() {
  useEffect(() => {
    const handleClick = (e: Event) => {
      const target = e.currentTarget as HTMLAnchorElement;
      const href = target.getAttribute('href');
      
      if (href && href.startsWith('#') && href !== '#') {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
          const top = element.getBoundingClientRect().top + window.pageYOffset;
          window.scrollTo({
            top: top,
            behavior: 'smooth'
          });
        }
      }
    };

    const anchors = document.querySelectorAll('a[href^="#"]');
    anchors.forEach(anchor => {
      anchor.addEventListener('click', handleClick, { passive: false });
    });

    return () => {
      anchors.forEach(anchor => {
        anchor.removeEventListener('click', handleClick);
      });
    };
  }, []);
}
