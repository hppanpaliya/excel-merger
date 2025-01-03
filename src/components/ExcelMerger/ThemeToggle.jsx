import { Moon, Sun } from 'lucide-react';

const ThemeToggle = ({ darkMode, setDarkMode }) => {
  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className={`fixed top-4 right-4 p-2 rounded-full transition-colors ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-100'
        } shadow-lg`}
    >
      {darkMode ? (
        <Moon className="w-6 h-6 text-blue-500" />
      ) : (
        <Sun className="w-6 h-6 text-blue-500" />
      )}
    </button>
  );
};

export default ThemeToggle;
