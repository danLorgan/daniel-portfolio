// src/components/ThemeToggle.jsx
import { FiMoon, FiSun } from 'react-icons/fi'

const ThemeToggle = ({ darkMode, toggleTheme }) => {
  return (
    <button
      onClick={toggleTheme}
      className={`p-2 rounded-full focus:outline-none ${darkMode ? 'text-yellow-300 hover:bg-gray-700' : 'text-gray-700 hover:bg-gray-200'}`}
      aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {darkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
    </button>
  )
}

export default ThemeToggle