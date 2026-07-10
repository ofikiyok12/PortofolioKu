import { motion } from 'framer-motion'
import { HiSun, HiMoon } from 'react-icons/hi'
import { useTheme } from '../../context/ThemeContext'

export default function ThemeToggle() {
  const { darkMode, toggleDarkMode } = useTheme()

  return (
    <motion.button
      onClick={toggleDarkMode}
      className="fixed bottom-6 right-6 z-40 p-3 rounded-full neobrutalist-btn"
      style={{
        backgroundColor: 'var(--cr-bg-card)',
        color: 'var(--cr-text)',
        borderColor: 'var(--cr-border)',
        boxShadow: '4px 4px 0px var(--cr-border)',
      }}
      whileHover={{ scale: 1.1, rotate: 180 }}
      whileTap={{ scale: 0.9 }}
      aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {darkMode ? <HiSun size={20} /> : <HiMoon size={20} />}
    </motion.button>
  )
}
