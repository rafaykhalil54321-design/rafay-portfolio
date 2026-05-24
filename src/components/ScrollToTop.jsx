import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Jaise hi rasta (route) change hoga, page top par chala jayega
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;