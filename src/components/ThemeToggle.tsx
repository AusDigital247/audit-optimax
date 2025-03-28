
import React from 'react';
import { Moon, Sun } from 'lucide-react';

interface ThemeToggleProps {
  currentTheme: 'light' | 'dark';
  toggleTheme: () => void;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ currentTheme, toggleTheme }) => {
  return (
    <button
      onClick={toggleTheme}
      className="bg-navy/90 hover:bg-navy text-white p-2 rounded-full shadow-lg flex items-center gap-2 backdrop-blur-sm border border-white/20 transition-all hover:scale-105"
      aria-label={currentTheme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
      title={currentTheme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
    >
      {currentTheme === 'light' ? (
        <Moon size={22} className="text-teal" />
      ) : (
        <Sun size={22} className="text-teal" />
      )}
    </button>
  );
};

export default ThemeToggle;
