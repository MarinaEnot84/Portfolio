'use client'

import { useTheme } from 'next-themes'

export default function ThemeWrapper({ children }: { children: React.ReactNode }) {
  const { theme } = useTheme()
  
  return (
    <div className={theme === 'dark' ? 'dark' : ''}>
      {children}
    </div>
  )
}