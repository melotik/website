'use client'

import { useState, useRef } from 'react'
import ArrowIcon from '@/components/ArrowIcon'

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')
  const formRef = useRef<HTMLFormElement>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('loading')
    setErrorMessage('')

    const formData = {
      email: (e.currentTarget.elements.namedItem('email') as HTMLInputElement).value,
      subject: (e.currentTarget.elements.namedItem('subject') as HTMLInputElement).value,
      message: (e.currentTarget.elements.namedItem('message') as HTMLTextAreaElement).value,
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error?.message || 'Failed to send message')
      }

      setStatus('success')
      if (formRef.current) {
        formRef.current.reset()
      }
    } catch (error) {
      setStatus('error')
      setErrorMessage(error instanceof Error ? error.message : 'Failed to send message')
    }
  }

  return (
    <div className="max-w-xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">Get in Touch</h1>
      
      <p className="text-text-secondary mb-8">
        Have a question, inquiry, or just want to connect? Feel free to reach out through the form below or any of my social channels.
      </p>
      
      <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-1">
            Your Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full px-3 py-2 border border-border-light rounded-lg bg-background 
              focus:outline-none focus:ring-2 focus:ring-primary/50"
            placeholder="your@email.com"
          />
        </div>

        <div>
          <label htmlFor="subject" className="block text-sm font-medium mb-1">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            required
            className="w-full px-3 py-2 border border-border-light rounded-lg bg-background 
              focus:outline-none focus:ring-2 focus:ring-primary/50"
            placeholder="What's this about?"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-1">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={3}
            className="w-full px-3 py-2 border border-border-light rounded-lg bg-background 
              focus:outline-none focus:ring-2 focus:ring-primary/50"
            placeholder="Your message here..."
          />
        </div>

        <button
          type="submit"
          disabled={status === 'loading'}
          className="w-full px-4 py-2 bg-primary text-background rounded-lg
            hover:bg-primary-hover transition-colors duration-200
            disabled:opacity-50"
        >
          {status === 'loading' ? 'Sending...' : 'Send Message'}
        </button>

        {status === 'success' && (
          <p className="text-green-600 text-sm text-center">
            Thank you for reaching out! I&apos;ll get back to you soon.
          </p>
        )}
        {status === 'error' && (
          <p className="text-red-600 text-sm text-center">
            {errorMessage || 'Failed to send message. Please try again.'}
          </p>
        )}
      </form>

      {/* Alternative Contact Methods */}
      <div className="mt-8 pt-6 border-t border-border-light space-y-4">
        <div>
          <h2 className="text-sm font-medium text-text-secondary mb-3">Or reach out directly</h2>
          <a 
            href="mailto:dylanmelotik@gmail.com"
            className="social-link group"
          >
            <span className="mr-2">📧</span>
            dylanmelotik@gmail.com
            <ArrowIcon />
          </a>
        </div>

        <div>
          <h2 className="text-sm font-medium text-text-secondary mb-3">Let&apos;s connect</h2>
          <div className="space-y-2">
            <a 
              href="https://www.linkedin.com/in/melotik"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link group"
            >
              <i className="fab fa-linkedin text-lg mr-2" />
              Connect with me on LinkedIn
              <ArrowIcon />
            </a>
            <a 
              href="https://x.com/dylanmelotik"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link group"
            >
              <i className="fab fa-x-twitter text-lg mr-2" />
              Follow me on X
              <ArrowIcon />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
} 