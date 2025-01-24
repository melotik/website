import Link from 'next/link'
import ArrowIcon from '@/components/ArrowIcon'

export default function Home() {
  return (
    <div className="max-w-2xl mx-auto px-4">
      {/* Hero Section */}
      <section className="flex flex-col items-start space-y-6 py-12 md:py-20">
        <h1 className="text-4xl md:text-5xl font-bold">
          Hi, I&apos;m Dylan 👋
        </h1>
        
        <p className="text-lg text-text-secondary max-w-xl">
          A blockchain data professional building scalable systems at{' '}
          <a 
            href="https://www.openblocklabs.com/" 
            className="link-underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            OpenBlock Labs
          </a>
          . Bridging the gap between finance and Web3.
        </p>

        {/* Call to Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto pt-4">
          <Link 
            href="/about"
            className="text-center px-6 py-3 bg-primary text-background rounded-lg 
              hover:bg-primary-hover transition-all duration-200 
              shadow-sm hover:shadow-md"
          >
            More about me
          </Link>
          <Link 
            href="/contact"
            className="text-center px-6 py-3 border border-border-light rounded-lg
              hover:bg-secondary transition-all duration-200"
          >
            Get in touch
          </Link>
        </div>

        {/* Medium Subscribe Section */}
        <div className="w-full pt-8 mt-4 border-t">
          <a 
            href="https://dylanmelotik.medium.com/subscribe"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center group text-text-secondary hover:text-foreground transition-colors"
          >
            <span className="mr-2">✍️</span>
            Follow my writing journey on Medium
            <ArrowIcon />
          </a>
        </div>
      </section>
    </div>
  )
}
