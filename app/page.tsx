import Image from "next/image";
import ArrowIcon from '@/components/ArrowIcon'
import FlipCard from '@/components/FlipCard'
export default function Home() {
  return (
    <div className="max-w-3xl mx-auto">
      {/* Hero Section */}
      <section className="mb-12">
        <h1 className="text-4xl font-bold mb-6 text-center md:text-left">Hi, I&apos;m Dylan 👋</h1>
        <div className="flex flex-col items-center md:items-start md:flex-row gap-6">
          <div className="md:w-1/4 lg:w-1/5 flex flex-col items-center md:items-start">
            <div className="aspect-square rounded-lg overflow-hidden w-48 md:w-full">
              <Image 
                src="/about/profile.jpg"
                alt="Dylan Melotik"
                width={300}
                height={300}
                className="object-cover w-full h-full"
                priority
              />
            </div>
          </div>
          
          <div className="flex-1">
            <p className="text-lg text-text-secondary leading-relaxed mb-6">
              From being the family & friend tech support at age 9 to building my first website in high school, my path into tech was clear from the start. 
              <br /><br />
              While I am looking for my next role as an Engineer, I&apos;m excited to be working on a passion project. Combining my love for travel, AI, and adventure into one product, check it out{' '}
               <a 
                 href="https://adventure-copilot.vercel.app/"
                 target="_blank"
                 rel="noopener noreferrer"
                 className="link-underline"
               >
                 here
               </a>!
                               <br /><br />
                Don&apos;t hesitate to{' '}
                <a 
                  href="/contact"
                  className="link-underline"
                >
                  reach out to me
                </a>!
            </p>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Projects</h2>
        <div className="space-y-3">
          {/* <a TODO: Add back in once I have a post
            href="https://dylanmelotik.medium.com/subscribe"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link group"
          >
            <i className="fab fa-medium text-lg mr-2" />
            In progress: Trying out long form writing
            <ArrowIcon />
          </a>
          <br /> */}
                     <a 
             href="https://adventure-copilot.vercel.app/"
             target="_blank"
             rel="noopener noreferrer"
             className="social-link group"
           >
             <i className="fas fa-globe text-lg mr-2" />
             Adventure Copilot: AI Assistant for Adventure Planning
             <ArrowIcon />
           </a>
          <br />
          <a 
            href="https://github.com/melotik/website"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link group"
          >
            <i className="fab fa-github text-lg mr-2" />
            Personal Website: Built with Next.js + Typescript
            <ArrowIcon />
          </a>
          <br />
          <a 
            href="https://www.youtube.com/@dylanmelotik4708"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link group"
          >
            <i className="fab fa-youtube text-lg mr-2" />
            The Graph Ecosystem video guides
            <ArrowIcon />
          </a>
          <br />
          <a 
            href="https://github.com/badgerblockchain/badger-blocks"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link group"
          >
            <i className="fab fa-github text-lg mr-2" />
            Badger Blocks: A gameified way to learn solidity / smart contracts
            <ArrowIcon />
          </a>
          <br />
          <a 
            href="https://github.com/badgerblockchain/development-guide"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link group"
          >
            <i className="fab fa-github text-lg mr-2" />
            Deep dive into smart contract concepts behind Badger Blocks
            <ArrowIcon />
          </a>
        </div>
      </section>

      {/* Career & Education */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Career & Education</h2>
        <div className="space-y-4">
          {/* Professional Experience */}
          <div className="p-4 rounded-lg border border-border-light">
            <h3 className="font-medium mb-2">Professional Experience</h3>
            <div className="space-y-4">
            <div>
                <div className="flex items-center gap-3 mb-4">
                  <a 
                    href="https://www.openblocklabs.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:opacity-80 transition-opacity"
                  >
                    <Image 
                      src="/about/openblocklabs.svg"
                      alt="Open Block Labs logo"
                      width={32}
                      height={32}
                      className="w-8 h-8"
                    />
                  </a>
                  <div>
                    <h4 className="font-medium">Data Engineer at Open Block Labs</h4>
                    <p className="text-text-secondary">June 2024 - July 2025</p>
                  </div>
                </div>
                
                <ul className="list-disc list-inside text-text-secondary">
                  <li><a 
                    href="https://www.obl.dev/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-underline"
                  >
                    OB1
                  </a>: An Agent Arena for collecting human preferences on agent workflows</li>
                  <li>Blockchain data infrastructure for incentive mechanisms</li>
                </ul>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-4">
                  <a 
                    href="https://messari.io/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:opacity-80 transition-opacity"
                  >
                    <Image 
                      src="/about/messari.svg"
                      alt="Messari logo"
                      width={32}
                      height={32}
                      className="w-8 h-8"
                    />
                  </a>
                  <div>
                    <h4 className="font-medium">Software Engineer at Messari</h4>
                    <p className="text-text-secondary">March 2022 - June2024</p>
                  </div>
                </div>
                
                <ul className="list-disc list-inside text-text-secondary">
                  <li>200+ <a 
                    href="https://github.com/messari/subgraphs"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-underline"
                  >
                    Subgraphs
                  </a> delivering on a <a 
                    href="https://messari.io/news/messari-subgraphs-receives-12-5m-grant-from-the-graph-foundation"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-underline"
                  >
                    $12.5M Graph Foundation grant
                  </a></li>
                  <li>Built <a 
                    href="https://messari.io/token-unlocks"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-underline"
                  >
                    Token Unlocks
                  </a> product</li>
                  <li><a 
                    href="https://docs.messari.io/reference/allocations"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-underline"
                  >
                    Token Unlocks API
                  </a></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="p-4 rounded-lg border border-border-light">
            <h3 className="font-medium mb-2">Education</h3>
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <a 
                  href="https://www.wisc.edu/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-80 transition-opacity"
                >
                  <Image 
                    src="/about/wisconsin.svg"
                    alt="University of Wisconsin-Madison logo"
                    width={32}
                    height={32}
                    className="w-8 h-8"
                  />
                </a>
                <div>
                  <h4 className="font-medium">University of Wisconsin-Madison</h4>
                  <p className="text-text-secondary">
                    Bachelor of Science in <a 
                      href="https://www.cs.wisc.edu/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-underline"
                    >
                      Computer Science
                    </a>
                  </p>
                  <p className="text-text-secondary">
                    Certificate in <a 
                      href="https://math.wisc.edu/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-underline"
                    >
                      Mathematics
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TODO: Add Reading Section
       * - Add favorite books
       * - Include influential articles/papers
       * - Maybe add current reading list
       */}

      {/* Beyond Code */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Beyond Code</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <FlipCard 
            imageSrc="/about/travel.jpg"
            imageAlt="Travel"
            title="Travel"
            description="Finding simplicity and reflection through exploring new cultures and landscapes."
          />
          <FlipCard 
            imageSrc="/about/hiking.jpg"
            imageAlt="Hiking"
            title="Colorado 14ers"
            description="Conquered 11 peaks above 14,000ft. Each summit teaches persistence and preparation."
          />
          <FlipCard 
            imageSrc="/about/skydiving.jpg"
            imageAlt="Skydiving"
            title="Skydiving"
            description="Mastering risk assessment and quick decision making."
            link="https://www.youtube.com/@dylanmelotik"
            icon="fab fa-youtube"
          />
        </div>
      </section>
    </div>
  )
}
