import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Datenschutz - Felsland Grundschule',
}

export default function DatenschutzPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-3xl">
      <h1 className="text-3xl font-bold text-green-900 mb-8">Datenschutzerklärung</h1>

      <h2 className="text-xl font-bold mt-6 mb-3 text-green-800">1. Datenschutz auf einen Blick</h2>
      <h3 className="font-bold mt-4 mb-2">Allgemeine Hinweise</h3>
      <p className="text-gray-600 text-sm mb-4">
        Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
      </p>

      <h3 className="font-bold mt-4 mb-2">Datenerfassung auf dieser Website</h3>
      <p className="text-gray-600 text-sm mb-4">
        Diese Website erhebt keine personenbezogenen Daten über Sie. Es werden keine Cookies gesetzt, kein Tracking durchgeführt und keine Daten an Dritte weitergegeben.
      </p>

      <h2 className="text-xl font-bold mt-6 mb-3 text-green-800">2. Verantwortliche Stelle</h2>
      <p className="text-gray-600 text-sm mb-4">
        Verantwortlich für die Datenverarbeitung auf dieser Website ist:<br />
        <strong>Felsland-Grundschule Bruchweiler-Bärenbach</strong><br />
        Gartenstraße 79<br />
        76891 Bruchweiler-Bärenbach<br />
        Telefon: (06394) 92 09 56 - 0<br />
        E-Mail: <a href="mailto:info@felsland-grundschule.de" className="text-blue-600">info@felsland-grundschule.de</a>
      </p>

      <h2 className="text-xl font-bold mt-6 mb-3 text-green-800">3. Hosting</h2>
      <p className="text-gray-600 text-sm mb-4">
        Diese Website wird auf Cloudflare Pages gehostet. Beim Aufruf der Website werden von Cloudflare automatisch Serverlogs erfasst (IP-Adresse, Zeitpunkt, aufgerufene Seite). Diese Daten werden zur Gewährleistung des Betriebs benötigt und nach kurzer Zeit gelöscht.
      </p>

      <h2 className="text-xl font-bold mt-6 mb-3 text-green-800">4. Ihre Rechte</h2>
      <p className="text-gray-600 text-sm mb-4">
        Sie haben das Recht auf Auskunft, Berichtigung, Löschung und Einschränkung der Verarbeitung Ihrer personenbezogenen Daten sowie auf Datenübertragbarkeit. Bei Fragen wenden Sie sich bitte an die oben angegebene verantwortliche Stelle.
      </p>

      <h2 className="text-xl font-bold mt-6 mb-3 text-green-800">5. Beschwerderecht</h2>
      <p className="text-gray-600 text-sm">
        Sie haben das Recht, sich bei einer Datenschutz-Aufsichtsbehörde über die Verarbeitung Ihrer personenbezogenen Daten durch uns zu beschweren. Zuständig ist der Landesbeauftragte für den Datenschutz Rheinland-Pfalz.
      </p>
    </div>
  )
}