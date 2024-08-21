"use client";

import Button from "@/components/button";
import Link from "next/link";
import { GameController } from "@phosphor-icons/react";
import Task from "@/components/task";
import {useTranslations} from "next-intl";

export default function DataProcessingPart0() {
  const t = useTranslations("datenverarbeitung.analyse.level.1.part.0")
  return (
    <div className="w-full h-full overflow-y-auto flex flex-col gap-4 max-w-[800px]">
      <h3 className="text-3xl font-medium mb-4 inline-flex gap-6 items-center">
        <GameController/> {t("adSelectionTitle")}
      </h3>

      <span>
    {t("adSelectionIntro")}
  </span>

      <Task>
        {t("adSelectionTask")}
      </Task>

      <Link href="/space/daten-verarbeitung/kapitel2/analyse/level/1/part/1">
        <Button onClick={() => {
        }} className="mt-10">
          {t("startButtonText")}
        </Button>
      </Link>
    </div>

  );
}
