"use client";

import { CSSProperties, useEffect, useState, Suspense } from "react";
import Robot, { RobotExpression } from "@/components/robot/robot";
import Image from "next/image";
import RecommendationQuiz from "@/app/(safespace)/space/daten-verarbeitung/kapitel2/level/components/recommendation-quiz";

type State = {
  expression: RobotExpression;
  rotation: number;
  text: string;
  loading?: boolean;
  manualNext?: boolean;
  hideButton?: boolean;
  end?: boolean;
  delay?: number;
  style?: CSSProperties | undefined;
};

export type AdvertisementData = {
  id: string;
  imageSrc: string;
  name: string;
  description: string;
  isSuccessful: boolean;
};

const advertisements: AdvertisementData[] = [
  {
    id: "0",
    imageSrc: "/phishing.png",
    name: "Antivirenschutz",
    description: "Beschreibung für eine Antivirensoftware",
    isSuccessful: false,
  },
  {
    id: "1",
    imageSrc: "/data-processing.png",
    name: "Richtige Anzeige",
    description: "Beschreibung für eine Antivirensoftware",
    isSuccessful: true,
  },
  {
    id: "2",
    imageSrc: "/phishing.png",
    name: "Antivirenschutz",
    description: "Beschreibung für eine Antivirensoftware",
    isSuccessful: false,
  },
  {
    id: "3",
    imageSrc: "/phishing.png",
    name: "Antivirenschutz",
    description: "Beschreibung für eine Antivirensoftware",
    isSuccessful: false,
  },
  {
    id: "4",
    imageSrc: "/phishing.png",
    name: "Antivirenschutz",
    description: "Beschreibung für eine Antivirensoftware",
    isSuccessful: false,
  },
];

export default function DataProcessing2() {
  return (
    <RecommendationQuiz
      items={advertisements}
      href="/space/daten-verarbeitung/kapitel2/level/0/part/3"
      robotTextQuestion="Ich habe hier ein paar Werbeanzeigen für dich. Welche würde bei Marie am besten ankommen?"
      renderItem={(data, onClick) => (
        <Advertisement advertisement={data} onClick={onClick} key={data.id} />
      )}
    />
  );
}

function Advertisement({
  advertisement,
  onClick,
}: {
  advertisement: AdvertisementData;
  onClick?: (advertisement: AdvertisementData) => void;
}) {
  return (
    <div
      className="bg-blue-200 rounded-xl w-full flex"
      onClick={() => {
        console.log("Hello", onClick);
        onClick?.(advertisement);
      }}
    >
      <Image
        src={advertisement.imageSrc}
        alt={"Advertisement"}
        width="100"
        height="100"
        className="h-full object-contain"
      />
      <div className="flex flex-col justify-center pl-6 pr-4">
        <span className="text-lg font-semibold text-blue-950">
          {advertisement.name}
        </span>
        <span className="text-slate-800">{advertisement.description}</span>
      </div>
    </div>
  );
}
