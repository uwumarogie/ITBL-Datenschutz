"use client";

import Button from "@/components/button";
import Link from "next/link";

export default function DataProcessing3() {
  return (
    <div className="relative h-full w-full">
      <h3 className="font-medium text-xl">
        Was konnten wir aus dem Profil herauslesen?
      </h3>
      <span>...</span>

      <Link href="/space/daten-verarbeitung/kapitel2/level/1/part/4">
        <Button onClick={() => {}}>Weiter</Button>
      </Link>
    </div>
  );
}
