import NewsletterForm from '@/components/NewsletterForm'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="max-w-2xl mx-auto">
      <section className="mb-16">
        <h1 className="text-4xl font-bold mb-4">Hi, I&apos;m Your Name</h1>
        <p className="text-lg text-gray-600 mb-6">
          Brief introduction about yourself and what you do.
        </p>
        <div className="space-x-4">
          <Link 
            href="/about"
            className="inline-block px-4 py-2 bg-black text-white rounded hover:bg-gray-800"
          >
            More about me
          </Link>
          <Link 
            href="/blog"
            className="inline-block px-4 py-2 border rounded hover:bg-gray-50"
          >
            Read my blog
          </Link>
        </div>
      </section>
      
      <NewsletterForm />
    </div>
  )
}
