"use client";

import React, { CSSProperties, useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Notepad } from "@phosphor-icons/react";
import clsx from "clsx";
import Robot, { RobotExpression } from "@/components/robot/robot";
import AnimatedText from "@/components/animated/animated-text";
import Button from "@/components/button";
import Link from "next/link";

export type State = {
  expression: RobotExpression;
  rotation: number;
  text: string;
  loading?: boolean;
  manualNext?: boolean;
  hideButton?: boolean;
  isRobotQuestion?: boolean;
  end?: boolean;
  delay?: number;
  style?: CSSProperties | undefined;
};

const states: State[] = [
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
    isRobotQuestion: true,
    text: "Ich habe hier ein paar Werbeanzeigen für dich. Welche würde bei Marie am besten ankommen?",
    style: {},
    manualNext: true,
    hideButton: true,
  },
  {
    expression: "resting",
    rotation: 0,
    text: "",
  },
  {
    expression: "smiling",
    rotation: 0,
    text: "Alles klar! Ich schicke ihr gleich deinen Vorschlag und melde dir, ob er bei Marie gut angekommen ist.",
    manualNext: true,
  },
  {
    expression: "resting",
    rotation: 1.5,
    text: "",
    loading: true,
    style: {
      rotate: "30deg",
      marginLeft: "calc(100% + 400px)",
    },
  },
  {
    expression: "resting",
    rotation: -1.5,
    text: "",
    loading: true,
    style: {
      rotate: "-30deg",
      marginLeft: "calc(100% + 400px)",
    },
  },
  {
    expression: "resting",
    rotation: 0,
    text: "",
  },
];

const stateSuccess: State = {
  expression: "smiling",
  rotation: 0,
  text: "Super! Marie hat sofort auf die Anzeige gedrückt, als sie bei ihr aufgeploppt ist!",
  end: true,
};

const stateFailure: State = {
  expression: "sad",
  rotation: 0,
  text: "Schlechte Nachrichten, Marie hat einfach weitergedrückt. Die Anzeige ist nicht gut angekommen.",
  end: true,
};

type RecommendationQuizProps<T extends { isSuccessful: boolean }> = {
  items: T[];
  renderItem: (data: T, onClick: (item: T) => void) => React.ReactNode;
  href: string;
  robotTextQuestion: string;
};

export default function RecommendationQuiz<
  T extends { isSuccessful: boolean },
>({ items, href, renderItem, robotTextQuestion }: RecommendationQuizProps<T>) {
  const [state, setState] = useState(0);
  const router = useRouter();
  const query = useSearchParams();
  const notes = decodeURIComponent(query.get("notes") ?? "");
  const [showNotes, setNotesShowing] = useState(false);
  const [selection, selectSelection] = useState<T | null>(null);

  useEffect(() => {
    const id = setTimeout(() => {
      setState(1);
    }, 200);
    return () => clearTimeout(id);
  }, []);

  function getState(): State {
    if (state >= states.length) {
      return selection?.isSuccessful ? stateSuccess : stateFailure;
    } else {
      return states[state];
    }
  }

  async function onItemClick(item: T) {
    selectSelection(item);
    setState(2);
    await delay(1400);
    setState(3);
  }

  async function onButtonClick() {
    if (state == 3) {
      setState(4);
      await delay(3000);
      setState(5);
      await delay(100);
      setState(6);
      await delay(700);
      setState(7);
    }
  }

  return (
    <div className="relative h-full w-full flex flex-col items-center justify-center">
      {notes && notes != "" && (
        <div className="absolute top-0 left-0 w-full z-10">
          <div
            className="m-2 w-10 h-10 p-2 rounded-full bg-orange-500 inline-flex justify-center items-center shadow-sm hover:scale-105 hover:shadow-xl transition-all cursor-pointer"
            onClick={() => setNotesShowing(!showNotes)}
          >
            <Notepad className="w-full h-full text-white" weight="bold" />
          </div>

          {showNotes && (
            <div className="xl:max-w-[50%] w-full bg-white shadow-xl py-4 px-6 rounded-xl z-30 mt-4">
              <h3 className="font-medium">Deine Notizen</h3>
              <span className="whitespace-pre-wrap">{notes}</span>
            </div>
          )}
        </div>
      )}

      <div
        className={clsx(
          "w-full flex flex-col justify-center items-center relative transition-all flex-shrink-0",
        )}
      >
        {selection && (
          <div
            className={clsx(
              "transition-all duration-700 overflow-hidden",
              state >= 3 ? "h-36 opacity-100" : "h-0 opacity-0",
            )}
          >
            {renderItem(selection, () => {})}
          </div>
        )}

        <Robot
          expression={getState().expression}
          headRotation={getState().rotation}
          className="transition-all duration-700 w-40 h-40"
          style={getState().style}
        />

        {getState().loading && (
          <div className="flex gap-2">
            <div className="w-4 h-4 bg-gray-300 rounded-full animate-bounce"></div>
            <div
              className="w-4 h-4 bg-gray-300 rounded-full animate-bounce"
              style={{ animationDelay: "150ms" }}
            ></div>
            <div
              className="w-4 h-4 bg-gray-300 rounded-full animate-bounce"
              style={{ animationDelay: "200ms" }}
            ></div>
          </div>
        )}

        <div className="max-w-96 mt-10 text-xl font-medium text-center">
          <AnimatedText>
            {getState().isRobotQuestion ? robotTextQuestion : getState().text}
          </AnimatedText>
        </div>

        {getState().manualNext && !getState().hideButton && (
          <Button className="mt-10" onClick={onButtonClick}>
            Weiter
          </Button>
        )}
        {getState().end && (
          <Link href={href}>
            <Button className="mt-10" onClick={() => {}}>
              Weiter
            </Button>{" "}
          </Link>
        )}
      </div>

      <div
        className={clsx(
          "flex flex-col gap-4 w-full h-full my-4 overflow-y-auto transition-all duration-700 delay-300",
          state == 1 ? "opacity-100" : "opacity-0 !h-0",
        )}
      >
        {items.map((item) => {
          return renderItem(item, onItemClick);
        })}
      </div>
    </div>
  );
}

async function delay(delay: number) {
  return new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve();
    }, delay);
  });
}
