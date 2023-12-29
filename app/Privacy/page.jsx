import Link from 'next/link'
export default function Privacy () {
  return (
  <main className="max-w-[1700px] py-20 mx-auto px-4 md:px-10">
    <h1 className="text-4xl mb-10">Privacy policy</h1>
    <p>Vi på <span className="font-medium">Balleur production group scandinavia</span> värnar om din integritet. Informationen du lämnar genom vårt kontaktformulär, inklusive namn, telefonnummer, e-postadress och företagsnamn, kommer endast att användas för att svara på din förfrågan och förbättra vår service. Vi delar inte dina personuppgifter med tredje part utan ditt samtycke. Din information lagras säkert och hanteras enligt gällande dataskyddslagstiftning. Genom att använda vårt kontaktformulär godkänner du vår integritetspolicy. För ytterligare information, kontakta oss på
    <Link className="underline" href="mailto:Samuel@balleurproduction.com"> Samuel@balleurproduction.com.
    </Link>
    </p>

  </main>
  )
}
