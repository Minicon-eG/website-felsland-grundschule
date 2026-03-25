import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Elternbriefe - Felsland Grundschule',
}

export default function ElternbriefePage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-2xl text-center">
      <h1 className="text-4xl font-bold text-green-900 mb-6">Elternbriefe</h1>
      <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-8">
        <svg className="w-12 h-12 text-yellow-600 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
        <h2 className="text-xl font-bold text-yellow-800 mb-3">Geschützter Bereich</h2>
        <p className="text-gray-700">
          Dieser Bereich ist nur für Erziehungsberechtigte zugänglich.
        </p>
        <p className="text-gray-600 mt-3">
          Bitte wenden Sie sich an das Sekretariat für den Zugangscode:
        </p>
        <div className="mt-4 bg-white rounded-lg p-4 inline-block text-left">
          <p className="font-semibold">Judith Hagenmüller</p>
          <p className="text-sm text-gray-600">Sprechzeiten: Mi &amp; Do, 8&ndash;12 Uhr</p>
          <a href="tel:+4963949209560" className="block mt-1 text-green-700 font-medium hover:underline">
            (0 63 94) 92 09 56 0
          </a>
          <a href="mailto:judith.hagenmueller@dahner-felsenland.de" className="block text-blue-600 hover:underline text-sm break-all">
            judith.hagenmueller@dahner-felsenland.de
          </a>
        </div>
      </div>
    </div>
  )
}