import Image from 'next/image'

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section style={{background: 'linear-gradient(135deg, #1b5e20 0%, #2e7d32 50%, #388e3c 100%)'}}>
        <div className="container mx-auto px-4 py-16 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Felsland Grundschule<br />
            <span className="text-yellow-300">Bruchweiler-Bärenbach</span>
          </h1>
          <p className="text-xl text-green-100 max-w-2xl mx-auto mt-4">
            Bruchweiler-Bärenbach &bull; Bundenthal &bull; Bobenthal &bull; Erlenbach &bull; Nothweiler &bull; Niederschlettenbach &bull; Rumbach
          </p>
        </div>
      </section>

      {/* Kontakt Schnellinfo */}
      <section className="bg-green-50 py-8">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-lg font-bold text-green-800 mb-3">Sekretariat</h2>
              <p className="font-medium">Judith Hagenmüller</p>
              <p className="mt-2">
                <a href="tel:+4963949209560" className="text-green-700 hover:underline font-medium">
                  (0 63 94) 92 09 56 0
                </a>
              </p>
              <p>Fax: (0 63 94) 92 09 56 20</p>
              <p className="mt-1 text-sm">
                <a href="mailto:judith.hagenmueller@dahner-felsenland.de" className="text-blue-600 hover:underline text-xs break-all">
                  judith.hagenmueller@dahner-felsenland.de
                </a>
              </p>
              <p className="mt-2 text-sm text-gray-600">
                <strong>Sprechzeiten:</strong><br />
                Mittwoch: 8 &ndash; 12 Uhr<br />
                Donnerstag: 8 &ndash; 12 Uhr
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-lg font-bold text-green-800 mb-3">Adresse</h2>
              <p>Felsland Grundschule</p>
              <p>Gartenstraße 79</p>
              <p>76891 Bruchweiler-Bärenbach</p>
              <p className="mt-3">
                <a href="tel:+4963949209560" className="text-green-700 hover:underline">+49 6394 92 09 56-0</a>
              </p>
              <p>
                <a href="mailto:info@felsland-grundschule.de" className="text-blue-600 hover:underline text-sm">
                  info@felsland-grundschule.de
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Aktuelles */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="section-title">Aktuelles</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {[
              {
                title: 'Wanderung der Klasse 3a',
                text: 'Die Klasse 3a hat die Kläranlage „Mittleres Wieslautertal" besucht und dabei viel über die Wasseraufbereitung gelernt.',
              },
              {
                title: 'Felsland-Grundschule erläuft 9.000 Euro',
                text: 'Beim großen Spendenlauf haben unsere Schülerinnen und Schüler gemeinsam 9.000 Euro erlaufen. Ein toller Erfolg!',
              },
              {
                title: 'Projektwoche mit Lesetheater',
                text: 'In einer kreativen Projektwoche haben die Klassen ein spannendes Lesetheater erarbeitet und aufgeführt.',
              },
              {
                title: 'Spendenlauf 2023',
                text: 'Auch 2023 haben unsere Kinder beim Spendenlauf begeistert mitgemacht. Vielen Dank an alle Unterstützerinnen und Unterstützer!',
              },
            ].map((item, i) => (
              <div key={i} className="card p-6">
                <div className="w-2 h-2 rounded-full bg-green-500 mb-3" />
                <h3 className="font-bold text-lg text-green-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bilder-Vorschau */}
      <section className="bg-green-50 py-12">
        <div className="container mx-auto px-4">
          <h2 className="section-title">Impressionen</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {[
              'DSC03500.jpg',
              'DSC03495.jpg',
              'DSC03445.jpg',
              'DSC03448.jpg',
            ].map((img, i) => (
              <div key={i} className="aspect-square relative rounded-xl overflow-hidden shadow-md">
                <Image
                  src={`/images/${img}`}
                  alt={`Schulimpression ${i + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
            ))}
          </div>
          <div className="text-center mt-6">
            <a href="/bildergalerie" className="inline-block px-6 py-3 rounded-full text-white font-medium" style={{background: 'var(--color-primary)'}}>
              Zur Bildergalerie &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Angebote */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="section-title">Unsere Angebote</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="card p-6 text-center">
              <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="font-bold text-lg mb-2">Unterricht</h3>
              <p className="text-gray-600 text-sm">Qualitativ hochwertiger Grundschulunterricht für alle Klassenstufen</p>
            </div>
            <div className="card p-6 text-center">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-lg mb-2">Nachmittagsbetreuung</h3>
              <p className="text-gray-600 text-sm">Zusätzliche Betreuung und Förderung nach dem Unterricht</p>
            </div>
            <div className="card p-6 text-center">
              <div className="w-12 h-12 rounded-full bg-yellow-100 flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-yellow-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
              </div>
              <h3 className="font-bold text-lg mb-2">Projekte &amp; Aktionen</h3>
              <p className="text-gray-600 text-sm">Spannende Projekte, Ausflüge und besondere Schulveranstaltungen</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}