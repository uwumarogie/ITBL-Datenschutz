"use client";

import Robot, { RobotExpression } from "@/components/robot/robot";
import { CSSProperties, useEffect, useState } from "react";
import Button from "@/components/Button";
import clsx from "clsx";
import { useRouter } from "next/navigation";

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
    expression: "smiling",
    rotation: 0,
    text: "Hey! Ich bin AIris. Mein Boss hat mir aufgetragen, ein Paar Instagram Profile anzusehen und passende Werbung zu verteilen. ",
  },
  {
    expression: "resting",
    rotation: -0.4,
    text: "Ich bin ziemlich neu hier, vielleicht kannst du mir dabei helfen?",
    style: {
      marginLeft: "100px",
      marginBottom: "30px",
    },
  },
  {
    expression: "angry",
    rotation: 0.6,
    text: "Ich darf heute noch den ganzen Tag die Arbeit meines Chefs machen!!!",
    style: {
      marginRight: "150px",
      marginTop: "30px",
    },
  },
  {
    expression: "sad",
    rotation: -0.1,
    text: "Leider komme ich aus meiner Blechbüchse nicht so leicht raus.",
    style: {
      width: "150px",
      height: "150px",
    },
  },
  {
    expression: "smiling",
    rotation: 0,
    text: "Egal. Lass uns loslegen!",
    style: {
      width: "300px",
      height: "300px",
    },
  },
  {
    expression: "smiling",
    rotation: 0,
    text: "",
    style: {
      position: "absolute",
      marginLeft: "calc(100% + 400px)",
    },
  },
];
export default function DataProcessing0() {
  const [state, setState] = useState(0);
  const router = useRouter();

  useEffect(() => {
    const id = setTimeout(() => {
      setState(1);
    }, 200);
    return () => clearTimeout(id);
  }, []);

  function onClick() {
    setState((state) => (state + 1) % states.length);
    console.log(state);
    if (state + 2 == states.length) {
      setTimeout(() => {
        router.push("/space/daten-verarbeitung/1");
      }, 1000);
    }
  }

  return (
    <div className="relative h-full w-full flex flex-col">
      <div className="w-full h-full flex flex-col justify-center items-center relative">
        <div className="max-w-96 text-xl font-medium text-center absolute bottom-10">
          {states[state].text}
        </div>

        <Robot
          expression={states[state].expression}
          headRotation={states[state].rotation}
          className="transition-all duration-700 w-52 h-52 absolute"
          style={states[state].style}
        />
      </div>
      <div className="flex justify-center">
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
