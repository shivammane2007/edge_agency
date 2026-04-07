
import { useState, useEffect, useCallback } from 'react';

type Theme = 'light' | 'dark';

// This function runs once on the client-side to determine the initial theme.
const getInitialTheme = (): Theme => {
  if (typeof window === 'undefined') {
    return 'dark'; // Fallback for server-side rendering
  }
  const storedTheme = localStorage.getItem('theme');
  if (storedTheme === 'light' || storedTheme === 'dark') {
    return storedTheme;
  }
  // Default to dark if nothing is stored or the value is invalid
  return 'dark';
};

export const useTheme = () => {
  // Initialize state with the value from localStorage to prevent a page flash
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  useEffect(() => {
    const root = window.document.documentElement;
    
    // Set the class on the <html> element
    root.classList.remove('light', 'dark');
    root.classList.add(theme);

    // Persist the theme choice to localStorage
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  }, []);

  return { theme, toggleTheme };
};
