"use client";
import Button from "@/components/button";
import { useUserData } from "@/services/user/UserServiceContext";
import { useRouter } from "next/navigation";
import { useState } from "react";
import {
  adjectives,
  animals,
  uniqueNamesGenerator,
} from "unique-names-generator";

export default function Home() {
  const [erstesDivOffen, setErstesDivOffen] = useState(false);
  const [zweitesDivOffen, setZweitesDivOffen] = useState(false);
  const router = useRouter();
  const { userStore } = useUserData();
  const [username, setUsername] = useState<string>("");
  const generateUsername = () =>
    setUsername(
      uniqueNamesGenerator({
        dictionaries: [adjectives, animals],
        separator: " ",
        style: "capital",
      }),
    );
  const beitrittcode: "C3-pQ-d6" = "C3-pQ-d6";

  return (
    <div className="flex flex-col justify-center items-center h-[100vh] bg-blue-background">
      <h1 className="block text-5xl text-white font-mono mb-5">Safe Space</h1>
      <div className="flex flex-col space-y-4 justify-center items-center w-200 p-20 shadow-lg bg-blue-200 rounded-3xl">
        <div className="flex space-y-2 flex-col justify-center w-100 p-10 shadow-lg bg-white rounded-3xl">
          <div className="flex space-x-5 justify-center">
            {!zweitesDivOffen && (
              <Button onClick={() => setErstesDivOffen(!erstesDivOffen)}>
                Klasse erstellen
              </Button>
            )}
            {!erstesDivOffen && (
              <Button onClick={() => setZweitesDivOffen(!zweitesDivOffen)}>
                Klasse beitreten
              </Button>
            )}
          </div>
          <div className="flex space-x-4">
            {erstesDivOffen && (
              <div className="space-y-4 border border-gray-400 rounded-3xl p-2">
                <h1 className="block text-xl mb-2 mr-4 font-mono ">
                  Erstelle eine Klasse
                </h1>
                <div className="flex space-x-5 justify-center">
                  <div className="space-y-4 rounded-3xl p-2">
                    <label className="block text-base mb-2">Benutzername</label>
                    <span className="flex flex-col justify-center items-center border border-gray-400 rounded p-2">
                      {username}
                    </span>
                    <Button
                      className="block text-xs mb-2"
                      onClick={generateUsername}
                    >
                      Generiere Benutzername
                    </Button>
                  </div>
                  <div className="space-y-4 rounded-3xl p-2">
                    <label className="block text-base mb-2">Klassen-Code</label>
                    <span className="flex flex-col justify-center items-center border border-gray-400 rounded p-2">
                      {beitrittcode}
                    </span>
                    <div className="flex flex-row justify-center space-x-1">
                      <Button className="block text-xs mb-2">Kopieren</Button>
                      <Button className="block text-xs mb-2">QR-Code</Button>
                    </div>
                  </div>
                </div>
                <label className="block text-base mb-2">Info</label>
                <h1 className="text-xs border border-gray-400 rounded-2xl p-2">
                  Wenn du eine Klasse erstellst, kannst du die Webseite entweder
                  alleine
                  <br></br>
                  oder, wenn du den Code teilst mit deinen Freunden oder deiner
                  Klasse erkunden.
                </h1>
              </div>
            )}
            {zweitesDivOffen && (
              <div className="space-y-4 border border-gray-400 rounded-3xl p-2">
                <h1 className="text-xl font-mono">Klasse beitreten</h1>
                <div className="flex space-x-5 justify-center">
                  <div className="space-y-4 rounded-3xl p-2">
                    <label className="block text-base mb-2">Benutzername</label>
                    <span className="flex flex-col justify-center items-center border border-gray-400 rounded p-2">
                      {username}
                    </span>
                    <Button
                      className="block text-xs mb-2"
                      onClick={generateUsername}
                    >
                      Generiere Benutzername
                    </Button>
                  </div>
                  <div className="space-y-4 rounded-3xl p-2">
                    <label className="block text-base mb-2">Code</label>
                    <input
                      type="text"
                      id="username"
                      className="shadow-lg border border-gray-400 rounded p-2"
                      placeholder="Gib einen Klassen-Code ein"
                    ></input>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        <div>
          {(erstesDivOffen || zweitesDivOffen) && (
            <Button
              onClick={async () => {
                await userStore.initUser(username).then(() => {
                  router.push("/space");
                });
              }}
              className="block text-base mb-2"
            >
              Start
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
