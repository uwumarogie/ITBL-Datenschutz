"use client";

import { InlineNavigation } from "@/components/inline-navigation";
import { VideoPlayer } from "@/components/video-player";
import Button from "@/components/button";
import { PersistUserService } from "@/services/user/PersistUserService";
import { AchievementId } from "@/util/achievement-data";
import { useRouter } from "next/navigation";
import Robot, {RobotExpression} from "@/components/robot/robot";
import AnimatedText from "@/components/animated/AnimatedText";
import {CSSProperties, useEffect, useState} from "react";


type State = {
  text?: string,
  expressionGood?: RobotExpression,
  rotationGood?: number,
  styleGood?: CSSProperties
  expressionEvil?: RobotExpression,
  rotationEvil?: number,
  typeEvil?: "evil" | "disguised",
  styleEvil?: CSSProperties
}

const styleEvilCenter = {
    right: "calc(50% - 4.5rem)"
}
const styleEvilLeft = {
    right: "calc(75% - 4.5rem)"
}

const styleGoodHidden = {
  right: "-12rem"
}
const styleGoodRight = {
  right: "calc(25% - 4.5rem)"
}

const states: State[] = [
  {
    typeEvil: "disguised",
    styleEvil: styleEvilCenter,
    styleGood: styleGoodHidden
  },
  {
    text: "Hey du da! Schön das du da bist. ",
    typeEvil: "disguised",
    styleEvil: styleEvilCenter,
    styleGood: styleGoodHidden
  },
  {
    text: "Bevor wir loslegen können brauche ich noch einige Informationen von dir.",
    typeEvil: "disguised",
    expressionEvil: "smiling",
    styleEvil: styleEvilCenter,
    styleGood: styleGoodHidden
  },
  {
    text: "Name, Standort, Kreditkartennummer, ...",
    typeEvil: "disguised",
    styleEvil: styleEvilCenter,
    styleGood: styleGoodHidden
  },
  {
    text: "AIris: Hey! Evil Esparza! Hör auf damit!",
    typeEvil: "disguised",
    expressionEvil: "sad",
    expressionGood: "angry",
    styleEvil: styleEvilLeft,
    styleGood: styleGoodRight
  },
  {
    text: "Esparza: Verdammt! Wie hast du mich erkannt?",
    typeEvil: "disguised",
    expressionEvil: "angry",
    expressionGood: "angry",
    styleEvil: styleEvilLeft,
    styleGood: styleGoodRight
  },
  {
    text: "es"
  },
  {
    text: "dir?"
  }
]


export default function Intro() {
  const [state, setState] = useState(0);
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      setState(1)
    }, 200)
  }, []);


  function next() {
    if(state < states.length - 1) {
      setState(state + 1)
    } else {
      console.log("Done")
    }
  }

  async function finish() {
    const userService = new PersistUserService();
    await userService.setAchievement(AchievementId.INTRO_FINISHED, true);
    router.push("/space");
  }


  return (
    <div className="px-6 w-full h-full relative flex flex-col">

      <div className="h-full items-center relative flex">

        <Robot expression={states[state].expressionEvil ?? "resting"}
               type={states[state].typeEvil}
               headRotation={states[state].rotationEvil ?? 0}
               style={states[state].styleEvil}
              className="w-36 h-36 absolute transition-all duration-700"/>

        <Robot expression={states[state].expressionGood ?? "resting"}
               type="default"
               headRotation={states[state].rotationGood ?? 0}
               style={states[state].styleGood}
               className="w-36 h-36 absolute transition-all duration-700"/>

      </div>

      <div className="h-full max-h-32 flex-shrink-0 flex flex-col justify-center items-center">
        <AnimatedText>
          {states[state].text ?? ""}
        </AnimatedText>

        <Button onClick={next} className="mt-6">Weiter</Button>

      </div>

    </div>
  );
}
