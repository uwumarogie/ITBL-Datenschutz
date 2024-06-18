"use client";

import Button from "@/components/button";
import Link from "next/link";

export default function DataProcessingRecap() {
  return (
    <div>
      <span>Recap</span>
      <Link href="/space/daten-verarbeitung/done">
        <Button onClick={() => {}}>Abschließen</Button>
      </Link>
    </div>
  );
}
