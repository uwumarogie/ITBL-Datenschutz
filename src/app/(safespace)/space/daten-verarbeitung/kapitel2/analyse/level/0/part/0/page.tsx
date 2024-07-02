"use client";

import Button from "@/components/button";
import Link from "next/link";
import { GameController, Gear, GearSix } from "@phosphor-icons/react";
import Task from "@/components/task";

export default function DataProcessingPart0() {
  return (
    <div className="w-full h-full overflow-y-auto flex flex-col gap-4">
      <h3 className="text-3xl font-medium mb-4 inline-flex gap-6 items-center">
        <GameController /> 4-You Page erstellen
      </h3>
      <span>
        Kennst du das manchmal auch, dass du nur kurz Instagram oder Tiktok
        öffnen willst und du aber plötzlich einige Minuten, manchmal sogar
        Stunden durch die Posts scrollst? Wie kann das jedoch sein?
      </span>

      <div className="relative self-center my-6">
        <Gear className="size-16 animate-rotate" />
        <Gear
          className="size-20 mt-[-1.7rem] ml-9 animate-rotateInv"
          style={{ animationDelay: "400ms" }}
        />
        <Gear
          className="size-12 top-0 right-0 animate-rotate absolute"
          style={{ animationDelay: "200ms" }}
        />
      </div>

      <span>
        Instagram analysiert deine Daten und speichert sie. Das haben wir
        bereits erledigt. Anhand dieser Daten schlägt dir die App einen Feed
        vor, der auf deine Interessen zugeschnitten ist. Somit gefallen dir die
        vorgeschlagenen Posts wahrscheinlich und du klickst dich unbewusst lange
        durch die App durch.
      </span>

      <span>
        Um das Prinzip besser nachvollziehen zu können, wollen wir gemeinsam
        einen Feed aufbauen, der Maries Aufmerksamkeit anziehen könnte.
      </span>

      <Task>
        Auf der linken Seite wirst du einige unterschiedliche Fotos finden.
        Suche dir diejenigen Fotos aus, die Marie am meisten ansprechen könnten.
      </Task>

      <Link href="/space/daten-verarbeitung/kapitel2/analyse/level/0/part/1">
        <Button onClick={() => {}} className="mt-10">
          Los gehts!
        </Button>
      </Link>
    </div>
  );
}
