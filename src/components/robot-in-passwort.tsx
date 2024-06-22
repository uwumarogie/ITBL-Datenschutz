"use client";
import AnimatedText from "@/components/animated/AnimatedText";
import Robot, { RobotExpression } from "@/components/robot/robot";
import Button from "@/components/button";
import clsx from "clsx";
import { CSSProperties, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

type RobotIntroductionProps = {
  states: State[];
  setContinueGame: (value: boolean) => void;
};

export type State = {
  expression: RobotExpression;
  rotation: number;
  text: string;
  style?: CSSProperties | undefined;
};

export default function RobotInPasswort({
  states,
  setContinueGame,
}: RobotIntroductionProps) {
  const [state, setState] = useState(0);
  const router = useRouter();

  useEffect(() => {
    const id = setTimeout(() => {
      setState(1);
    }, 200);
    return () => clearTimeout(id);
  }, []);

  function onClick() {
    setState((prev) => prev + 1);
  }

  return (
    <>
      {state + 1 != states.length ? (
        <div className="relative h-full w-full flex flex-col">
          <div className="w-full h-full flex flex-col justify-center items-center relative">
            <div className="max-w-lg text-xl font-medium text-center absolute bottom-24">
              <AnimatedText>{states[state].text}</AnimatedText>
            </div>

            <Robot
              expression={states[state].expression}
              headRotation={states[state].rotation}
              className="transition-all duration-700 w-52 h-52 absolute"
              style={states[state].style}
            />
          </div>
          <div className="flex justify-center mt-24">
            <Button
              className={clsx(
                state == states.length - 1 && "opacity-0 pointer-events-none",
                "transition-all",
              )}
              onClick={onClick}
            >
              Weiter
            </Button>
          </div>
        </div>
      ) : (
        <div className="flex flex-col gap-y-4">
          <Button onClick={() => setContinueGame(true)}>Weiterspielen</Button>
          <Button onClick={() => router.push("/space")}>
            Zurück zur Startseite
          </Button>
        </div>
      )}
    </>
  );
}
