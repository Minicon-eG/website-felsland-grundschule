import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Bildergalerie 50 Jahre - Felsland Grundschule',
}

const images = [
  { src: '/images/52204066201_d36b241f94_c.jpg', alt: '50 Jahre Jubiläum - Bild 1' },
  { src: '/images/52204066966_1092014c59_c.jpg', alt: '50 Jahre Jubiläum - Bild 2' },
  { src: '/images/52204068241_12f79429cd_c.jpg', alt: '50 Jahre Jubiläum - Bild 3' },
]

export default function Galerie50Jahre() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-6xl">
      <h1 className="text-4xl font-bold text-green-900 mb-4">Bildergalerie 50 Jahre</h1>
      <p className="text-gray-600 mb-10">
        Hier erhalten Sie einen Einblick in unsere Veranstaltungen zum 50-jährigen Schuljubiläum im Juli 2022.
      </p>
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
    </div>
  )
}