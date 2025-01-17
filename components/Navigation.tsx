'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import ThemeToggle from './ThemeToggle'

export default function Navigation() {
  const pathname = usePathname()
  
  const links = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <nav>
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-xl font-bold hover:text-text-secondary transition-colors">
            Dylan Melotik
          </Link>
          <div className="flex items-center space-x-6">
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
      </div>
    </nav>
  )
} 