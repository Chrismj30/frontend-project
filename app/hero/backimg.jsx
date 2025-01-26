import React from 'react'
import Image from 'next/image'
export default function Backimg() {
  return (
    <div
              style={{
                position: "absolute",
                top: 2770,
                left: 0,
                right: 0,
                bottom: 0,
                zIndex: -1, // Ensure the background is behind all other elements
                width: '100%',
                height: '90%',
              }}
            >
              <Image
                src="/footer-img.jpg"
                alt="Background Image"
                layout="fill" // Make image cover the container
                objectFit="cover" // Ensure image covers the area
                objectPosition="center top" // Adjust the image position
              />
            </div>
  )
}

