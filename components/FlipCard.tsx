'use client'

import Image from 'next/image'
import { useState } from 'react'

interface FlipCardProps {
  imageSrc: string
  imageAlt: string
  title: string
  description: string
  link?: string
  icon?: string
}

export default function FlipCard({ imageSrc, imageAlt, title, description, link, icon }: FlipCardProps) {
  const [isFlipped, setIsFlipped] = useState(false)

  const handleFlip = () => {
    setIsFlipped(!isFlipped)
  }

  const TitleComponent = () => (
    <h3 className="font-medium mb-2">
      {icon && <i className={`${icon} mr-2`} />}
      {title}
    </h3>
  )

  return (
    <div 
      className="relative w-full aspect-square [perspective:1000px] cursor-pointer"
      onClick={handleFlip}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div 
        className={`relative w-full h-full transition-transform duration-500 
          [transform-style:preserve-3d] ${isFlipped ? '[transform:rotateY(180deg)]' : ''}`}
      >
        {/* Front */}
        <div className="absolute w-full h-full [backface-visibility:hidden]">
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={400}
            height={400}
            className="object-cover w-full h-full rounded-lg"
            quality={100}
          />
        </div>
        
        {/* Back */}
        <div className="absolute w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] 
          bg-secondary rounded-lg p-4 flex flex-col justify-center items-center text-center">
          {link ? (
            <a 
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-text-secondary transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              <TitleComponent />
            </a>
          ) : (
            <TitleComponent />
          )}
          <p className="text-text-secondary text-sm">{description}</p>
        </div>
      </div>
    </div>
  )
} 