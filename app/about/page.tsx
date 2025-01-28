import Image from "next/image";
import FlipCard from "../../components/FlipCard";
import ArrowIcon from "../../components/ArrowIcon";

export default function About() {
  return (
    <div className="max-w-3xl mx-auto">
      {/* Intro Section */}
      <section className="mb-12">
        <h1 className="text-4xl font-bold mb-6">About Me</h1>
        <div className="flex flex-col md:flex-row gap-6 items-start">
          <div className="flex-1">
            <p className="text-lg mb-4 text-text-secondary leading-relaxed">
              From being the family & friend tech support at age 9 to building my first website in high school, my path into tech was clear from the start.
            </p>
            <p className="text-text-secondary">
              Based in Denver, CO
            </p>
          </div>
          <div className="w-40 h-40 rounded-lg overflow-hidden flex-shrink-0">
            <Image 
              src="/about/profile.jpg"
              alt="Dylan Melotik"
              width={160}
              height={160}
              className="object-cover w-full h-full"
              priority
            />
          </div>
        </div>
      </section>

      {/* Education & Career */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Education & Career</h2>
        <div className="space-y-4">
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
          <div className="p-4 rounded-lg border border-border-light">
            <h3 className="font-medium mb-2">Professional Experience</h3>
            <div className="space-y-4">
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
                    <p className="text-text-secondary">2022 - 2024</p>
                  </div>
                </div>
                
                <ul className="list-disc list-inside text-text-secondary">
                  <li>Helped set industry standard DeFi schemas and transformations through <a 
                    href="https://github.com/messari/subgraphs"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-underline"
                  >
                    Messari Subgraphs
                  </a></li>
                  <li>Designed database schema and implemented GraphQL API + Redis cache for <a 
                    href="https://messari.io/token-unlocks"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-underline"
                  >
                    Token Unlocks
                  </a>, one of Messari&apos;s stickiest products</li>
                  <li>Collaborated with product team to utilize existing Token Unlocks backend system to build 5 <a 
                    href="https://docs.messari.io/reference/allocations"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-underline"
                  >
                    enterprise-grade REST endpoints
                  </a></li>
                  <li>Developed dbt models to transform raw blockchain data into high level metrics, scaling performance with Snowflake</li>
                </ul>
              </div>

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
                    <p className="text-text-secondary">2024 - Present</p>
                  </div>
                </div>
                
                <ul className="list-disc list-inside text-text-secondary">
                  <li>Building + maintaining blockchain data pipelines with Python + DBT + Airflow</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Personal Projects */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Projects</h2>
        <div className="space-y-3">
          <a 
            href="https://dylanmelotik.medium.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link group"
          >
            <i className="fab fa-medium text-lg mr-2" />
            In progress: Trying out long form writing
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

      {/* Beyond Code */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Beyond Code</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <FlipCard 
            imageSrc="/about/travel.jpg"
            imageAlt="Travel"
            title="Travel"
            description="Reflection through exploring new cultures and landscapes."
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
          />
        </div>
      </section>
    </div>
  )
} 