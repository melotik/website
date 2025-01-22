import NewsletterForm from '@/components/NewsletterForm'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="max-w-2xl mx-auto px-4">
      <section className="mb-12 md:mb-16">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Hi 👋, I&apos;m Dylan</h1>
        <p className="text-base md:text-lg text-text-secondary mb-6">
          I&apos;m a blockchain data professional specializing in building scalable data systems at <a 
            href="https://www.openblocklabs.com/" 
            className="hover:text-text-muted transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >OpenBlock Labs</a>. 
          With an interest in building products that bridge the gap between finance and Web3.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 sm:space-x-4">
          <Link 
            href="/about"
            className="text-center px-4 py-2 bg-primary text-background rounded hover:bg-primary-hover transition-colors"
          >
            More about me
          </Link>
          <Link 
            href="/blog"
            className="text-center px-4 py-2 border border-border-light rounded hover:bg-secondary transition-colors"
          >
            Read my blog
          </Link>
        </div>
      </section>
      
      <NewsletterForm />
    </div>
  )
}
