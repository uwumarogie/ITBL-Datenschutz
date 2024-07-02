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
import Impressum from "./(safespace)/impressum/page";
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

    if (typeof window !== "undefined" && window.localStorage) {
      localStorage.setItem("userId", result.userData[0].id);
    }

    if (
      gameCode !== "" &&
      typeof window !== "undefined" &&
      window.localStorage
    ) {
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
  const [showImpressum, setShowImpressum] = useState(false);

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
      typeof window !== "undefined" &&
      window.localStorage &&
      (localStorage.getItem("userId") === null || username !== undefined)
    ) {
      await createPlayer(username, mode, gameCode);
    }
    router.replace("/space");
  };

  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      window.localStorage &&
      localStorage.getItem("userId") !== null
    ) {
      redirect("/space");
    }
  }, []);

  return (
    <div className="flex flex-col justify-center items-center h-[100vh] bg-blue-background">
      {!showImpressum ? (
        <>
          <h1 className="flex text-xl lg:text-5xl text-white font-mono mb-10 ">
            Willkommen zu Safe Space
          </h1>
          <div className="flex flex-col space-y-4 justify-center items-center w-200 p-10 shadow-lg bg-blue-200 rounded-3xl">
            <div className="flex space-x-5 justify-center">
              {!mode && (
                <div className="flex flex-col md:flex-row gap-5">
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
                </div>
              )}
            </div>
            <>
              {mode === "singlePlayer" && (
                <SinglePlayer
                  username={username}
                  generateUsername={generateUsername}
                />
              )}
              {mode === "multiPlayer" && (
                <Multiplayer
                  username={username}
                  setGameCode={setGameCode}
                  generateUsername={generateUsername}
                />
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
          <span className="absolute bottom-3 w-full text-center">
            <span
              onClick={() => setShowImpressum(true)}
              className="text-white text-sm opacity-50 hover:opacity-100 hover:underline hover:cursor-pointer"
            >
              Impressum
            </span>
          </span>
        </>
      ) : (
        <div className="flex flex-col">
          <span className="h-[80vh] overflow-y-auto text-gray-200">
            <Impressum />
          </span>
          <Button
            onClick={() => setShowImpressum(false)}
            className="ml-6 mt-4 max-w-[150px]"
          >
            Schließen
          </Button>
        </div>
      )}
    </div>
  );
}
