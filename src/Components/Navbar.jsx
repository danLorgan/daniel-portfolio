import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMenu, FiX, FiMoon, FiSun } from 'react-icons/fi'
import ThemeToggle from './ThemeToggle'

const Navbar = ({ darkMode, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    // Initial checks
    handleScroll()
    checkMobile()

    // Event listeners
    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', checkMobile)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', checkMobile)
    }
  }, [])

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Work', href: '#work' },
    { name: 'Services', href: '#services' },
    { name: 'Skills', href: '#skills' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <motion.nav 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'py-1 shadow-lg' : 'py-1 sm:py-2'
      } ${
        darkMode ? 'bg-gray-800/85 backdrop-blur-sm' : 'bg-white/85 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16">
          {/* Logo/Brand */}
          <div className="flex-shrink-0">
            <a 
              href="#home" 
              className={`text-xl font-bold ${
                darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-800'
              } transition-colors`}
            >
              Daniel
            </a>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center">
            <div className="ml-8 flex items-center space-x-1 lg:space-x-2">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`px-3 py-2 rounded-md text-sm lg:text-base font-medium ${
                    darkMode 
                      ? 'text-gray-300 hover:text-white hover:bg-gray-700/50' 
                      : 'text-gray-700 hover:text-gray-900 hover:bg-gray-200/50'
                  } transition-colors`}
                >
                  {item.name}
                </a>
              ))}
            </div>
            <div className="ml-4 lg:ml-6">
              <button
                onClick={toggleTheme}
                className={`p-2 rounded-full ${
                  darkMode 
                    ? 'text-yellow-300 hover:bg-gray-700/50' 
                    : 'text-gray-700 hover:bg-gray-200/50'
                } transition-colors`}
                aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
              >
                {darkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
              </button>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-1">
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full ${
                darkMode 
                  ? 'text-yellow-300 hover:bg-gray-700/50' 
                  : 'text-gray-700 hover:bg-gray-200/50'
              } transition-colors`}
              aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {darkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-md ${
                darkMode 
                  ? 'text-gray-300 hover:text-white hover:bg-gray-700/50' 
                  : 'text-gray-700 hover:text-gray-900 hover:bg-gray-200/50'
              } focus:outline-none transition-colors`}
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
            >
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && isMobile && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className={`md:hidden overflow-hidden ${
              darkMode ? 'bg-gray-800/95' : 'bg-white/95'
            } backdrop-blur-sm`}
          >
            <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`block px-3 py-3 rounded-md text-base font-medium ${
                    darkMode 
                      ? 'text-gray-300 hover:text-white hover:bg-gray-700/50' 
                      : 'text-gray-700 hover:text-gray-900 hover:bg-gray-200/50'
                  } transition-colors`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

export default Navbar