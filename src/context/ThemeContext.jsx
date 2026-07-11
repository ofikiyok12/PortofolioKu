import { createContext, useContext, useState, useEffect } from 'react'

const ThemeContext = createContext()

function getInitialTheme() {
  const stored = localStorage.getItem('theme')
  if (stored === 'dark' || stored === 'light') return stored === 'dark'
  return false
}

export function ThemeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(getInitialTheme)

  useEffect(() => {
    const root = document.documentElement
    if (darkMode) {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
    localStorage.setItem('theme', darkMode ? 'dark' : 'light')
  }, [darkMode])

  const toggleDarkMode = () => setDarkMode(prev => !prev)

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext)
