"use client";

import Button from "@/components/button";
import Link from "next/link";
import {GameController} from "@phosphor-icons/react";
import Task from "@/components/task";

export default function DataProcessingPart0() {
  return (
    <div className="w-full h-full overflow-y-auto flex flex-col gap-4">
      <h3 className="text-3xl font-medium mb-4 inline-flex gap-6 items-center"><GameController/> Werbung auswählen
      </h3>

      <span>
        Unsere Daten werden im Internet gesammelt, um unter anderem damit passende Werbungen anzuzeigen.
        Welche Werbungen würdest du bei Marie freischalten?
      </span>

      <Task>
        Wähle aus den folgenden Werbeanzeigen diejenigen aus, die Marie am interessantesten finden könnte.
        Nutze auch die gesammelten Daten, die dir auf der nächsten Seite mitgegeben werden.
      </Task>
      <Link href="/space/daten-verarbeitung/kapitel2/analyse/level/1/part/1">
        <Button onClick={() => {
        }} className="mt-10">Los gehts!</Button>
      </Link>
    </div>
  );
}
