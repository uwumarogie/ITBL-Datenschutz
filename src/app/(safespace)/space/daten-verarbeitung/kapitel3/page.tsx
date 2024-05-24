"use client";

import Button from "@/components/button";
import { useRouter } from "next/navigation";

export default function DataProcessingChapter3() {
  const router = useRouter();
  return (
    <div className="flex flex-col items-start">
      <span>Chapter 3</span>
      <Button onClick={() => router.push("/space/daten-verarbeitung/done")}>
        Weiter
      </Button>
    </div>
  );
}
