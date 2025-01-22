/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'

import { useState } from 'react'

export default function NewsletterForm() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    try {
      // Replace with your newsletter subscription endpoint
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })

      if (!response.ok) throw new Error('Subscription failed')
      
      setStatus('success')
      setEmail('')
    } catch (error) {
      setStatus('error')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-md w-full">
      <h3 className="text-lg font-semibold mb-2">Subscribe to my newsletter</h3>
      <div className="flex flex-col sm:flex-row gap-2">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="flex-grow px-3 py-2 border border-foreground rounded bg-white text-black placeholder:text-text-muted"
          required
        />
        <button
          type="submit"
          disabled={status === 'loading'}
          className="px-4 py-2 bg-primary text-background rounded 
            hover:bg-primary-hover
            active:bg-primary-hover
            transition-colors duration-200 
            disabled:opacity-50
            sm:w-auto w-full"
        >
          Subscribe
        </button>
      </div>
      {status === 'success' && (
        <p className="text-green-600 mt-2">Thanks for subscribing!</p>
      )}
      {status === 'error' && (
        <p className="text-red-600 mt-2">Something went wrong. Please try again.</p>
      )}
    </form>
  )
} 