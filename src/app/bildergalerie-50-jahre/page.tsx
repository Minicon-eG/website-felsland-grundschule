import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Bildergalerie 50 Jahre &ndash; Felsland Grundschule Bruchweiler-B&auml;renbach',
}

const images50 = [
  '52204066201_d36b241f94_c.jpg',
  '52204066966_1092014c59_c.jpg',
  '52204067146_9f93bcea32_c.jpg',
  '52204067461_9df90d6d9a_c.jpg',
  '52204068241_12f79429cd_c.jpg',
  '52204070746_ab1f84c4fd_c.jpg',
]

export default function Bildergalerie50JahrePage() {
  return (
    <>
      <section style={{background: 'linear-gradient(135deg, #1b5e20 0%, #2e7d32 100%)'}}>
        <div className="container mx-auto px-4 py-12 text-center text-white">
          <h1 className="text-3xl md:text-4xl font-bold mb-3">Bildergalerie 50 Jahre</h1>
          <p className="text-green-200">Jubil&auml;umsfeier unserer Schule</p>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {images50.map((file, i) => (
              <a
                key={i}
                href={`https://www.felsland-grundschule.de/wp-content/uploads/2022/07/${file}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group overflow-hidden rounded-xl"
              >
                <img
                  src={`https://www.felsland-grundschule.de/wp-content/uploads/2022/07/${file}`}
                  alt={`50 Jahre Jubil&auml;um Bild ${i + 1}`}
                  className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
