import withMDX from '@next/mdx'
import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  // Enable MDX files
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  
  // Additional config options
  reactStrictMode: true,
  
  // Image optimization domains if you need to load external images
  images: {
    domains: [
      // Add domains here if you need to load images from external sources
      // For example: 'images.unsplash.com'
    ],
  },
}

// Combine the MDX configuration with the rest of your Next.js config
export default withMDX()(nextConfig)
