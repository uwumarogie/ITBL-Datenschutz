"use client";

import Button from "@/components/Button";
import { useRouter } from "next/navigation";

export default function DataProcessing() {
  const router = useRouter();

  return (
    <div className="relative h-full w-full flex flex-col">
      <Button onClick={() => router.push("/space/daten-verarbeitung/0")}>
        Modul starten
      </Button>
    </div>
  );
}
