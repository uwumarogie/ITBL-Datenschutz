"use client";

import {InlineNavigation} from "@/components/inline-navigation";
import {VideoPlayer} from "@/components/video-player";
import Button from "@/components/button";
import {PersistUserService} from "@/services/user/PersistUserService";
import {AchievementId} from "@/util/achievement-data";
import {useRouter} from "next/navigation";
import Robot, {RobotExpression} from "@/components/robot/robot";
import AnimatedText from "@/components/animated/AnimatedText";
import {CSSProperties, useCallback, useEffect, useState} from "react";

type IntroInput = {
  type: "text" | "options" | "location",
  speaker?: string,
  text?: string,
  placeholder?: string,
  options?: string[]
}

type State = {
  text?: string,
  expressionGood?: RobotExpression,
  rotationGood?: number,
  styleGood?: CSSProperties
  expressionEvil?: RobotExpression,
  rotationEvil?: number,
  typeEvil?: "evil" | "disguised",
  styleEvil?: CSSProperties,
  input?: IntroInput
}

const styleEvilCenter = {
  right: "calc(50% - 4.5rem)"
}
const styleEvilLeft = {
  right: "calc(75% - 4.5rem)"
}
const styleEvilHidden = {
  right: "calc(100% + 4.5rem)"
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
    text: "Hey! Willkommen! Ich bin Robo-X. Ich möchte dich besser kennenlernen. Sag mir doch mal, wie du heißt?",
    typeEvil: "disguised",
    styleEvil: styleEvilCenter,
    styleGood: styleGoodHidden,
    input: {
      type: "text",
      placeholder: "Gib deinen Namen ein"
    }
  },
  {
    text: "Schön dich kennenzulernen, [Name]! Welche Social Media Plattformen nutzt du denn am liebsten?",
    typeEvil: "disguised",
    expressionEvil: "smiling",
    styleEvil: styleEvilCenter,
    styleGood: styleGoodHidden,
    input: {
      type: "options",
      options: ["Instagram", "Tiktok", "Snapchat", "Twitter / X", "andere"]
    }
  },
  {
    text: "Oh, das ist super! Und verrätst du mir auch, welche Hobbys du hast?",
    typeEvil: "disguised",
    styleEvil: styleEvilCenter,
    styleGood: styleGoodHidden,
    input: {
      type: "text",
      placeholder: "Nenne deine Hobbies."
    }
  },
  {
    text: "Deine Adresse brauch ich auch noch. Gibst du mir bitte deinen Standort frei?",
    typeEvil: "disguised",
    styleEvil: styleEvilCenter,
    styleGood: styleGoodHidden,
    input: {
      type: "location"
    }
  },
  {
    text: "Klasse! Und wann ist dein Geburtstag?",
    typeEvil: "disguised",
    styleEvil: styleEvilCenter,
    styleGood: styleGoodHidden,
    input: {
      type: "text"
    }
  },
  {
    text: "Halt, stopp! [Name], du teilst hier gerade alle deine persönlichen Daten! Das ist super gefährlich!",
    typeEvil: "disguised",
    expressionEvil: "sad",
    expressionGood: "angry",
    styleEvil: styleEvilLeft,
    styleGood: styleGoodRight
  },
  {
    text: "Hey, was soll das? Ich wollte nur ein paar Infos...",
    typeEvil: "disguised",
    expressionEvil: "angry",
    expressionGood: "angry",
    styleEvil: styleEvilLeft,
    styleGood: styleGoodRight
  },
  {
    text: "Robo-X, das reicht! [Name], du siehst, wie schnell man unbewusst wichtige persönliche Informationen preisgeben kann. Das kann böse Konsequenzen haben.",
    typeEvil: "disguised",
    expressionEvil: "angry",
    expressionGood: "angry",
    styleEvil: styleEvilLeft,
    styleGood: styleGoodRight,
    input: {
      type: "options",
      options: ["Wirklich? Ich dachte, das wäre alles harmlos.."]
    }
  },
  {
    text: "Genau deshalb sind wir hier. Durch SafeSpace lernst du, wie du deine Daten sicher schützt und welche Gefahren auf Social Media Plattformen lauern.",
    typeEvil: "disguised",
    expressionEvil: "angry",
    expressionGood: "smiling",
    styleEvil: styleEvilHidden,
    styleGood: styleEvilCenter,
  },
  {
    text: "Lass uns gemeinsam durchstarten und sicherstellen, dass dir sowas nie wieder passiert!",
    typeEvil: "disguised",
    expressionEvil: "angry",
    expressionGood: "resting",
    styleEvil: styleEvilHidden,
    styleGood: styleEvilCenter,
  },
  {
    text: "Bist du bereit? Starte jetzt mit SafeSpace und werde ein Meister im Schutz deiner Daten!",
    typeEvil: "disguised",
    expressionEvil: "angry",
    expressionGood: "resting",
    styleEvil: styleEvilHidden,
    styleGood: styleEvilCenter,
  },
]

async function geoFindMe() {
  return new Promise<void>((resolve, reject) => {
    console.log("Find me")
    if(!navigator.geolocation) {
      reject()
    }else{
      navigator.geolocation.getCurrentPosition(() => resolve(), reject, {timeout: 300, enableHighAccuracy: true})
    }
  })
}


export default function Intro() {
  const [state, setState] = useState(0);
  const [name, setName] = useState("")
  const [textInput, setTextInput] = useState("")
  const router = useRouter();

  const {
    text,
    expressionGood,
    rotationGood,
    styleGood,
    expressionEvil,
    rotationEvil,
    typeEvil,
    styleEvil,
    input
  } = states[state]

  const formattedText = text?.replaceAll("[Name]", name)

  useEffect(() => {
    setTimeout(() => {
      setState(1)
    }, 200)
  }, []);

  function onInput(input: string) {
    setTextInput(input)
    if(state == 1) {
      setName(input)
    }
  }

  const finish = useCallback(async () => {
    const userService = new PersistUserService();
    await userService.setAchievement(AchievementId.INTRO_FINISHED, true);
    router.push("/space");
  }, [router])

  const next = useCallback(async () => {
    setTextInput("")
    if (state < states.length - 1) {
      setState(state + 1)
    } else {
      await finish()
    }
  }, [finish, state])

  useEffect(() => {
    if(input?.type == "location") {
      geoFindMe().finally(next)
    }
  }, [input, next]);


  return (
    <div className="px-6 w-full h-full relative flex flex-col">

      <div className="h-full items-center relative flex">

        <Robot expression={expressionEvil ?? "resting"}
               type={typeEvil}
               headRotation={rotationEvil ?? 0}
               style={styleEvil}
               className="w-36 h-36 absolute transition-all duration-700"/>

        <Robot expression={expressionGood ?? "resting"}
               type="default"
               headRotation={rotationGood ?? 0}
               style={styleGood}
               className="w-36 h-36 absolute transition-all duration-700"/>

      </div>

      <div className="flex-shrink-0 flex flex-col justify-center items-center">
        <AnimatedText className="text-xl mb-4 max-w-[500px] text-center">
          {formattedText ?? ""}
        </AnimatedText>

        {input && input.type == "text" && <input
            className="flex border-2 rounded-xl placeholder:text-lg text-xl p-3 md:p-4 lg:w-7/12 sm:w-full h-14 max-w-[290px]"
            placeholder={input.placeholder}
            onChange={event => onInput(event.target.value)}/>}

        {input && input.type == "options" && <div className="flex flex-wrap gap-2 justify-center my-6">
          {input.options?.map(b => (<Button key={b} onClick={next}>{b}</Button>))}
        </div>}

        {((input?.type == "text" && textInput != "") || !input)  && <Button onClick={next} className="mt-6">Weiter</Button>}


      </div>

    </div>
  );
}
