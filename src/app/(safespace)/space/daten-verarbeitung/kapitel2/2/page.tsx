"use client";

import { CSSProperties, useEffect, useState } from "react";
import Robot, { RobotExpression } from "@/components/robot/robot";
import clsx from "clsx";
import { useRouter } from "next/navigation";
import Image from "next/image";

const states: {
  expression: RobotExpression;
  rotation: number;
  text: string;
  style?: CSSProperties | undefined;
}[] = [
  {
    expression: "smiling",
    rotation: 0,
    text: "",
    style: {
      marginLeft: "calc(100% + 400px)",
    },
  },
  {
    expression: "resting",
    rotation: 0,
    text: "Ich habe hier ein paar Werbeanzeigen für dich. Welche würde bei Marie am besten ankommen?",
    style: {},
  },
];

const advertisements: {
  id: string;
  imageSrc: string;
  name: string;
  description: string;
}[] = [
  {
    id: "0",
    imageSrc: "/phishing.png",
    name: "Antivirenschutz",
    description: "Beschreibung für eine Antivirensoftware",
  },
  {
    id: "1",
    imageSrc: "/phishing.png",
    name: "Antivirenschutz",
    description: "Beschreibung für eine Antivirensoftware",
  },
  {
    id: "2",
    imageSrc: "/phishing.png",
    name: "Antivirenschutz",
    description: "Beschreibung für eine Antivirensoftware",
  },
  {
    id: "3",
    imageSrc: "/phishing.png",
    name: "Antivirenschutz",
    description: "Beschreibung für eine Antivirensoftware",
  },
  {
    id: "4",
    imageSrc: "/phishing.png",
    name: "Antivirenschutz",
    description: "Beschreibung für eine Antivirensoftware",
  },
];
export default function DataProcessing2() {
  const [state, setState] = useState(0);
  const router = useRouter();

  useEffect(() => {
    const id = setTimeout(() => {
      setState(1);
    }, 200);
    return () => clearTimeout(id);
  }, []);

  function onAdvertisementClick(advertisement: any) {
    alert("Advert " + JSON.stringify(advertisement));
  }

  return (
    <div className="relative h-full w-full flex flex-col items-center justify-start">
      <div className="w-full flex flex-col justify-start items-center relative">
        <Robot
          expression={states[state].expression}
          headRotation={states[state].rotation}
          className="transition-all duration-700 w-40 h-40"
          style={states[state].style}
        />
        <div className="max-w-96 mt-10 text-xl font-medium text-center">
          {states[state].text}
        </div>
      </div>

      <div
        className={clsx(
          "flex flex-col gap-4 w-full h-full my-4 overflow-y-auto transition-opacity duration-700 delay-300",
          state >= 1 ? "opacity-100" : "opacity-0",
        )}
      >
        {advertisements.map((advertisement) => (
          <div
            key={advertisement.id}
            className="bg-blue-200 rounded-xl w-full flex flex-shrink-0"
            onClick={() => onAdvertisementClick(advertisement)}
          >
            <Image
              src={advertisement.imageSrc}
              alt={"Advertisement"}
              width="100"
              height="100"
              className="h-full"
            />
            <div className="flex flex-col justify-center pl-6 pr-4">
              <span className="text-lg font-semibold text-blue-950">
                {advertisement.name}
              </span>
              <span className="text-slate-800">
                {advertisement.description}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}