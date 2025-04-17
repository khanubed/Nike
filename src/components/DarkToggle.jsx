
import { useEffect, useState } from 'react';

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem('theme') === 'dark'
  );

  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className={`flex justify-center items-center gap-2 px-7 py-4 border-2 font-montserrat text-lg leading-none max-sm:text-sm max-sm:py-1.5 max-sm:px-2.5 rounded-full ${darkMode ? 'bg-black text-slate-100 border-slate-100 ' : 'bg-white text-slate-gray'}`}
    >
      {darkMode ? ' Dark' : ' Light'}
    </button>
  );
};

export default DarkModeToggle;
