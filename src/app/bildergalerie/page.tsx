import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Bildergalerie &ndash; Felsland Grundschule Bruchweiler-B&auml;renbach',
}

const images2022 = [
  { file: 'DSC03445.jpg', alt: 'Schulkinder' },
  { file: 'DSC03446.jpg', alt: 'Schulkinder' },
  { file: 'DSC03448.jpg', alt: 'Schulkinder' },
  { file: 'DSC03452.jpg', alt: 'Schulkinder' },
  { file: 'DSC03489.jpg', alt: 'Schulimpression' },
  { file: 'DSC03490.jpg', alt: 'Schulimpression' },
  { file: 'DSC03491.jpg', alt: 'Schulimpression' },
  { file: 'DSC03495.jpg', alt: 'Schulimpression' },
  { file: 'DSC03497.jpg', alt: 'Schulimpression' },
  { file: 'DSC03498.jpg', alt: 'Schulimpression' },
  { file: 'DSC03500.jpg', alt: 'Schulimpression' },
  { file: 'DSC03503.jpg', alt: 'Schulimpression' },
  { file: 'DSC03504.jpg', alt: 'Schulimpression' },
  { file: 'DSC03506.jpg', alt: 'Schulimpression' },
]

const images2022July = [
  '52204066201_d36b241f94_c.jpg',
  '52204066966_1092014c59_c.jpg',
  '52204067146_9f93bcea32_c.jpg',
  '52204067461_9df90d6d9a_c.jpg',
  '52204068241_12f79429cd_c.jpg',
  '52204070746_ab1f84c4fd_c.jpg',
]

export default function BildergaleriePage() {
  return (
    <>
      <section style={{background: 'linear-gradient(135deg, #1b5e20 0%, #2e7d32 100%)'}}>
        <div className="container mx-auto px-4 py-12 text-center text-white">
          <h1 className="text-3xl md:text-4xl font-bold mb-3">Bildergalerie</h1>
          <p className="text-green-200">Impressionen unserer Schule</p>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-xl font-bold text-green-800 mb-6">Schulimpressionen</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {images2022.map((img, i) => (
              <a
                key={i}
                href={`https://www.felsland-grundschule.de/wp-content/uploads/2022/06/${img.file}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group overflow-hidden rounded-xl"
              >
                <img
                  src={`https://www.felsland-grundschule.de/wp-content/uploads/2022/06/${img.file}`}
                  alt={img.alt}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </a>
            ))}
          </div>

          <h2 className="text-xl font-bold text-green-800 mt-12 mb-6">Spendenlauf &amp; Aktionen</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {images2022July.map((file, i) => (
              <a
                key={i}
                href={`https://www.felsland-grundschule.de/wp-content/uploads/2022/07/${file}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group overflow-hidden rounded-xl"
              >
                <img
                  src={`https://www.felsland-grundschule.de/wp-content/uploads/2022/07/${file}`}
                  alt={`Spendenlauf ${i+1}`}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </a>
            ))}
          </div>

          <div className="mt-10 text-center">
            <a
              href="/bildergalerie-50-jahre"
              className="btn-primary"
            >
              Bildergalerie 50 Jahre &rarr;
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
