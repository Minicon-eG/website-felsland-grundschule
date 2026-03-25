import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Impressum &ndash; Felsland Grundschule Bruchweiler-B&auml;renbach',
}

export default function ImpressumPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-3xl">
      <h1 className="text-3xl font-bold text-green-900 mb-8">Impressum</h1>

      <section className="mb-6">
        <h2 className="text-lg font-bold text-green-800 mb-2">Anschrift</h2>
        <p>Felsland-Grundschule</p>
        <p>Gartenstra&szlig;e 79</p>
        <p>76891 Bruchweiler-B&auml;renbach</p>
      </section>

      <section className="mb-6">
        <h2 className="text-lg font-bold text-green-800 mb-2">Schulleitung</h2>
        <p>Sebastian Nikolaus</p>
        <p>Gartenstr. 79</p>
        <p>76891 Bruchweiler-B&auml;renbach</p>
        <p>Telefon: (06394) 92 09 56 &ndash; 0</p>
        <p>Telefax: (06394) 92 09 56 &ndash; 20</p>
        <p>
          E-Mail:{' '}
          <a href="mailto:sebastian.nikolaus@dahner-felsenland.de" className="text-blue-600 hover:underline">
            sebastian.nikolaus@dahner-felsenland.de
          </a>
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-lg font-bold text-green-800 mb-2">Schultr&auml;ger</h2>
        <p>Verbandsgemeinde Dahner Felsenland</p>
        <p>vertreten durch: Verbandsb&uuml;rgermeister Michael Zwick</p>
        <p>Schulstra&szlig;e 29</p>
        <p>66994 Dahn</p>
        <p>Telefon: (0 63 91) 91 96 -00</p>
        <p>Telefax: (0 63 91) 91 96 &ndash; 199</p>
        <p>
          E-Mail:{' '}
          <a href="mailto:info@dahner-felsenland.de" className="text-blue-600 hover:underline">
            info@dahner-felsenland.de
          </a>
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-lg font-bold text-green-800 mb-2">Aufsichtsbeh&ouml;rde</h2>
        <p>ADD Schulaufsicht Au&szlig;enstelle Neustadt</p>
        <p>Friedrich-Ebert-Str. 14</p>
        <p>67433 Neustadt a.d.W.</p>
        <p>oder</p>
        <p>Postfach 100 262, 67402 Neustadt a.d.W.</p>
      </section>

      <section className="mb-6">
        <h2 className="text-lg font-bold text-green-800 mb-2">Betreiber / Dienstanbieter</h2>
        <p>
          Betreiber / Dienstanbieter dieser Internetpr&auml;senz nach &sect; 5 TMG, &sect; 55 RStV:
        </p>
        <p>Verbandsgemeinde Dahner Felsenland</p>
        <p>vertreten durch: Verbandsbürgermeister Michael Zwick</p>
        <p>Schulstra&szlig;e 29</p>
        <p>66994 Dahn</p>
        <p>Telefon: (0 63 91) 91 96 -00</p>
        <p>Telefax: (0 63 91) 91 96 &ndash; 199</p>
        <p>
          Email:{' '}
          <a href="mailto:info@dahner-felsenland.de" className="text-blue-600 hover:underline">
            info@dahner-felsenland.de
          </a>
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-lg font-bold text-green-800 mb-2">Redaktionell verantwortlich</h2>
        <p>gem&auml;&szlig; &sect; 55 Abs. 2 RStV: Schulleitung</p>
      </section>

      <section className="mb-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg text-sm">
        <p>
          Einer Nutzung der in diesem Impressum ver&ouml;ffentlichten Kontaktdaten durch Dritte zu Werbezwecken
          wird hiermit ausdr&uuml;cklich widersprochen.
        </p>
      </section>

      <div className="mt-8 pt-4 border-t text-sm text-gray-500">
        <p>
          Dies ist eine Demowebsite erstellt von{' '}
          <a href="https://www.minicon.eu" className="text-green-700 hover:underline">minicon.eu</a>.
          Die offiziellen Daten wurden von der Originalwebsite &uuml;bernommen.
        </p>
      </div>
    </div>
  )
}
