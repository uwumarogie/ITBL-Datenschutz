import React from "react";

export default function Impressum() {
  return (
    <div className="px-8 w-full h-full overflow-y-auto">
      <div className="max-w-[800px]">
        <h1 className="text-2xl font-bold mb-4">Impressum</h1>
        <p className="mb-4">
          Angaben gemäß § 5 TMG:
          <br/>
          Name: Technische Universität München
          <br/>
          Straße: Arcisstraße 21
          <br/>
          PLZ: 80333 München
        </p>
        <p className="mb-4">
          Kontakt: Anna Weber
          <br/>
          Mail: annaweberhamburg@gmail.com
          <br/>
          Telefon: 01511 7832202
        </p>
        <p className="mb-4">
          EU-Streitschlichtung
          <br/>
          Die Europäische Kommission stellt eine Plattform zur
          Online-Streitbeilegung (OS) bereit:{" "}
          <a
            href="https://ec.europa.eu/consumers/odr"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline"
          >
            https://ec.europa.eu/consumers/odr
          </a>
          .<br/>
          Unsere E-Mail-Adresse finden Sie oben im Impressum.
        </p>
        <h2 className="text-xl font-semibold mt-6 mb-2">
          Haftungsausschluss (Disclaimer)
        </h2>
        <h3 className="text-lg font-semibold mt-4 mb-2">Haftung für Inhalte</h3>
        <p className="mb-4">
          Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf
          diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8
          bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet,
          übermittelte oder gespeicherte fremde Informationen zu überwachen oder
          nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit
          hinweisen.
        </p>
        <p className="mb-4">
          Verpflichtungen zur Entfernung oder Sperrung der Nutzung von
          Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt.
          Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der
          Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von
          entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend
          entfernen.
        </p>
        <h3 className="text-lg font-semibold mt-4 mb-2">Haftung für Links</h3>
        <p className="mb-4">
          Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren
          Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden
          Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten
          Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten
          verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der
          Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte
          waren zum Zeitpunkt der Verlinkung nicht erkennbar.
        </p>
        <p className="mb-4">
          Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch
          ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei
          Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend
          entfernen.
        </p>
        <h3 className="text-lg font-semibold mt-4 mb-2">Urheberrecht</h3>
        <p className="mb-4">
          Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen
          Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung,
          Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
          Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des
          jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite
          sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
        </p>
        <p>
          Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden,
          werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte
          Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine
          Urheberrechtsverletzung aufmerksam werden, bitten wir um einen
          entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden
          wir derartige Inhalte umgehend entfernen.
        </p>
      </div>
    </div>
  );
}
