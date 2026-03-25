export default function Home() {
  return (
    <>
      {/* Hero */}
      <section style={{background: 'linear-gradient(135deg, #1b5e20 0%, #2e7d32 60%, #388e3c 100%)'}}>
        <div className="container mx-auto px-4 py-20 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Felsland Grundschule
          </h1>
          <p className="text-xl text-green-200 mb-2">Bruchweiler-B&auml;renbach</p>
          <p className="text-sm text-green-300 max-w-2xl mx-auto">
            Bruchweiler-B&auml;renbach &bull; Bundenthal &bull; Bobenthal &bull; Erlenbach &bull; Nothweiler &bull; Niederschlettenbach &bull; Rumbach
          </p>
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <a href="#kontakt" className="btn-primary">Kontakt aufnehmen</a>
            <a href="/unsere-schule" className="inline-block px-6 py-3 rounded-lg font-semibold border-2 border-white text-white hover:bg-white hover:text-green-900 transition-all">
              Unser Team
            </a>
          </div>
        </div>
      </section>

      {/* Kontakt Schnellinfo */}
      <section id="kontakt" className="bg-green-50 py-10">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-green-100">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-2xl">&#128222;</span>
                <h2 className="text-lg font-bold text-green-800">Sekretariat</h2>
              </div>
              <p className="font-semibold">Judith Hagenm&uuml;ller</p>
              <p className="mt-2">
                <a href="tel:+4963949209560" className="text-green-700 hover:underline font-medium">
                  (06394) 92 09 56 &ndash; 0
                </a>
              </p>
              <p className="text-sm text-gray-500">Fax: (06394) 92 09 56 &ndash; 20</p>
              <p className="mt-1">
                <a href="mailto:judith.hagenmueller@dahner-felsenland.de" className="text-blue-600 hover:underline text-xs break-all">
                  judith.hagenmueller@dahner-felsenland.de
                </a>
              </p>
              <div className="mt-3 p-3 bg-green-50 rounded-lg text-sm">
                <p className="font-medium text-green-800">Sprechzeiten:</p>
                <p>Mittwoch: 8 &ndash; 12 Uhr</p>
                <p>Donnerstag: 8 &ndash; 12 Uhr</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-green-100">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-2xl">&#128205;</span>
                <h2 className="text-lg font-bold text-green-800">Adresse</h2>
              </div>
              <p className="font-semibold">Felsland Grundschule</p>
              <p>Gartenstra&szlig;e 79</p>
              <p>76891 Bruchweiler-B&auml;renbach</p>
              <div className="mt-3">
                <p className="text-sm font-medium text-green-800">Schulleitung:</p>
                <p className="text-sm">Sebastian Nikolaus</p>
                <p className="mt-1">
                  <a href="mailto:sebastian.nikolaus@dahner-felsenland.de" className="text-blue-600 hover:underline text-xs break-all">
                    sebastian.nikolaus@dahner-felsenland.de
                  </a>
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-green-100">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-2xl">&#128197;</span>
                <h2 className="text-lg font-bold text-green-800">Ferienplan</h2>
              </div>
              <p className="text-sm text-gray-600 mb-4">
                Hier finden Sie die aktuellen Ferienpl&auml;ne der Grundschule.
              </p>
              <a
                href="http://www.felsland-grundschule.de/wp-content/uploads/2024/05/Ferienplan-2024-2025-1.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-full text-center py-2 px-4 rounded-lg text-sm font-medium text-white"
                style={{background: 'var(--color-primary)'}}
              >
                Ferienplan 2024/2025 (PDF)
              </a>
              <a
                href="https://www.felsland-grundschule.de/wp-content/uploads/2022/06/Aufnahmeantrag.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-full text-center py-2 px-4 rounded-lg text-sm font-medium mt-2"
                style={{background: '#f1f8e9', color: 'var(--color-primary)', border: '1px solid var(--color-primary)'}}
              >
                Aufnahmeantrag (PDF)
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Aktuelles */}
      <section className="py-14">
        <div className="container mx-auto px-4">
          <h2 className="section-title">Aktuelles aus unserer Schule</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <img
                src="https://www.felsland-grundschule.de/wp-content/uploads/2022/06/DSC03445.jpg"
                alt="Wanderung der Klasse 3a"
                className="w-full h-48 object-cover"
                loading="lazy"
              />
              <div className="p-5">
                <h3 className="font-bold text-green-900 text-lg mb-2">Wanderung der Klasse 3a</h3>
                <p className="text-gray-600 text-sm">
                  Die Klasse 3a hat die Kl&auml;ranlage &bdquo;Mittleres Wieslautertal&ldquo; besucht und dabei viel &uuml;ber die Wasseraufbereitung in unserer Region gelernt.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <img
                src="https://www.felsland-grundschule.de/wp-content/uploads/2022/07/52204066201_d36b241f94_c.jpg"
                alt="Felsland-Grundschule Bruchweiler erlaeuft 9000 Euro"
                className="w-full h-48 object-cover"
                loading="lazy"
              />
              <div className="p-5">
                <h3 className="font-bold text-green-900 text-lg mb-2">Felsland-Grundschule erl&auml;uft 9.000 &euro;</h3>
                <p className="text-gray-600 text-sm">
                  Beim gro&szlig;en Spendenlauf haben unsere Sch&uuml;lerinnen und Sch&uuml;ler gemeinsam 9.000 Euro erlaufen. Ein toller Erfolg f&uuml;r die gesamte Schulgemeinschaft!
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <img
                src="https://www.felsland-grundschule.de/wp-content/uploads/2022/06/DSC03448.jpg"
                alt="Projektwoche mit Lesetheater"
                className="w-full h-48 object-cover"
                loading="lazy"
              />
              <div className="p-5">
                <h3 className="font-bold text-green-900 text-lg mb-2">Projektwoche mit Lesetheater</h3>
                <p className="text-gray-600 text-sm">
                  In einer kreativen Projektwoche haben die Klassen ein spannendes Lesetheater erarbeitet und erfolgreich aufgef&uuml;hrt.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Unsere Angebote */}
      <section className="py-14" style={{background: 'var(--color-bg)'}}>
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="section-title">Unsere Angebote</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="space-y-4">
                {[
                  { icon: '&#127979;', title: 'Qualit&auml;tsvoller Unterricht', text: 'Engagierte Lehrkr&auml;fte f&ouml;rdern jedes Kind individuell &ndash; von Klasse 1 bis 4.' },
                  { icon: '&#127939;', title: 'Nachmittagsbetreuung', text: 'F&uuml;r berufst&auml;tige Eltern bieten wir eine zuverl&auml;ssige Nachmittagsbetreuung an.' },
                  { icon: '&#127775;', title: 'Spannende Projekte', text: 'Regelm&auml;&szlig;ige Aktionen, Projekte und Ausfl&uuml;ge bereichern den Schulalltag.' },
                  { icon: '&#128101;', title: 'Engagierter Elternbeirat', text: 'Ein aktiver Schulelternbeirat unterst&uuml;tzt die Zusammenarbeit zwischen Schule und Familien.' },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 bg-white rounded-xl p-4 shadow-sm">
                    <span className="text-3xl flex-shrink-0" dangerouslySetInnerHTML={{__html: item.icon}} />
                    <div>
                      <h3 className="font-bold text-green-900" dangerouslySetInnerHTML={{__html: item.title}} />
                      <p className="text-sm text-gray-600 mt-1" dangerouslySetInnerHTML={{__html: item.text}} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img
                src="https://www.felsland-grundschule.de/wp-content/uploads/2022/07/52204067146_9f93bcea32_c.jpg"
                alt="Schulkinder bei Aktivitaet"
                className="w-full h-80 object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Das ist uns wichtig */}
      <section className="py-14">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="section-title">Das ist uns wichtig</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: '&#10084;&#65039;', title: 'Wohlbefinden', text: 'Jedes Kind soll sich in unserer Schule wohl und sicher f&uuml;hlen.' },
              { icon: '&#128218;', title: 'Bildung', text: 'Wir legen Wert auf fundiertes Wissen und Freude am Lernen.' },
              { icon: '&#129309;', title: 'Gemeinschaft', text: 'Zusammenhalt, Respekt und gegenseitige Unterst&uuml;tzung pr&auml;gen unseren Schulalltag.' },
            ].map((item, i) => (
              <div key={i} className="text-center p-6 rounded-2xl border border-green-100 hover:border-green-300 transition-colors">
                <span className="text-5xl" dangerouslySetInnerHTML={{__html: item.icon}} />
                <h3 className="font-bold text-green-900 text-lg mt-4 mb-2" dangerouslySetInnerHTML={{__html: item.title}} />
                <p className="text-gray-600 text-sm" dangerouslySetInnerHTML={{__html: item.text}} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bildergalerie Teaser */}
      <section className="py-10" style={{background: 'var(--color-primary)', color: '#fff'}}>
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4 text-yellow-300">Impressionen unserer Schule</h2>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-2 max-w-4xl mx-auto mb-6">
            {[
              'DSC03445.jpg','DSC03446.jpg','DSC03448.jpg',
              'DSC03452.jpg','DSC03495.jpg','DSC03500.jpg'
            ].map((img, i) => (
              <a key={i} href="/bildergalerie">
                <img
                  src={`https://www.felsland-grundschule.de/wp-content/uploads/2022/06/${img}`}
                  alt={`Schulimpression ${i+1}`}
                  className="w-full h-20 object-cover rounded-lg hover:opacity-90 transition-opacity"
                  loading="lazy"
                />
              </a>
            ))}
          </div>
          <a href="/bildergalerie" className="btn-primary">
            Alle Bilder ansehen &rarr;
          </a>
        </div>
      </section>
    </>
  )
}
