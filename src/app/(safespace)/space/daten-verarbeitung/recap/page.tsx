"use client";

import Button from "@/components/button";
import Link from "next/link";
import Robot, { RobotExpression } from "@/components/robot/robot";
import { CSSProperties, useEffect, useState } from "react";
import clsx from "clsx";
import AnimatedText from "@/components/animated/AnimatedText";
import { next } from "sucrase/dist/types/parser/tokenizer";
import { useRouter } from "next/navigation";
import { AchievementId } from "@/util/achievement-data";
import { PersistUserService } from "@/services/user/PersistUserService";
import { useMessages } from "@/services/notfication/message-provider";

export type State = {
  text?: string;
  expression?: RobotExpression | undefined;
  style?: CSSProperties | undefined;
};

const states: State[] = [
  {
    text: "",
    style: {
      left: "calc(100% + 4rem)",
    },
  },
  {
    text: "Wir haben heute einiges gemacht!",
    expression: "smiling",
    style: {
      top: "calc(50% - 4rem)",
      left: "calc(50% - 4rem)",
    },
  },
  {
    text: "Ich habe dir mal 3 Key Takeaways aufgeschrieben.",
    expression: "smiling",
    style: {
      top: "calc(40% - 4rem)",
      left: "calc(50% - 4rem)",
    },
  },
  {
    style: {
      top: "calc(16.6% - 4rem)",
      left: "calc(25% - 4rem)",
    },
  },
  {
    style: {
      top: "calc(50% - 4rem)",
      left: "calc(25% - 4rem)",
    },
  },
  {
    style: {
      top: "calc(83.3% - 4rem)",
      left: "calc(25% - 4rem)",
    },
  },
  {
    text: "Versuche doch mal bewusst beim Scrollen durch deine Apps zu betrachte, wo du gerade unbewusst Daten generierst!",
    style: {
      top: "calc(30% - 4rem)",
      left: "calc(25% - 4rem)",
    },
  },
];

export default function DataProcessingRecap() {
  const [state, setState] = useState(0);
  const router = useRouter();
  const messageService = useMessages();

  useEffect(() => {
    setState(1);
  }, []);

  async function next() {
    if (state < states.length - 1) {
      setState(state + 1);
    } else {
      // router.push("/space/daten-verarbeitung/done")
      const userService = new PersistUserService();
      // await context.setAchievement(AchievementId.DATA_PROCESSING_DONE, true)
      await userService
        .setAchievement(AchievementId.DATA_PROCESSING_DONE, true)
        .then(() => {
          messageService.showAchievement(AchievementId.DATA_PROCESSING_DONE);
          setTimeout(() => {
            router.push("/space/");
          }, 4000);
        });
    }
  }

  return (
    <div className="relative w-full h-full flex flex-col xl:justify-center items-center max-xl:overflow-y-auto">
      <div className="xl:relative w-full h-full xl:h-1/2">
        <div className="xl:absolute xl:w-full xl:h-full pointer-events-none">
          <div
            className="relative xl:absolute transition-all duration-700 flex flex-col items-center justify-center max-xl:!top-0 max-xl:!left-0"
            style={states[state].style}
          >
            <AnimatedText className="mb-4 xl:mb-0 xl:absolute top-[calc(100%+2rem)] xl:w-[300px] text-center xl:text-lg">
              {states[state].text ?? ""}
            </AnimatedText>
            <Robot
              className="relative transition-all size-32"
              expression={states[state].expression ?? "resting"}
            />
          </div>
        </div>
        <div className="flex flex-col justify-around transition-all gap-4 mt-10 xl:gap-0 xl:mt-0 xl:ml-[50%] xl:w-1/2 xl:h-full ">
          <span
            className={clsx(
              "opacity-0 transition-opacity text-sm xl:text-lg",
              state >= 3 && "opacity-100",
            )}
          >
            <span className="bg-sky-800 text-white font-bold rounded-full w-6 h-6 inline-flex justify-center items-center mr-2">
              1
            </span>{" "}
            Informationen über einen Nutzer können über Text- und Bilddaten
            gesammelt werden.
          </span>
          <span
            className={clsx(
              "opacity-0 transition-opacity text-sm xl:text-lg",
              state >= 4 && "opacity-100",
            )}
          >
            <span className="bg-sky-800 text-white font-bold rounded-full w-6 h-6 inline-flex justify-center items-center mr-2">
              2
            </span>{" "}
            Durch das Interagieren mit Social Media Apps (Liken, Scrollen,
            Teilen, ...) generiert man unbewusst wertvolle Daten, die viele
            Informationen über einen Preis geben können.
          </span>
          <span
            className={clsx(
              "opacity-0 transition-opacity text-sm xl:text-lg",
              state >= 5 && "opacity-100",
            )}
          >
            <span className="bg-sky-800 text-white font-bold rounded-full w-6 h-6 inline-flex justify-center items-center mr-2">
              3
            </span>{" "}
            Social Media Portale nutzen diese komplexe Daten, um dir für dich
            zugeschnittene Inhalte zu präsentieren. Wie diese Auswahl erstellt
            wird, ist oft geheim und sehr komplex.
          </span>
        </div>
      </div>
      <Button className="flex-shrink-0 mt-10" onClick={next}>
        Weiter
      </Button>
    </div>
  );
}
