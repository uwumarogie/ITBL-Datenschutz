"use client";

import Button from "@/components/button";
import Link from "next/link";
import Robot, { RobotExpression } from "@/components/robot/robot";
import { CSSProperties, useEffect, useState } from "react";
import clsx from "clsx";
import AnimatedText from "@/components/animated/animated-text";
import { useRouter } from "next/navigation";
import { AchievementId } from "@/util/achievement-data";
import { PersistUserService } from "@/services/user/PersistUserService";
import { useMessages } from "@/services/notfication/message-provider";
import {useTranslations} from "next-intl";

export type State = {
  text?: string;
  expression?: RobotExpression | undefined;
  style?: CSSProperties | undefined;
};

function useStates(): State[] {
  const t = useTranslations("datenverarbeitung.recap.robot")
  return [
    {
      text: "",
      style: {
        left: "calc(100% + 4rem)",
      },
    },
    {
      text: t("text_1"),
      expression: "smiling",
      style: {
        top: "calc(50% - 4rem)",
        left: "calc(50% - 4rem)",
      },
    },
    {
      text: t("text_2"),
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
      text: t("text_3"),
      style: {
        top: "calc(30% - 4rem)",
        left: "calc(25% - 4rem)",
      },
    },
  ];
}

export default function DataProcessingRecap() {
  const [state, setState] = useState(0);
  const router = useRouter();
  const messageService = useMessages();
  const states = useStates()
  const t = useTranslations("datenverarbeitung.recap")

  useEffect(() => {
    setState(1);
  }, []);

  async function next() {
    if (state < states.length - 1) {
      setState(state + 1);
    } else {
      // router.push("/space/daten-verarbeitung/done")
      const userService = new PersistUserService();
      // await context.setAchievement(AchievementId.DATENVERARBEITUNG_FINISHED, true)
      await userService
        .setAchievement(AchievementId.DATENVERARBEITUNG_FINISHED, true)
        .then(() => {
          messageService.showAchievement(
            AchievementId.DATENVERARBEITUNG_FINISHED,
          );
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
            {t("text_1")}
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
            {t("text_2")}
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
            {t("text_3")}
          </span>
        </div>
      </div>
      <Button className="flex-shrink-0 mt-10" onClick={next}>
        {t("next")}
      </Button>
    </div>
  );
}
