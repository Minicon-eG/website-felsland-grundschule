import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Impressum - Felsland Grundschule',
}

export default function ImpressumPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-3xl">
      <h1 className="text-3xl font-bold text-green-900 mb-8">Impressum</h1>

      <section className="mb-8">
        <h2 className="text-xl font-bold mb-3 text-green-800">Anschrift</h2>
        <p>Felsland-Grundschule</p>
        <p>Gartenstraße 79</p>
        <p>76891 Bruchweiler-Bärenbach</p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold mb-3 text-green-800">Schulleitung</h2>
        <p>Sebastian Nikolaus</p>
        <p>Gartenstr. 79</p>
        <p>76891 Bruchweiler-Bärenbach</p>
        <p className="mt-2">Telefon: (06394) 92 09 56 - 0</p>
        <p>Telefax: (06394) 92 09 56 - 20</p>
        <p>
          E-Mail:{' '}
          <a href="mailto:sebastian.nikolaus@dahner-felsenland.de" className="text-blue-600 hover:underline">
            sebastian.nikolaus@dahner-felsenland.de
          </a>
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold mb-3 text-green-800">Schulträger</h2>
        <p>Verbandsgemeinde Dahner Felsenland</p>
        <p>vertreten durch: Verbandsbürgermeister Michael Zwick</p>
        <p>Schulstraße 29</p>
        <p>66994 Dahn</p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold mb-3 text-green-800">ADD &ndash; Schulaufsicht Außenstelle Neustadt</h2>
        <p>Aufsichts- und Dienstleistungsdirektion Rheinland-Pfalz</p>
        <p>Außenstelle Neustadt</p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold mb-3 text-green-800">Haftungsausschluss</h2>
        <p className="text-gray-600 text-sm">
          Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für die Inhalte externer Links. Für den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber verantwortlich.
        </p>
      </section>
    </div>
  )
}