"use client";

import Button from "@/components/button";
import Link from "next/link";
import StaticGraph, {
  Node,
} from "@/app/(safespace)/space/daten-verarbeitung/kapitel2/components/static-graph";
import Image from "next/image";

export default function DataProcessing3() {
  const nodes: Node[] = [
    {
      name: "marie",
      attributes: { x: 0, y: 0, size: 15 },
      edgeTo: "memes",
    },
    {
      name: "memes",
      attributes: { x: 1, y: 0, size: 15 },
      edgeAttributes: { label: "Test" },
    },
  ];

  return (
    <div className="relative h-full w-full overflow-y-auto">
      <h3 className="font-semibold text-3xl mb-10">
        Was konnten wir aus dem Profil herauslesen?
      </h3>

      <div className="grid grid-cols-1 lg:grid-cols-[auto_300px] gap-10">
        <div>
          <h3 className="text-xl font-semibold mb-2">Beitrag geliket</h3>
          Dadurch, dass Marie ein Meme geliked hat konnte der Algorithmus hier
          Daten über ihre Präferenzen sammeln.
        </div>
        <div>
          <Image
            src="/datenverarbeitung/collect/level1/explain_like.png"
            alt={"Like"}
            width="300"
            height="200"
          />
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-2">Gespeicherte Inhalte</h3>
          Durch die Speicherung von Rezepten, konnte über Marie diese
          Information gesammelt und gespeichert werden. Dadurch passt der
          Algorithmus weitere Inhalte auf dieses potentielle Hobby an.
        </div>
        <div>
          <Image
            src="/datenverarbeitung/collect/level1/explain_save.png"
            alt={"Like"}
            width="300"
            height="200"
          />
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-2">Nutzerinteraktion</h3>
          Durch die Zeit, die Marie jeweils auf bestimmten Posts verbracht hat,
          kann festgestellt werden, welche Inhalte Marie besonders gut gefallen
          und welche gar nicht. Man geht davon aus, dass lange
          Interaktionszeiten tendenziell auf ein höheres Interesse schließen.
        </div>
        <div>
          <Image
            src="/datenverarbeitung/collect/level1/explain_screentime.png"
            alt={"Like"}
            width="300"
            height="200"
          />
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-2">Gesendete Posts</h3>
          Marie hat an ihre Freundin Lisa eine Jacke gesendet, die sie toll
          findet. Dadurch können weitere ihrer Präferenzen in Bezug auf Kleidung
          gespeichert werden und passendere Inhalte auf Sie zugeschnitten
          werden.
        </div>
        <div>
          <Image
            src="/datenverarbeitung/collect/level1/explain_send.png"
            alt={"Like"}
            width="300"
            height="200"
          />
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-2">Freunde von Freunden</h3>
          Durch das Netzwerk von Lisa auf Social Media, können weitere
          Informationen über sie und ihre Präferenzen gesammelt werden. Wenn wir
          wissen, dass Marie und Lisa befreundet sind, können wir davon
          ausgehen, dass sie ähnliche Interessen haben. Findet nun Lisa einen
          bestimmten Künstler interessant, könnte es Marie vielleicht genau so
          gefallen.
        </div>
        <div>
          <Image
            src="/datenverarbeitung/collect/level1/explain_reference.png"
            alt={"Like"}
            width="300"
            height="200"
          />
          <Image
            src="/datenverarbeitung/collect/level1/explain_reference2.png"
            alt={"Like"}
            width="300"
            height="200"
          />
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-2">Ähnliche Profile</h3>
          <div>
            Diese Beziehung können wir auch mit fremden Konten herstellen. Gibt
            es Profile, die ähnliche Interessen wie Marie haben, können Marie
            nun neue Inhalte vorgeschlagen werden. Marie hat zwar noch nicht von
            &quot;Olivia Rodrigo&quot; gehört, aber Profile mit ähnlichen
            Interessen kennen sie. Marie könnte der neue Künstler dann auch
            gefallen.
          </div>
        </div>
        <div>
          <Image
            src="/datenverarbeitung/collect/level1/explain_similar_accounts.png"
            alt={"Like"}
            width="300"
            height="200"
          />
        </div>
      </div>

      <div className="mt-10 flex justify-center">
        <Link href="/space/daten-verarbeitung/kapitel2/collect/level/1/part/3">
          <Button onClick={() => {}}>Weiter</Button>
        </Link>
      </div>
    </div>
  );
}
