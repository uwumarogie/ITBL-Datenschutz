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
import { useTranslations } from "next-intl";

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
  const t = useTranslations('landingpage');
  const [checkboxChecked, setCheckboxChecked] = useState(false);
  const [dataProtectionAgreed, setDataProtectionAgreed] = useState(false);
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
            {t('welcome')}
          </h1>
          {!dataProtectionAgreed && (
            <div className="flex flex-col space-y-4 mx-4 lg:mx-10 w-200 p-4 lg:p-10 shadow-lg bg-blue-200 rounded-3xl max-h-[80%]">
              <p>
                {t('dataProtectionPrompt')}
              </p>
              <div className="py-4 px-6 bg-white rounded-xl overflow-y-auto">
                <h3 className="text-2xl font-semibold text-blue-background">
                  {t('dataProtectionTitle')}
                </h3>
                <div>
                  <h4 className="text-xl font-semibold mb-4 mt-6">
                    {t('section1.title')}
                  </h4>
                  <h5 className="text-lg font-semibold mb-2 mt-4">
                    {t('section1.subtitle1')}
                  </h5>
                  {t('section1.content1')}
                  <h5 className="text-lg font-semibold mb-2 mt-4">
                    {t('section1.subtitle2')}
                  </h5>
                  <h6 className="text-sm font-semibold mb-1 mt-2">
                    {t('section1.content2.subtitle')}
                  </h6>
                  {t('section1.content2.paragraph')}
                  <ul className="list-disc ml-4">
                    <li>{t('section1.content2.list.item1')}</li>
                    <li>{t('section1.content2.list.item2')}</li>
                    <li>{t('section1.content2.list.item3')}</li>
                    <li>{t('section1.content2.list.item4')}</li>
                    <li>{t('section1.content2.list.item5')}</li>
                    <li>{t('section1.content2.list.item6')}</li>
                    <li>{t('section1.content2.list.item7')}</li>
                    <li>{t('section1.content2.list.item8')}</li>
                    <li>{t('section1.content2.list.item9')}</li>
                  </ul>
                  <p>{t('section1.content2.p1')}</p>
                  <p>{t('section1.content2.p2')}</p>
                  <h6 className="text-sm font-semibold mb-1 mt-2">
                    {t('section1.content3.subtitle')}
                  </h6>
                  <p>{t('section1.content3.paragraph')}</p>
                  <h6 className="text-sm font-semibold mb-1 mt-2">
                    {t('section1.content4.subtitle')}
                  </h6>
                  <p>{t('section1.content4.paragraph')}</p>
                  <h6 className="text-sm font-semibold mb-1 mt-2">
                    {t('section1.content5.subtitle')}
                  </h6>
                  <p>{t('section1.content5.paragraph')}</p>
                  <h5 className="text-lg font-semibold mb-2 mt-4">
                    {t('section2.title')}
                  </h5>
                  <p>{t('section2.paragraph')}</p>
                </div>
              </div>
              <div className="flex flex-col">
                <div>
                  <input
                    id="data_agreement"
                    type="checkbox"
                    className="mr-2"
                    onChange={(ev) => setCheckboxChecked(ev.target.checked)}
                  />
                  <label htmlFor="data_agreement">
                    {t('agreementText')}
                  </label>
                </div>
                <Button
                  className="mt-4"
                  onClick={() => setDataProtectionAgreed(checkboxChecked)}
                >
                  {t('continue')}
                </Button>
              </div>
            </div>
          )}
          {dataProtectionAgreed && (
            <>
              <div className="flex flex-col space-y-4 justify-center items-center w-200 p-10 shadow-lg bg-blue-200 rounded-3xl">
                <div className="flex space-x-5 justify-center">
                  {!mode && (
                    <div className="flex flex-col md:flex-row gap-5">
                      <Button
                        onClick={() => handleModeSelection("singlePlayer")}
                        className="flex justify-center w-full md:w-72 h-14 p-5 text-2xl"
                      >
                        {t('singlePlayer')}
                      </Button>
                      <Button
                        onClick={() => handleModeSelection("multiPlayer")}
                        className="flex justify-center w-full md:w-72 h-14 p-5 text-2xl"
                      >
                        {t('multiPlayer')}
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
                      {t('start')}
                    </Button>
                  )}
                </div>
              </div>
            </>
          )}

          <span className="absolute bottom-3 w-full text-center">
            <span
              onClick={() => setShowImpressum(true)}
              className="text-white text-sm opacity-50 hover:opacity-100 hover:underline hover:cursor-pointer"
            >
              {t('impressum')}
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
            className="ml-6 mt-4 max-w-[10rem]"
          >
            {t('back')}
          </Button>
        </div>
      )}
    </div>
  );
}
