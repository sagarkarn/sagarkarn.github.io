import { useState, useEffect } from 'react';

const useTheme = () => {
  const key = 'sagarkarn.github.io.theme';
  const [value, setValue] = useState(() => {
    const storedValue = localStorage.getItem(key);
    return storedValue !== null ? JSON.parse(storedValue) : 'halloween';
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
    document.querySelector("html").setAttribute("data-theme", value);
  }, [key, value]);

  return [value, setValue];
};

export default useTheme;