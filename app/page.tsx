import NewsletterForm from '@/components/NewsletterForm'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="max-w-2xl mx-auto">
      <section className="mb-16">
        <h1 className="text-4xl font-bold mb-4">Hi 👋, I&apos;m Dylan</h1>
        <p className="text-lg text-text-secondary mb-6">
          I'm a blockchain data professional specializing in building scalable data systems at <a href="https://www.openblocklabs.com/" className="hover:text-text-muted transition-colors">OpenBlock Labs</a>. 
          With an interest in building products that bridge the gap between finance and Web3.
        </p>
        <div className="space-x-4">
          <Link 
            href="/about"
            className="inline-block px-4 py-2 bg-foreground text-background rounded hover:bg-primary-hover transition-colors"
          >
            More about me
          </Link>
          <Link 
            href="/blog"
            className="inline-block px-4 py-2 border border-foreground rounded hover:bg-foreground hover:text-background transition-colors"
          >
            Read my blog
          </Link>
        </div>
      </section>
      
      <NewsletterForm />
    </div>
  )
}
