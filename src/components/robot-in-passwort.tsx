"use client";
import AnimatedText from "@/components/animated/AnimatedText";
import Robot, { RobotExpression } from "@/components/robot/robot";
import Button from "@/components/button";
import clsx from "clsx";
import { CSSProperties, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

type RobotIntroductionProps = {
  states: State[];
  href: string;
};

export type State = {
  expression: RobotExpression;
  rotation: number;
  text: string;
  style?: CSSProperties | undefined;
};

export default function RobotInPasswort({
  states,
  href,
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
    if (state + 2 == states.length) {
      setTimeout(() => {
        router.push(href);
      }, 1000);
    }
  }

  return (
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
  );
}
