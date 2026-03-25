import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Unsere Schule - Felsland Grundschule',
}

export default function UnschulePage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-5xl">
      <h1 className="text-4xl font-bold text-green-900 mb-8">Die Felsland-Grundschule Bruchweiler-Bärenbach</h1>
      <p className="text-gray-600 text-lg mb-10">
        Nachfolgend erhalten Sie einen Überblick über alle Personen, die sich um einen reibungslosen Schulbetrieb kümmern sowie unseren Elternbeirat.
      </p>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-green-800 border-b-2 border-green-200 pb-3 mb-6">Schulleitung &amp; Sekretariat</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-green-50 rounded-xl p-6">
            <p className="font-bold text-xl">Sebastian Nikolaus</p>
            <p className="text-green-700 font-medium">Schulleiter</p>
            <p className="mt-2 text-sm">
              <a href="mailto:sebastian.nikolaus@dahner-felsenland.de" className="text-blue-600 hover:underline break-all">
                sebastian.nikolaus@dahner-felsenland.de
              </a>
            </p>
          </div>
          <div className="bg-green-50 rounded-xl p-6">
            <p className="font-bold text-xl">Judith Hagenmüller</p>
            <p className="text-green-700 font-medium">Sekretärin</p>
            <p className="mt-2">
              <a href="tel:+4963949209560" className="text-green-700 hover:underline">(0 63 94) 92 09 56 0</a>
            </p>
            <p className="text-sm mt-1">
              <a href="mailto:judith.hagenmueller@dahner-felsenland.de" className="text-blue-600 hover:underline break-all">
                judith.hagenmueller@dahner-felsenland.de
              </a>
            </p>
            <p className="text-sm text-gray-500 mt-2">Sprechzeiten: Mi &amp; Do, 8&ndash;12 Uhr</p>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-green-800 border-b-2 border-green-200 pb-3 mb-6">Lehrkräfte</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {[
            {name: 'Elisa Mang', role: 'Klassenlehrerin 1a'},
            {name: 'Laura Dressel', role: 'Klassenlehrerin 1b'},
            {name: 'Luisa Glößgen', role: 'Klassenlehrerin'},
            {name: 'Alexandra Zitscher', role: 'Lehrerin'},
            {name: 'Alicia Brudermann-Orth', role: 'Lehrerin'},
            {name: 'Susanne Turnwald', role: 'Lehrerin'},
            {name: 'Thomas Heintz', role: 'Lehrer'},
            {name: 'Vincent Emser', role: 'Lehrer'},
            {name: 'Eva Wieser', role: 'Lehrerin'},
            {name: 'Sara Burkhart', role: 'Lehrerin'},
            {name: 'Emily Seibel', role: 'Lehrerin'},
          ].map((p, i) => (
            <div key={i} className="bg-white border border-gray-200 rounded-lg p-4">
              <p className="font-semibold">{p.name}</p>
              <p className="text-sm text-green-700">{p.role}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-green-800 border-b-2 border-green-200 pb-3 mb-6">Lehramtsanwärterinnen &amp; Lehramtsanwärter</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {['Julia Bachmann', 'Noah Ringhof', 'Ivan Horvat', 'Paula Hahn', 'Joanna Frankfurter', 'Sophie Keller'].map((name, i) => (
            <div key={i} className="bg-white border border-gray-200 rounded-lg p-4">
              <p className="font-semibold">{name}</p>
              <p className="text-sm text-blue-600">Lehramtsanwärter/in</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-green-800 border-b-2 border-green-200 pb-3 mb-6">Nachmittagsbetreuung</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {['Petra Schneider', 'Claudia Fuchsjäger', 'Sabrina Goßrau'].map((name, i) => (
            <div key={i} className="bg-white border border-gray-200 rounded-lg p-4">
              <p className="font-semibold">{name}</p>
              <p className="text-sm text-yellow-600">Nachmittagsbetreuung</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-green-800 border-b-2 border-green-200 pb-3 mb-6">Hausmeister &amp; Reinigung</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {['Martin Burkhart', 'Karin Schäfer', 'Fernanda Bassi', 'Nicole Breiner'].map((name, i) => (
            <div key={i} className="bg-white border border-gray-200 rounded-lg p-4">
              <p className="font-semibold">{name}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-green-800 border-b-2 border-green-200 pb-3 mb-6">Schulelternbeirat</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {['Daniel Rolland', 'Nicola Schwarzmüller', 'Damian Juretic', 'Karina Gimber', 'Melanie Trapp', 'Michael Schilling'].map((name, i) => (
            <div key={i} className="bg-white border border-gray-200 rounded-lg p-4">
              <p className="font-semibold">{name}</p>
              <p className="text-sm text-gray-500">Schulelternbeirat</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}