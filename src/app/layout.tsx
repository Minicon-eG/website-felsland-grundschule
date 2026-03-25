import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Felsland Grundschule Bruchweiler-Bärenbach',
  description: 'Offizielle Website der Felsland Grundschule Bruchweiler-Bärenbach',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de">
      <head>
        {/* minicon:felsland-grundschule */}
      </head>
      <body>
        <header style={{background: 'var(--color-primary)'}}>
          <nav className="container mx-auto px-4 py-4 flex items-center justify-between flex-wrap gap-4">
            <a href="/" className="text-white font-bold text-xl leading-tight">
              <span className="block text-sm font-normal opacity-90">Felsland</span>
              Grundschule
            </a>
            <div className="flex flex-wrap gap-1">
              <a href="/" className="nav-link">Start</a>
              <a href="/unsere-schule" className="nav-link">Unsere Schule</a>
              <a href="/bildergalerie" className="nav-link">Galerie</a>
              <a href="/bildergalerie-50-jahre" className="nav-link">50 Jahre</a>
              <a href="/elternbriefe" className="nav-link">Elternbriefe</a>
            </div>
          </nav>
        </header>
        <main className="min-h-screen pb-16">
          {children}
        </main>
        <footer className="bg-gray-800 text-white py-8">
          <div className="container mx-auto px-4 text-center">
            <p className="font-bold text-lg mb-2">Felsland Grundschule Bruchweiler-Bärenbach</p>
            <p className="text-gray-300">Gartenstraße 79 &bull; 76891 Bruchweiler-Bärenbach</p>
            <p className="text-gray-300 mt-1">
              <a href="tel:+4963949209560" className="hover:text-white">+49 6394 92 09 56-0</a>
              {' | '}
              <a href="mailto:info@felsland-grundschule.de" className="hover:text-white">info@felsland-grundschule.de</a>
            </p>
            <div className="mt-4 text-gray-400 text-sm flex justify-center gap-4">
              <a href="/impressum" className="hover:text-white">Impressum</a>
              <a href="/datenschutz" className="hover:text-white">Datenschutz</a>
            </div>
            <p className="text-gray-500 text-xs mt-3">&copy; 2026 Felsland Grundschule Bruchweiler-Bärenbach</p>
          </div>
        </footer>
        {/* DemoBanner */}
        <div style={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          background: '#1a1a2e',
          color: '#fff',
          textAlign: 'center',
          padding: '8px 16px',
          fontSize: '13px',
          zIndex: 9999,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '8px'
        }}>
          <span>&#128202; Demo-Website von Minicon</span>
          <a
            href="https://www.minicon.eu/webseiten/?ref=felsland-grundschule.minicon.eu"
            target="_blank"
            rel="noopener noreferrer"
            style={{color: '#60a5fa', textDecoration: 'underline'}}
          >
            Jetzt professionelle Website anfragen
          </a>
        </div>
      </body>
    </html>
  )
}