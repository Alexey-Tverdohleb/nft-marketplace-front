import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const useScrollToTop = () => {
  const location = useLocation();

  return useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
};

export default useScrollToTop;
