"use client";

import Button from "@/components/button";
import Link from "next/link";
import StaticGraph, {
  Node,
} from "@/app/(safespace)/space/daten-verarbeitung/kapitel2/level/components/static-graph";
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
      <h3 className="font-semibold text-2xl mb-10">
        Was konnten wir aus dem Profil herauslesen?
      </h3>

      <div className="grid grid-cols-1 lg:grid-cols-[auto_300px] gap-10">
        <div>
          <h3 className="text-lg font-semibold">Beitrag geliket</h3>
          lorem ipsum dolor sit amet consectetur adipiscing elit justo eu
          feugiat cillum nam tincidunt sanctus eleifend ipsum kasd obcaecat
          justo sanctus in euismod ex iusto elitr nisl amet veniam stet
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
          <h3 className="text-lg font-semibold">Gespeicherte Inhalte</h3>
          lorem ipsum dolor sit amet consectetur adipiscing elit justo eu
          feugiat cillum nam tincidunt sanctus eleifend ipsum kasd obcaecat
          justo sanctus in euismod ex iusto elitr nisl amet veniam stet
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
          <h3 className="text-lg font-semibold">Nutzerinteraktion</h3>
          lorem ipsum dolor sit amet consectetur adipiscing elit justo eu
          feugiat cillum nam tincidunt sanctus eleifend ipsum kasd obcaecat
          justo sanctus in euismod ex iusto elitr nisl amet veniam stet
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
          <h3 className="text-lg font-semibold">Gesendete Posts</h3>
          lorem ipsum dolor sit amet consectetur adipiscing elit justo eu
          feugiat cillum nam tincidunt sanctus eleifend ipsum kasd obcaecat
          justo sanctus in euismod ex iusto elitr nisl amet veniam stet
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
          <h3 className="text-lg font-semibold">Freunde von Freunden</h3>
          lorem ipsum dolor sit amet consectetur adipiscing elit justo eu
          feugiat cillum nam tincidunt sanctus eleifend ipsum kasd obcaecat
          justo sanctus in euismod ex iusto elitr nisl amet veniam stet
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
      </div>

      <div className="mt-10 flex justify-center">
        <Link href="/space/daten-verarbeitung/kapitel2/collect/level/1/part/3">
          <Button onClick={() => {}}>Weiter</Button>
        </Link>
      </div>
    </div>
  );
}
