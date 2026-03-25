import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Datenschutz &ndash; Felsland Grundschule Bruchweiler-B&auml;renbach',
}

export default function DatenschutzPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-3xl prose prose-green">
      <h1 className="text-3xl font-bold text-green-900 mb-8">Datenschutzerkl&auml;rung</h1>

      <section className="mb-8">
        <h2 className="text-xl font-bold text-green-800 mb-3">1. Datenschutz auf einen Blick</h2>
        <h3 className="font-bold mb-2">Allgemeine Hinweise</h3>
        <p className="text-gray-700 mb-4">
          Die folgenden Hinweise geben einen einfachen &Uuml;berblick dar&uuml;ber, was mit Ihren personenbezogenen
          Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie
          pers&ouml;nlich identifiziert werden k&ouml;nnen.
        </p>
        <h3 className="font-bold mb-2">Datenerfassung auf dieser Website</h3>
        <p className="text-gray-700 mb-2">
          <strong>Wer ist verantwortlich f&uuml;r die Datenerfassung auf dieser Website?</strong>
        </p>
        <p className="text-gray-700 mb-4">
          Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten
          k&ouml;nnen Sie dem Impressum dieser Website entnehmen.
        </p>
        <p className="text-gray-700 mb-2">
          <strong>Wie erfassen wir Ihre Daten?</strong>
        </p>
        <p className="text-gray-700 mb-4">
          Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z.&nbsp;B.
          um Daten handeln, die Sie in ein Kontaktformular eingeben.
        </p>
        <p className="text-gray-700 mb-2">
          <strong>Wof&uuml;r nutzen wir Ihre Daten?</strong>
        </p>
        <p className="text-gray-700 mb-4">
          Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gew&auml;hrleisten.
          Andere Daten k&ouml;nnen genutzt werden, um Ihr Nutzerverhalten zu analysieren.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold text-green-800 mb-3">2. Hosting</h2>
        <p className="text-gray-700">
          Diese Demo-Website wird &uuml;ber Cloudflare Pages gehostet. Betreiber: Cloudflare, Inc., 101 Townsend St.,
          San Francisco, California 94107, USA. Bei Aufruf der Website werden automatisch Verbindungsdaten
          (IP-Adresse, Zeitstempel, Seitenaufruf) an Cloudflare &uuml;bertragen.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold text-green-800 mb-3">3. Allgemeine Hinweise</h2>
        <h3 className="font-bold mb-2">Hinweis zur verantwortlichen Stelle</h3>
        <p className="text-gray-700 mb-4">
          Die verantwortliche Stelle f&uuml;r die Datenverarbeitung auf dieser Website ist:
        </p>
        <p className="text-gray-700 mb-4">
          Verbandsgemeinde Dahner Felsenland<br />
          vertreten durch: Verbandsb&uuml;rgermeister Michael Zwick<br />
          Schulstra&szlig;e 29, 66994 Dahn<br />
          Telefon: (0 63 91) 91 96 -00<br />
          E-Mail: <a href="mailto:info@dahner-felsenland.de" className="text-blue-600 hover:underline">info@dahner-felsenland.de</a>
        </p>
        <h3 className="font-bold mb-2">Speicherdauer</h3>
        <p className="text-gray-700 mb-4">
          Soweit innerhalb dieser Datenschutzerkl&auml;rung keine speziellere Speicherdauer genannt wurde,
          verbleiben Ihre personenbezogenen Daten bei uns, bis der Zweck f&uuml;r die Datenverarbeitung entf&auml;llt.
        </p>
        <h3 className="font-bold mb-2">Recht auf Auskunft, L&ouml;schung und Berichtigung</h3>
        <p className="text-gray-700 mb-4">
          Sie haben jederzeit das Recht, unentgeltlich Auskunft &uuml;ber Herkunft, Empf&auml;nger und Zweck
          Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben au&szlig;erdem ein Recht,
          die Berichtigung oder L&ouml;schung dieser Daten zu verlangen. Hierzu sowie zu weiteren Fragen
          zum Thema Datenschutz k&ouml;nnen Sie sich jederzeit an uns wenden.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold text-green-800 mb-3">4. Datenerfassung auf dieser Website</h2>
        <h3 className="font-bold mb-2">Anfrage per E-Mail oder Telefon</h3>
        <p className="text-gray-700">
          Wenn Sie uns per E-Mail oder Telefon kontaktieren, wird Ihre Anfrage inklusive aller daraus
          hervorgehenden personenbezogenen Daten (Name, Anfrage) zum Zwecke der Bearbeitung Ihres Anliegens
          bei uns gespeichert und verarbeitet. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold text-green-800 mb-3">5. Externe Links</h2>
        <p className="text-gray-700">
          Diese Demo-Website enth&auml;lt Links zur Original-Website der Felsland Grundschule
          (felsland-grundschule.de). Beim Aufrufen dieser Links verlassen Sie unsere Website.
          F&uuml;r den Datenschutz auf externen Seiten sind deren Betreiber verantwortlich.
        </p>
      </section>

      <div className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded-lg text-sm text-gray-600">
        <p>
          <strong>Hinweis:</strong> Dies ist eine Demowebsite, erstellt von{' '}
          <a href="https://www.minicon.eu" className="text-green-700 hover:underline">minicon.eu</a>.
          Die offizielle Datenschutzerkl&auml;rung der Felsland Grundschule finden Sie unter{' '}
          <a href="https://www.felsland-grundschule.de/datenschutz" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
            www.felsland-grundschule.de/datenschutz
          </a>.
        </p>
      </div>
    </div>
  )
}
