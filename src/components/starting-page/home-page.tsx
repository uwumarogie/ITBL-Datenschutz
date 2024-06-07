"use client";

import Button from "@/components/button";
import { useRouter } from "next/navigation";
import { SinglePlayer } from "@/components/starting-page/single-player";
import { Multiplayer } from "@/components/starting-page/mult-player";
import { useState } from "react";

export default function HomePage() {
  const [mode, setMode] = useState<"singlePlayer" | "multiPlayer" | null>(null);

  const router = useRouter();

  const handleModeSelection = (
    selectedMode: "singlePlayer" | "multiPlayer",
  ) => {
    setMode(selectedMode);
  };

  return (
    <div className="flex flex-col justify-center items-center h-[100vh] bg-blue-background">
      <h1 className="block text-5xl text-white font-mono mb-10">
        Willkommen zu Safe Space
      </h1>
      <div className="flex flex-col space-y-4 justify-center items-center w-200 p-10 shadow-lg bg-blue-200 rounded-3xl">
        <div className="flex space-x-5 justify-center">
          {!mode && (
            <>
              <Button
                onClick={() => handleModeSelection("singlePlayer")}
                className="flex justify-center w-full md:w-72 h-14 p-5 text-2xl"
              >
                Single Player
              </Button>
              <Button
                onClick={() => handleModeSelection("multiPlayer")}
                className="flex justify-center w-full md:w-72 h-14 p-5 text-2xl"
              >
                Multiplayer
              </Button>
            </>
          )}
        </div>
        <>
          {mode === "singlePlayer" && <SinglePlayer />}
          {mode === "multiPlayer" && <Multiplayer />}
        </>
        <div>
          {mode !== null && (
            <Button
              onClick={() => router.push("/space")}
              className="flex justify-center text-xl w-full h-14 p-5 mb-2"
            >
              Start
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
