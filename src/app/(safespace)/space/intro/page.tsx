"use client";

import Button from "@/components/button";
import { PersistUserService } from "@/services/user/PersistUserService";
import { AchievementId } from "@/util/achievement-data";
import { useRouter } from "next/navigation";
import Robot, { RobotExpression } from "@/components/robot/robot";
import AnimatedText from "@/components/animated/animated-text";
import { CSSProperties, useCallback, useEffect, useState } from "react";
import { useTranslations } from "next-intl";

type IntroInput = {
  type: "text" | "options" | "location";
  text?: string;
  placeholder?: string;
  options?: string[];
};

type State = {
  text?: string;
  speaker?: string;
  expressionGood?: RobotExpression;
  rotationGood?: number;
  styleGood?: CSSProperties;
  expressionEvil?: RobotExpression;
  rotationEvil?: number;
  typeEvil?: "evil" | "disguised";
  styleEvil?: CSSProperties;
  input?: IntroInput;
};

const styleEvilCenter = {
  right: "calc(50% - 4.5rem)",
};
const styleEvilLeft = {
  right: "calc(75% - 4.5rem)",
};
const styleEvilHidden = {
  right: "calc(100% + 4.5rem)",
};

const styleGoodHidden = {
  right: "-12rem",
};
const styleGoodRight = {
  right: "calc(25% - 4.5rem)",
};

async function geoFindMe() {
  return new Promise<void>((resolve, reject) => {
    if (!navigator.geolocation) {
      reject();
    } else {
      navigator.geolocation.getCurrentPosition(() => resolve(), reject, {
        timeout: 300,
        enableHighAccuracy: true,
      });
    }
  });
}

export default function Intro() {
  const t = useTranslations('intro');
  const [state, setState] = useState(0);
  const [name, setName] = useState("");
  const [textInput, setTextInput] = useState("");
  const router = useRouter();
  const states: State[] = [
    {
      typeEvil: "disguised",
      styleEvil: styleEvilCenter,
      styleGood: styleGoodHidden,
    },
    {
      text: t('welcomeMessage'),
      typeEvil: "disguised",
      styleEvil: styleEvilCenter,
      styleGood: styleGoodHidden,
      input: {
        type: "text",
        placeholder: t('namePlaceholder'),
      },
    },
    {
      text: t('socialMediaMessage'),
      typeEvil: "disguised",
      expressionEvil: "smiling",
      styleEvil: styleEvilCenter,
      styleGood: styleGoodHidden,
      input: {
        type: "options",
        options: [t('optionInstagram'), t('optionTiktok'), t('optionSnapchat'), t('optionTwitter'), t('optionOther')],
      },
    },
    {
      text: t('hobbiesMessage'),
      typeEvil: "disguised",
      styleEvil: styleEvilCenter,
      styleGood: styleGoodHidden,
      input: {
        type: "text",
        placeholder: t('hobbiesPlaceholder'),
      },
    },
    {
      text: t('locationRequest'),
      typeEvil: "disguised",
      styleEvil: styleEvilCenter,
      styleGood: styleGoodHidden,
      input: {
        type: "location",
      },
    },
    {
      text: t('birthdayRequest'),
      typeEvil: "disguised",
      styleEvil: styleEvilCenter,
      styleGood: styleGoodHidden,
      input: {
        type: "text",
      },
    },
    {
      text: t('warningMessage'),
      typeEvil: "disguised",
      expressionEvil: "sad",
      expressionGood: "angry",
      speaker: "SafeBot",
      styleEvil: styleEvilLeft,
      styleGood: styleGoodRight,
    },
    {
      text: t('evilResponse'),
      typeEvil: "evil",
      expressionEvil: "angry",
      expressionGood: "angry",
      speaker: "Robo-X",
      styleEvil: styleEvilLeft,
      styleGood: styleGoodRight,
    },
    {
      text: t('safeBotExplanation'),
      typeEvil: "evil",
      expressionEvil: "angry",
      expressionGood: "angry",
      speaker: "SafeBot",
      styleEvil: styleEvilLeft,
      styleGood: { ...styleGoodRight, width: "12rem", height: "12rem" },
      input: {
        type: "options",
        options: [t('optionHarmless')],
      },
    },
    {
      text: t('safeSpacePurpose'),
      typeEvil: "evil",
      expressionEvil: "angry",
      expressionGood: "resting",
      speaker: "SafeBot",
      styleEvil: styleEvilHidden,
      styleGood: styleEvilCenter,
    },
    {
      text: t('motivationMessage'),
      typeEvil: "evil",
      expressionEvil: "angry",
      expressionGood: "smiling",
      speaker: "SafeBot",
      styleEvil: styleEvilHidden,
      styleGood: styleEvilCenter,
    },
    {
      text: t('readyToStart'),
      typeEvil: "evil",
      expressionEvil: "angry",
      expressionGood: "resting",
      speaker: "SafeBot",
      styleEvil: styleEvilHidden,
      styleGood: styleEvilCenter,
    },
  ];

  const {
    text,
    speaker,
    expressionGood,
    rotationGood,
    styleGood,
    expressionEvil,
    rotationEvil,
    typeEvil,
    styleEvil,
    input,
  } = states[state];

  const formattedText = text?.replaceAll("[Name]", name);

  useEffect(() => {
    setTimeout(() => {
      setState(1);
    }, 200);
  }, []);

  function onInput(input: string) {
    setTextInput(input.trim());
    if (state == 1) {
      setName(input.trim());
    }
  }

  const finish = useCallback(async () => {
    const userService = new PersistUserService();
    await userService.setAchievement(AchievementId.INTRO_FINISHED, true);
    router.push("/space");
  }, [router]);

  const next = useCallback(async () => {
    setTextInput("");
    if (state < states.length - 1) {
      setState(state + 1);
    } else {
      await finish();
    }
  }, [finish, state]);

  useEffect(() => {
    if (input?.type == "location") {
      geoFindMe().finally(next);
    }
  }, [input, next]);

  return (
    <div className="px-6 w-full h-full relative flex flex-col">
      <div className="h-full items-center relative flex">
        <Robot
          expression={expressionEvil ?? "resting"}
          type={typeEvil}
          headRotation={rotationEvil ?? 0}
          style={styleEvil}
          className="w-36 h-36 absolute transition-all duration-700"
        />

        <Robot
          expression={expressionGood ?? "resting"}
          type="default"
          headRotation={rotationGood ?? 0}
          style={styleGood}
          className="w-36 h-36 absolute transition-all duration-700"
        />
      </div>

      <div className="flex-shrink-0 flex flex-col justify-center items-center">
        {speaker && <strong>{speaker}:</strong>}
        <AnimatedText className="text-xl mb-4 max-w-[500px] text-center">
          {formattedText ?? ""}
        </AnimatedText>

        {input && input.type == "text" && (
          <input
            className="flex border-2 rounded-xl placeholder:text-lg text-xl p-3 md:p-4 lg:w-7/12 sm:w-full h-14 max-w-[290px]"
            placeholder={input.placeholder}
            onChange={(event) => onInput(event.target.value)}
          />
        )}

        {input && input.type == "options" && (
          <div className="flex flex-wrap gap-2 justify-center my-6">
            {input.options?.map((b) => (
              <Button key={b} onClick={next}>
                {b}
              </Button>
            ))}
          </div>
        )}

        {((input?.type == "text" && textInput != "") || !input) && (
          <Button onClick={next} className="mt-6">
            {t('next')}
          </Button>
        )}
      </div>
    </div>
  );
}
