"use client";

import Button from "@/components/button";
import Link from "next/link";
import { GameController, Gear, GearSix } from "@phosphor-icons/react";
import Task from "@/components/task";
import {useTranslations} from "next-intl";

export default function DataProcessingPart0() {
  const t = useTranslations("datenverarbeitung.analyze.level.0.part.0")
  return (
    <div className="w-full h-full overflow-y-auto flex flex-col gap-4 max-w-[800px]">
      <h3 className="text-3xl font-medium mb-4 inline-flex gap-6 items-center">
        <GameController/> {t("pageTitle")}
      </h3>
      <span>
    {t("introParagraph1")}
  </span>

      <div className="relative self-center my-6">
        <Gear className="size-16 animate-rotate"/>
        <Gear
          className="size-20 mt-[-1.7rem] ml-9 animate-rotateInv"
          style={{animationDelay: "400ms"}}
        />
        <Gear
          className="size-12 top-0 right-0 animate-rotate absolute"
          style={{animationDelay: "200ms"}}
        />
      </div>

      <span>
    {t("introParagraph2")}
  </span>

      <span>
    {t("introParagraph3")}
  </span>

      <Task>
        {t("taskDescription")}
      </Task>

      <Link href="/space/daten-verarbeitung/kapitel2/analyse/level/0/part/1">
        <Button onClick={() => {
        }} className="mt-10">
          {t("startButtonText")}
        </Button>
      </Link>
    </div>

  );
}
