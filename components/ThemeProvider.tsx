"use client"

import { createContext, useContext, type ReactNode, useState } from "react"
import { useTheme } from "next-themes"

interface ThemeProviderProps {
  children: ReactNode
  attribute?: string
  defaultTheme?: string
  enableSystem?: boolean
}

const ThemeContext = createContext<{
  theme: string
  setTheme: (theme: string) => void
}>({ theme: "", setTheme: () => {} })

export const ThemeProvider = ({
  children,
  attribute = "class",
  defaultTheme = "system",
  enableSystem = true,
}: ThemeProviderProps) => {
  const { theme, setTheme: setNextTheme } = useTheme()
  const [currentTheme, setCurrentTheme] = useState(defaultTheme)

  const setTheme = (newTheme: string) => {
    setCurrentTheme(newTheme)
    setNextTheme(newTheme)
  }

  return (
    <ThemeContext.Provider value={{ theme: currentTheme, setTheme }}>
      <div className={`${attribute} ${currentTheme}`}>{children}</div>
    </ThemeContext.Provider>
  )
}

export const useThemeContext = () => useContext(ThemeContext)

