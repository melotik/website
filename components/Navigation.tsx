'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import ThemeToggle from './ThemeToggle'

export default function Navigation() {
  const pathname = usePathname()
  
  const links = [
    { href: '/', label: 'Home' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <nav className="relative">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-end items-center space-x-6">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`hover:text-text-secondary transition-colors ${
                pathname === href ? 'font-semibold' : ''
              }`}
            >
              {label}
            </Link>
          ))}
          <ThemeToggle />
        </div>
      </div>
    </nav>
  )
} 