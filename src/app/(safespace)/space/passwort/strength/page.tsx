"use client";

import { useEffect, useRef, useState } from "react";
import { IntroductionText } from "@/components/introduction-text";
import { useRouter } from "next/navigation";
import Button from "@/components/button";
import Image from "next/image";
import { useMessages } from "@/services/notfication/message-provider";
import clsx from "clsx";
import { PersistUserService } from "@/services/user/PersistUserService";
import { PasswordData, passwordData } from "@/util/passwort/password-quiz-data";
import { passwordAnimation } from "@/util/passwort/strength-helper";
import { State } from "@/app/(safespace)/space/daten-verarbeitung/kapitel2/level/components/recommendation-quiz";
import RobotInPasswort from "@/components/robot-in-passwort";
import { AchievementId } from "@/util/achievement-data";

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
    expression: "smiling",
    rotation: 0,
    text:
      "Herzlichen Glückwunsch! Du hast gelernt, wie man sichere Passwörter erstell " +
      "und erkennt: mindestens 8 Zeichen lang und eine Mischung aus Kleinbuchstaben, " +
      "Großbuchstaben, Sonderzeichen und Zahlen.",
    style: {
      width: "150px",
      height: "150px",
    },
  },
  {
    expression: "smiling",
    rotation: 0,
    text:
      " Um deine Sicherheit weiter zu erhöhen, nutze die Zwei-Faktor-Authentifizierung " +
      "(2FA). Damit brauchst du zusätzlich zum Passwort einen Code, der dir über SMS " +
      "oder E-Mail zugesendet wird.",
    style: {
      width: "150px",
      height: "150px",
    },
  },
  {
    expression: "smiling",
    rotation: 0,
    text:
      "Außerdem solltest du niemals dasselbe Passwort für mehrere Konten verwenden. \n" +
      "Ein Passwort-Manager kann dir helfen, einzigartige und sichere Passwörter zu \n" +
      "erstellen. Bleib sicher!",
    style: {
      width: "150px",
      height: "150px",
    },
  },
  {
    expression: "smiling",
    rotation: 0,
    text: "",
    style: {
      width: "150px",
      height: "150px",
      marginRight: "calc(100% + 400px)",
    },
    delay: 3000,
    end: true,
  },
];

export default function PasswordStrength() {
  const [highscore, setHighscore] = useState(0);
  const [currentScore, setCurrentScore] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);
  const router = useRouter();
  const { addMessage } = useMessages();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [buttonStyleWrong, setButtonStyleWrong] = useState(-1);
  const [buttonStyleCorrect, setButtonStyleCorrect] = useState(-1);
  const [displayPassword, setDisplayPassword] = useState("");
  const currentQuestion = passwordData[currentQuestionIndex];
  const [animateShake, setAnimateShake] = useState(false);
  const [animatePulse, setAnimatePulse] = useState(false);
  const [continueGame, setContinueGame] = useState(false);
  const [moduleFinished, setModuleFinished] = useState(false);
  const userServiceRef = useRef<PersistUserService | null>(null);

  useEffect(() => {
    const context = new PersistUserService();
    const fetchHighScore = async () => {
      const loadedHighScore = await context.getHighScore("PASSWORD_STRENGTH");
      setHighscore(loadedHighScore);
    };

    const setAchievement = async () => {
      if (highscore === 15) {
        await userServiceRef.current?.setAchievement("PASSWORD_STRENGTH", true);
      }
    };
    fetchHighScore();
    setAchievement();
  }, [highscore]);

  useEffect(() => {
    userServiceRef.current = new PersistUserService();
    const fetchAchievements = async () => {
      let finished;
      const achievements = await userServiceRef.current?.getAchievement();
      if (Array.isArray(achievements)) {
        finished = achievements
          .map((a) => a.achievementEnum)
          .includes(AchievementId.PASSWORT_FINISHED);
      } else {
        finished =
          AchievementId.PASSWORT_FINISHED === achievements?.achievementEnum;
      }
      setModuleFinished(finished);
    };

    fetchAchievements();
  }, []);

  useEffect(() => {
    if (gameStarted) {
      passwordAnimation(currentQuestion.password, setDisplayPassword);
    }
  }, [gameStarted, currentQuestionIndex, currentQuestion.password]);

  const handleButtonClick = (strength: number) => {
    if (currentQuestion.strength === strength) {
      setCurrentScore((prevScore) => prevScore + 1);
      if (currentScore >= highscore) {
        saveHighScore();
      }
      setAnimatePulse(true);
      setTimeout(() => setAnimatePulse(false), 300);
      setButtonStyleCorrect(strength);
      setButtonStyleWrong(-1);
      goToNextQuestion();
    } else {
      addMessage(
        "Das war leider falsch. " + currentQuestion.explanation,
        "error",
      );
      setCurrentScore(0);
      setAnimateShake(true);
      setTimeout(() => setAnimateShake(false), 500);
      setButtonStyleWrong(strength);
      setButtonStyleCorrect(-1);
    }
  };

  const goToNextQuestion = () => {
    if (currentQuestionIndex < passwordData.length - 1) {
      setCurrentQuestionIndex((curr) => curr + 1);
    } else {
      setCurrentQuestionIndex(0);
    }
    passwordAnimation(
      passwordData[currentQuestionIndex + 1]?.password ||
        passwordData[0]?.password,
      setDisplayPassword,
    );
    setTimeout(() => setButtonStyleCorrect(-1), 1200);
  };

  const saveHighScore = async () => {
    setHighscore((prevScore) => prevScore + 1);
    await userServiceRef.current?.setHighScore(
      "PASSWORD_STRENGTH",
      currentScore + 1,
    );
  };

  return (
    <div className="flex flex-col max-w-[1100px] lg:px-6 justify-start h-full">
      <div className="flex justify-between mt-4 gap-8 h-full">
        {!gameStarted ? (
          <>
            <Intro
              setGameStarted={setGameStarted}
              currentQuestion={currentQuestion}
              setDisplayPassword={setDisplayPassword}
            />
          </>
        ) : (
          <div className="flex flex-col w-full overflow-hidden">
            {highscore == 3 && !continueGame && !moduleFinished ? (
              <div className="flex  flex-col justify-center items-center mt-72">
                <RobotInPasswort
                  states={states}
                  setContinueGame={setContinueGame}
                />
              </div>
            ) : (
              <>
                <PlayGame
                  animatePulse={animatePulse}
                  animateShake={animateShake}
                  buttonStyleCorrect={buttonStyleCorrect}
                  buttonStyleWrong={buttonStyleWrong}
                  currentScore={currentScore}
                  displayPassword={displayPassword}
                  handleButtonClick={handleButtonClick}
                />

                <Button
                  className="md:mb-2 max-w-[100px] bg-gray-600 hover:bg-gray-700 mt-10 text-sm"
                  onClick={() => router.push("/space/passwort/builder")}
                >
                  Zurück
                </Button>
              </>
            )}
          </div>
        )}
        <div className="absolute top-[70px] sm:top-[130px] right-6 sm:right-16 flex flex-col min-w-[104px]">
          <Image
            src="/trophy.svg"
            alt="Highscore"
            width={90}
            height={90}
            className="mx-auto"
          />
          <span className="text-xl text-blue-background">High Score</span>
          <span className="flex relative justify-center w-[50px] h-[36px] text-2xl bottom-[94px] left-[27px]">
            {highscore}
          </span>
        </div>
      </div>
    </div>
  );
}

type IntroProps = {
  setGameStarted: (bool: boolean) => void;
  currentQuestion: PasswordData;
  setDisplayPassword: (str: string) => void;
};

function Intro({
  setGameStarted,
  currentQuestion,
  setDisplayPassword,
}: IntroProps) {
  return (
    <div className="flex flex-col gap-y-12">
      <IntroductionText
        headline="Bewerte die Stärke des Passworts"
        text="Ein Passwort gilt nur als stark, wenn alle Kriterien erfüllt sind. Ist nur eine Bedingung falsch gilt das Passwort als mittel und ansonten als schwach. Du bekommst für jedes richtig eingeordnete Passwort einen Punkt. Falls du das Passwort falsch einordnest wird deine Punktzahl auf 0 zurückgesetzt."
      />
      <Button
        onClick={() => {
          setGameStarted(true);
          passwordAnimation(currentQuestion.password, setDisplayPassword);
        }}
        className="max-w-[300px]"
      >
        Spiel starten
      </Button>
    </div>
  );
}

function PlayGame({
  animatePulse,
  animateShake,
  buttonStyleCorrect,
  buttonStyleWrong,
  currentScore,
  displayPassword,
  handleButtonClick,
}: {
  animatePulse: boolean;
  animateShake: boolean;
  buttonStyleCorrect: number;
  buttonStyleWrong: number;
  currentScore: number;
  displayPassword: string;
  handleButtonClick: (index: number) => void;
}) {
  return (
    <div className="flex flex-col justify-between align-center w-full mt-24 md:mt-14">
      <div>
        <div className="flex flex-col gap-y-12 mb-12 md:mb-28">
          <span
            className={clsx(
              "text-2xl md:text-3xl text-blue-background text-center",
              animatePulse && "animate-pointIncrease",
            )}
          >
            Punkte: {currentScore}
          </span>

          <div className="flex justify-center w-full">
            <div className="w-full flex justify-center">
              <span
                className={clsx(
                  "bg-blue-contrast p-4 min-w-52 rounded-xl text-2xl md:text-3xl text-white text-start max-w-[400px] w-full",
                  animateShake && "animate-shake",
                )}
              >
                {displayPassword}
              </span>
            </div>
          </div>
        </div>
        <div className="flex w-full flex-col md:flex-row items-center md:justify-center space-y-8 md:space-y-0 md:space-x-8">
          <Button
            onClick={() => handleButtonClick(2)}
            style={
              buttonStyleWrong === 2
                ? "red"
                : buttonStyleCorrect === 2
                  ? "green"
                  : "default"
            }
            className="max-w-[200px] w-full"
          >
            stark
          </Button>
          <Button
            onClick={() => handleButtonClick(1)}
            style={
              buttonStyleWrong === 1
                ? "red"
                : buttonStyleCorrect === 1
                  ? "green"
                  : "default"
            }
            className="max-w-[200px] w-full"
          >
            mittel
          </Button>
          <Button
            onClick={() => handleButtonClick(0)}
            style={
              buttonStyleWrong === 0
                ? "red"
                : buttonStyleCorrect === 0
                  ? "green"
                  : "default"
            }
            className="max-w-[200px] w-full"
          >
            schwach
          </Button>
        </div>
      </div>
    </div>
  );
}
