import type { Metadata } from 'next'
import './globals.css'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Felsland Grundschule Bruchweiler-B&auml;renbach',
  description: 'Die Felsland-Grundschule Bruchweiler-B&auml;renbach betreut Sch&uuml;lerinnen und Sch&uuml;ler aus Bruchweiler-B&auml;renbach, Bundenthal, Bobenthal, Erlenbach, Nothweiler, Niederschlettenbach und Rumbach.',
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
        <nav style={{background: 'var(--color-primary)'}} className="sticky top-0 z-50 shadow-lg">
          <div className="container mx-auto px-4 py-3 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3">
              <img
                src="https://www.felsland-grundschule.de/wp-content/uploads/2022/06/Grundschule-Dahn-Logo-e1655813930773-1024x321.png"
                alt="Felsland Grundschule Logo"
                className="h-10 w-auto"
                style={{filter: 'brightness(0) invert(1)'}}
              />
            </Link>
            <div className="hidden md:flex gap-1">
              <Link href="/" className="nav-link text-white">Home</Link>
              <Link href="/unsere-schule" className="nav-link text-white">Unsere Schule</Link>
              <Link href="/bildergalerie" className="nav-link text-white">Bildergalerie</Link>
              <Link href="/elternbriefe" className="nav-link text-white">Elternbriefe</Link>
            </div>
            {/* Mobile nav placeholder */}
            <div className="md:hidden">
              <details className="relative">
                <summary className="text-white cursor-pointer list-none p-2">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </summary>
                <div className="absolute right-0 mt-2 w-48 rounded-lg shadow-xl overflow-hidden" style={{background: 'var(--color-primary-dark)'}}>
                  <Link href="/" className="block px-4 py-3 text-white hover:bg-green-900">Home</Link>
                  <Link href="/unsere-schule" className="block px-4 py-3 text-white hover:bg-green-900">Unsere Schule</Link>
                  <Link href="/bildergalerie" className="block px-4 py-3 text-white hover:bg-green-900">Bildergalerie</Link>
                  <Link href="/elternbriefe" className="block px-4 py-3 text-white hover:bg-green-900">Elternbriefe</Link>
                </div>
              </details>
            </div>
          </div>
        </nav>

        <main style={{paddingBottom: '50px'}}>
          {children}
        </main>

        <footer style={{background: 'var(--color-primary)', color: '#fff'}} className="py-10 mt-12">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h3 className="font-bold text-lg mb-3 text-yellow-300">Felsland Grundschule</h3>
                <p>Gartenstra&szlig;e 79</p>
                <p>76891 Bruchweiler-B&auml;renbach</p>
                <p className="mt-2">
                  <a href="tel:+4963949209560" className="hover:text-yellow-300">Tel: (06394) 92 09 56 &ndash; 0</a>
                </p>
                <p>Fax: (06394) 92 09 56 &ndash; 20</p>
                <p className="mt-1">
                  <a href="mailto:sebastian.nikolaus@dahner-felsenland.de" className="hover:text-yellow-300 text-sm">
                    sebastian.nikolaus@dahner-felsenland.de
                  </a>
                </p>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-3 text-yellow-300">Navigation</h3>
                <ul className="space-y-2">
                  <li><Link href="/" className="hover:text-yellow-300">Home</Link></li>
                  <li><Link href="/unsere-schule" className="hover:text-yellow-300">Unsere Schule</Link></li>
                  <li><Link href="/bildergalerie" className="hover:text-yellow-300">Bildergalerie</Link></li>
                  <li><Link href="/elternbriefe" className="hover:text-yellow-300">Elternbriefe</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-3 text-yellow-300">Rechtliches</h3>
                <ul className="space-y-2">
                  <li><Link href="/impressum" className="hover:text-yellow-300">Impressum</Link></li>
                  <li><Link href="/datenschutz" className="hover:text-yellow-300">Datenschutz</Link></li>
                </ul>
                <p className="mt-4 text-green-200 text-sm">Schultr&auml;ger: Verbandsgemeinde Dahner Felsenland</p>
              </div>
            </div>
            <div className="border-t border-green-700 mt-8 pt-6 text-center text-green-300 text-sm">
              &copy; 2026 Felsland Grundschule Bruchweiler-B&auml;renbach
            </div>
          </div>
        </footer>

        {/* Demo Banner */}
        <div className="demo-banner">
          Diese Website ist eine Demo von{' '}
          <a href="https://www.minicon.eu/webseiten/?ref=felsland-grundschule.minicon.eu" target="_blank" rel="noopener noreferrer">
            minicon.eu/webseiten
          </a>
        </div>
      </body>
    </html>
  )
}
