import Image from "next/image";

export default function About() {
  return (
    <div className="max-w-3xl mx-auto">
      {/* Intro Section */}
      <section className="mb-12">
        <h1 className="text-4xl font-bold mb-6">About Me</h1>
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div className="flex-1">
            <p className="text-lg mb-4">
              Coming soon...
            </p>
            <p className="text-text-secondary">
              Currently based in Denver
            </p>
          </div>
          <div className="w-48 h-48 rounded-lg overflow-hidden">
            <Image 
              src="/about/profile.jpg"
              alt="Dylan Melotik"
              width={192}
              height={192}
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
              <div className="flex items-center gap-3">
                <div>
                  <h4 className="font-medium">Software Engineer at Messari</h4>
                  <p className="text-text-secondary">2021 - 2023</p>
                  <ul className="list-disc list-inside text-text-secondary mt-2">
                    <li>Set industry standard DeFi transformations and schemas through <a 
                      href="https://github.com/messari/subgraphs"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-underline"
                    >
                      Messari Subgraphs
                    </a></li>
                    <li>Built backend infrastructure for <a 
                      href="https://messari.io/token-unlocks"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-underline"
                    >
                      Token Unlocks
                    </a>, one of Messari&apos;s stickiest products</li>
                    <li>Developed dbt models for SQL-based DeFi transformations to improve development cycles and performance</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interests & Hobbies */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Interests & Hobbies</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 rounded-lg border border-border-light">
            <h3 className="font-medium mb-2">Technical Interests</h3>
            <ul className="list-disc list-inside text-text-secondary">
              <li>Blockchain Development</li>
              <li>Distributed Systems</li>
              <li>Add more...</li>
            </ul>
          </div>
          <div className="p-4 rounded-lg border border-border-light">
            <h3 className="font-medium mb-2">Hobbies</h3>
            <ul className="list-disc list-inside text-text-secondary">
              <li>Add your hobbies</li>
              <li>And interests here</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Reading List */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Favorite Books</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 rounded-lg border border-border-light">
            <div className="w-full h-40 bg-secondary rounded mb-3">
              {/* Book cover placeholder */}
            </div>
            <h3 className="font-medium">Book Title</h3>
            <p className="text-sm text-text-secondary">Author</p>
          </div>
        </div>
      </section>

      {/* Travel Gallery */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Travel Highlights</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="aspect-square rounded-lg bg-secondary flex items-center justify-center text-text-secondary">
            {/* Travel photo placeholder */}
          </div>
        </div>
      </section>

      {/* Current Projects */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Current Focus</h2>
        <div className="p-4 rounded-lg border border-border-light">
          <p className="text-text-secondary">
            Share what you&apos;re currently working on or learning
          </p>
        </div>
      </section>
    </div>
  )
} 