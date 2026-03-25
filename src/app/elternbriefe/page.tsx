import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Elternbriefe &ndash; Felsland Grundschule Bruchweiler-B&auml;renbach',
}

export default function ElternbriefePage() {
  return (
    <>
      <section style={{background: 'linear-gradient(135deg, #1b5e20 0%, #2e7d32 100%)'}}>
        <div className="container mx-auto px-4 py-12 text-center text-white">
          <h1 className="text-3xl md:text-4xl font-bold mb-3">Elternbriefe</h1>
          <p className="text-green-200">Aktuelle Informationen f&uuml;r Eltern</p>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 text-center">
            <div className="text-5xl mb-4">&#128233;</div>
            <h2 className="text-xl font-bold text-green-800 mb-4">Elternbriefe der Felsland Grundschule</h2>
            <p className="text-gray-600 mb-6">
              Die aktuellen Elternbriefe k&ouml;nnen Sie direkt &uuml;ber die Originalseite der Schule abrufen.
              Bitte besuchen Sie f&uuml;r die aktuellsten Informationen die offizielle Schulwebsite.
            </p>
            <a
              href="https://www.felsland-grundschule.de/elternbriefe/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Elternbriefe auf felsland-grundschule.de &rarr;
            </a>
          </div>

          <div className="mt-8 bg-green-50 rounded-2xl p-6">
            <h3 className="font-bold text-green-800 mb-3">Kontakt bei Fragen</h3>
            <p className="text-gray-700 mb-2">
              Bei Fragen zu Elternbriefen wenden Sie sich bitte direkt ans Sekretariat:
            </p>
            <p><strong>Judith Hagenm&uuml;ller</strong></p>
            <p>
              <a href="tel:+4963949209560" className="text-green-700 hover:underline">
                (06394) 92 09 56 &ndash; 0
              </a>
            </p>
            <p>
              <a href="mailto:judith.hagenmueller@dahner-felsenland.de" className="text-blue-600 hover:underline text-sm">
                judith.hagenmueller@dahner-felsenland.de
              </a>
            </p>
            <div className="mt-3 text-sm text-gray-500">
              <p>Sprechzeiten: Mittwoch und Donnerstag, 8 &ndash; 12 Uhr</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
