import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Unsere Schule &ndash; Felsland Grundschule Bruchweiler-B&auml;renbach',
}

const teamGroups = [
  {
    title: 'Schulleitung',
    members: [
      { name: 'Sebastian Nikolaus', role: 'Schulleiter' },
    ]
  },
  {
    title: 'Sekretariat',
    members: [
      { name: 'Judith Hagenm&uuml;ller', role: 'Sekret&auml;rin' },
    ]
  },
  {
    title: 'Lehrkr&auml;fte',
    members: [
      { name: 'Elisa Mang', role: 'Klassenlehrerin 1a' },
      { name: 'Laura Dressel', role: 'Klassenlehrerin 1b' },
      { name: 'Luisa Gl&auml;&szlig;gen', role: 'Klassenlehrerin 2a' },
      { name: 'Alexandra Zitscher', role: 'Klassenlehrerin 2b' },
      { name: 'Alicia Brudermann-Orth', role: 'Klassenlehrerin 3a' },
      { name: 'Susanne Turnwald', role: 'Klassenlehrerin 3b' },
      { name: 'Thomas Heintz', role: 'Klassenlehrer 4a' },
      { name: 'Vincent Emser', role: 'Klassenlehrer 4b' },
      { name: 'Eva Wieser', role: 'Lehrerin' },
      { name: 'Sara Burkahrt', role: 'Lehrerin' },
      { name: 'Emily Seibel', role: 'Lehramtsanw&auml;rterin' },
      { name: 'Julia Bachmann', role: 'F&ouml;rderlehrerin' },
      { name: 'Noah Ringhof', role: 'FSJ' },
      { name: 'Ivan Horvat', role: 'FSJ' },
      { name: 'Paula Hahn', role: 'Praktikantin FOS' },
      { name: 'Joanna Frankfurter', role: 'PES' },
      { name: 'Sophie Keller', role: 'PES' },
    ]
  },
  {
    title: 'Nachmittagsbetreuung',
    members: [
      { name: 'Petra Schneider', role: 'Betreuerin' },
      { name: 'Claudia Fuchsj&auml;ger', role: 'Betreuerin' },
      { name: 'Sabrina Go&szlig;rau', role: 'Essensausgabe' },
    ]
  },
  {
    title: 'Hausmeister und Reinigerinnen',
    members: [
      { name: 'Martin Burkhart', role: 'Hausmeister' },
      { name: 'Karin Sch&auml;fer', role: 'Reinigerin' },
      { name: 'Fernanda Bassi', role: 'Reinigerin' },
      { name: 'Nicole Breiner', role: 'Reinigerin' },
    ]
  },
  {
    title: 'Schulelternbeirat',
    members: [
      { name: 'Daniel Rolland', role: 'Schulelternbeiratsvorsitzender' },
      { name: 'Nicola Schwarzm&uuml;ller', role: 'Stellvertreter' },
      { name: 'Damian Juretic', role: 'Schulelternbeirat' },
      { name: 'Karina Gimber', role: 'Stellvertreter' },
      { name: 'Melanie Trapp', role: 'Schulelternbeirat' },
      { name: 'Michael Schilling', role: 'Stellvertreter' },
    ]
  }
]

export default function UnsereSchulePage() {
  return (
    <>
      <section style={{background: 'linear-gradient(135deg, #1b5e20 0%, #2e7d32 100%)'}}>
        <div className="container mx-auto px-4 py-12 text-center text-white">
          <h1 className="text-3xl md:text-4xl font-bold mb-3">Unsere Schule</h1>
          <p className="text-green-200">Die Felsland-Grundschule Bruchweiler-B&auml;renbach</p>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4 max-w-5xl">
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-10">
            Nachfolgend erhalten Sie einen &Uuml;berblick &uuml;ber alle Personen, die sich um einen reibungslosen Schulbetrieb k&uuml;mmern sowie unseren Elternbeirat.
          </p>

          <div className="space-y-10">
            {teamGroups.map((group, gi) => (
              <div key={gi}>
                <h2
                  className="text-xl font-bold mb-4 pb-2 border-b-2"
                  style={{color: 'var(--color-primary)', borderColor: 'var(--color-accent)'}}
                  dangerouslySetInnerHTML={{__html: group.title}}
                />
                <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {group.members.map((member, mi) => (
                    <div key={mi} className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 hover:border-green-200 transition-colors">
                      <div className="w-12 h-12 rounded-full flex items-center justify-center mb-3 text-white font-bold text-lg" style={{background: 'var(--color-primary)'}}>
                        {member.name.charAt(0)}
                      </div>
                      <p className="font-semibold text-gray-900 text-sm" dangerouslySetInnerHTML={{__html: member.name}} />
                      <p className="text-xs text-green-700 mt-1" dangerouslySetInnerHTML={{__html: member.role}} />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Kontakt Box */}
      <section className="py-10" style={{background: 'var(--color-bg)'}}>
        <div className="container mx-auto px-4 max-w-xl text-center">
          <h2 className="text-xl font-bold text-green-800 mb-4">Kontakt &amp; Adresse</h2>
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <p className="font-semibold">Felsland Grundschule</p>
            <p>Gartenstra&szlig;e 79</p>
            <p>76891 Bruchweiler-B&auml;renbach</p>
            <p className="mt-3">
              <a href="tel:+4963949209560" className="text-green-700 hover:underline font-medium">
                Tel: (06394) 92 09 56 &ndash; 0
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
