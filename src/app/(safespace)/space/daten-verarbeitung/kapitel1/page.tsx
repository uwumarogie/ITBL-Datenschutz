"use client";

import Button from "@/components/button";
import { useRouter } from "next/navigation";

export default function DataProcessingChapter1() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-start gap-10">
      <span>
        Hier werden Informationen für den Nutzer gesammelt und dargestellt
      </span>

      <Button
        onClick={() => router.push("/space/daten-verarbeitung/kapitel1/quiz")}
      >
        Zum Quiz
      </Button>
    </div>
  );
}
