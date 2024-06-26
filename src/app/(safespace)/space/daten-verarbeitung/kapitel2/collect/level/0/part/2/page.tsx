"use client";

import Button from "@/components/button";
import Link from "next/link";
import Image from "next/image";

export default function DataProcessing3() {
  return (
    <div className="relative h-full w-full overflow-y-auto">
      <h3 className="font-semibold text-3xl mb-10">
        Was konnten wir aus dem Profil herauslesen?
      </h3>

      <span>
        Es gibt viele Möglichkeiten, wie man die Daten einer Person durch ihr
        Profil erhält. Lass uns gemeinsam herausfinden, welche Informationen wir
        aus Maries Profil entnehmen können.
      </span>

      <div className="grid grid-cols-1 lg:grid-cols-[auto_300px] gap-10 mt-4">
        <div>
          <h3 className="text-xl font-semibold mb-2">Profilbeschreibung</h3>
          Durch die Profilbeschreibung erhalten wir folgende Informationen:
          <ul className="list-disc ml-4">
            <li>Maries voller Name ist Marie Magic</li>
            <li>sie wurde 2007</li>
            <li>Marie lebt in München</li>
            <li>ist 17 Jahre alt</li>
            <li>hat 14 Posts ={">"} postet also gelegentlich</li>
            <li>
              hat 97 Follower ={">"} privates Profil, sie ist keine Influencerin
            </li>
            <li>folgt 189 Profilen</li>
          </ul>
          Vor allem Follower und gefolgte Profile werden später noch wichtig.
          Behalte sie am besten gleich im Kopf!
        </div>
        <div>
          <Image
            className="rounded-xl shadow-md"
            src="/datenverarbeitung/collect/level0/marked/explain_profile.png"
            alt={"Like"}
            width="300"
            height="200"
          />
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-2">Veröffentlichte Bilder</h3>
          Mit fast jedem Foto erhält man zusätzliche Daten. Hier zum Beispiel
          erfahren wir, dass sie Hunde sehr gerne mag.
        </div>
        <div>
          <Image
            className="rounded-xl shadow-md"
            src="/datenverarbeitung/collect/level0/marked/explain_post.png"
            alt={"Like"}
            width="300"
            height="200"
          />
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-2">Postbeschreibung</h3>
          Auch durch die Caption, können neue Daten verarbeitet werden. Auf dem
          Foto is ein jüngeres Mädchen zu erkennen. Mithilfe dem hinzugefügten
          Text lässt sich erschließen, dass das ihre jüngere Schwester Lea ist.
        </div>
        <div>
          <Image
            className="rounded-xl shadow-md"
            src="/datenverarbeitung/collect/level0/marked/explain_caption.png"
            alt={"Like"}
            width="300"
            height="200"
          />
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-2">Hashtags</h3>
          Das Foto zeigt nur den Besuch eines Konzerts. Es soll auch der beste
          Tag ihres Lebens gewesen sein. Mehr Informationen haben wir jedoch
          nicht. Oft helfen einem Hashtags gewisse Lücken zu füllen. Durch die
          hinzugefügten Hashtags wissen wir, dass es ein Konzert von Billie
          Eilish war, welches 2023 in Dortmund stattgefunden hat. Hashtags sind
          für Algorithmen besonders einfach, da sie direkt Begriffe darstellen,
          die für Vorschläge verwendet werden können.
        </div>
        <div>
          <Image
            className="rounded-xl shadow-md"
            src="/datenverarbeitung/collect/level0/marked/explain_hashtags.png"
            alt={"Like"}
            width="300"
            height="200"
          />
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-2">Freunde markieren</h3>
          Hin und wieder markiert Marie gerne ihre Freunde. Somit werden neue
          Verbindungen hergestellt. Wir erfahren, dass Michael, Sarah, Lena,
          Lukas und Livia ihre Schulfreunde sind.
        </div>
        <div>
          <Image
            className="rounded-xl shadow-md"
            src="/datenverarbeitung/collect/level0/marked/explain_friends.png"
            alt={"Like"}
            width="300"
            height="200"
          />
        </div>
      </div>

      <div className="mt-10 flex justify-center">
        <Link href="/space/daten-verarbeitung/kapitel2/collect/level/0/part/3">
          <Button onClick={() => {}}>Weiter</Button>
        </Link>
      </div>
    </div>
  );
}
