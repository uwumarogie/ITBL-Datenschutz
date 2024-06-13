"use client";

import Button from "@/components/button";
import { redirect, useRouter } from "next/navigation";
import { SinglePlayer } from "@/components/LandingPage/single-player";
import { Multiplayer } from "@/components/LandingPage/multi-player";
import { useEffect, useState } from "react";
import {
  adjectives,
  animals,
  uniqueNamesGenerator,
} from "unique-names-generator";
type Mode = "singlePlayer" | "multiPlayer";

async function createPlayer(username: string, mode: string, gameCode: string) {
  try {
    const response = await fetch("/api/createUser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, mode, gameCode }),
    });

    if (!response.ok) {
      throw new Error("Failed to create user");
    }
    const result = await response.json();
    localStorage.setItem("userId", result.userData[0].id);

    if (gameCode !== "") {
      localStorage.setItem("gameCode", result.userData[0].gameCode);
    }
  } catch (error) {
    console.error(error);
    throw new Error("Failed to create user");
  }
}

export default function HomePage() {
  const [mode, setMode] = useState<Mode | null>(null);
  const [username, setUsername] = useState("");
  const [gameCode, setGameCode] = useState("");

  const router = useRouter();
  const generateUsername = () =>
    setUsername(
      uniqueNamesGenerator({
        dictionaries: [adjectives, animals],
        separator: " ",
        style: "capital",
      }),
    );

  useEffect(() => {
    if (!username) {
      generateUsername();
    }
  }, [username]);

  const handleModeSelection = (
    selectedMode: "singlePlayer" | "multiPlayer",
  ) => {
    setMode(selectedMode);
  };

  const handleStartGame = async () => {
    if (
      mode !== null &&
      (localStorage.getItem("userId") === null || username !== undefined)
    ) {
      await createPlayer(username, mode, gameCode)
    }
    router.replace("/space");
  };

  useEffect(() => {
    if (localStorage.getItem("userId") !== null) {
      redirect("/space");
    }
  }, []);

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
          {mode === "singlePlayer" && <SinglePlayer username={username} />}
          {mode === "multiPlayer" && (
            <Multiplayer username={username} setGameCode={setGameCode} />
          )}
        </>
        <div>
          {mode !== null && (
            <Button
              onClick={handleStartGame}
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
