import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Bildergalerie - Felsland Grundschule',
}

const images = [
  { src: '/images/DSC03500.jpg', alt: 'Schulimpression 1' },
  { src: '/images/DSC03495.jpg', alt: 'Schulimpression 2' },
  { src: '/images/DSC03445.jpg', alt: 'Schulimpression 3' },
  { src: '/images/DSC03448.jpg', alt: 'Schulimpression 4' },
  { src: '/images/DSC03446.jpg', alt: 'Schulimpression 5' },
]

export default function BildergaleriePage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-6xl">
      <h1 className="text-4xl font-bold text-green-900 mb-4">Impressionen unserer Schule</h1>
      <p className="text-gray-600 mb-10">Hier erhalten Sie einen Einblick in unsere Schule und das Außengelände.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((img, i) => (
          <div key={i} className="aspect-video relative rounded-xl overflow-hidden shadow-lg">
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover hover:scale-105 transition-transform duration-300"
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
            />
          </div>
        ))}
      </div>
      <div className="mt-8 text-center">
        <a href="/bildergalerie-50-jahre" className="inline-block px-6 py-3 rounded-full text-white font-medium" style={{background: 'var(--color-primary)'}}>
          Zur Galerie: 50 Jahre Jubiläum &rarr;
        </a>
      </div>
    </div>
  )
}