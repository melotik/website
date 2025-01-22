'use client'

import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const { resolvedTheme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
    // Debug log
    console.log('System prefers dark:', window.matchMedia('(prefers-color-scheme: dark)').matches)
    console.log('Resolved theme:', resolvedTheme)
  }, [resolvedTheme])

  if (!mounted) return null

  return (
    <button
      onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
      className="p-2 rounded-lg hover:bg-secondary transition-colors w-[36px] h-[36px] flex items-center justify-center"
      aria-label="Toggle theme"
    >
      <span className="flex items-center justify-center">
        {resolvedTheme === 'dark' ? '☾' : '☼'}
      </span>
    </button>
  )
} 