"use client";

import { useEffect, useState } from "react";
import { passwordData } from "@/util/password-quiz-data";
import { IntroductionText } from "@/components/introduction-text";
import { useRouter } from "next/navigation";
import Button from "@/components/button";
import Image from "next/image";
import { useMessages } from "@/services/notfication/message-provider";
import clsx from "clsx";
import { PersistUserService } from "@/services/user/PersistUserService";

export default function PasswordStrength() {
  const [highscore, setHighscore] = useState(0);
  const [currentScore, setCurrentScore] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);
  const router = useRouter();
  const [user, setUser] = useState<string | null>(null);
  const { addMessage } = useMessages();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [buttonStyleWrong, setButtonStyleWrong] = useState(-1);
  const [buttonStyleCorrect, setButtonStyleCorrect] = useState(-1);
  const [displayPassword, setDisplayPassword] = useState("");
  const currentQuestion = passwordData[currentQuestionIndex];
  const [animateShake, setAnimateShake] = useState(false);
  const [animatePulse, setAnimatePulse] = useState(false);

  useEffect(() => {
    const fetchHighScore = async () => {
      const context = new PersistUserService();
      const loadedHighScore = await context.getHighScore("PASSWORD_STRENGTH");
      setHighscore(loadedHighScore);
    };

    fetchHighScore();
  }, [highscore]);

  useEffect(() => {
    if (gameStarted) {
      passwordAnimation(currentQuestion.password);
    }
  }, [gameStarted, currentQuestionIndex, currentQuestion.password]);

  useEffect(() => {
    const context = new PersistUserService();
    if (context.userId !== null) {
      setUser(context.userId);
    }
  }, []);

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
    );
    setTimeout(() => setButtonStyleCorrect(-1), 1200);
  };

  const passwordAnimation = (password: string) => {
    const theLetters = "abcdefghijklmnopqrstuvwxyz#%&^+=-";
    const speed = 20;
    const increment = 8;

    let clen = password.length;
    let si = 0;
    let stri = 0;
    let block = "";
    let fixed = "";

    const rustle = (i: number) => {
      setTimeout(() => {
        if (--i) {
          rustle(i);
        }
        nextFrame();
        si = si + 1;
      }, speed);
    };

    const nextFrame = () => {
      for (let i = 0; i < clen - stri; i++) {
        const num = Math.floor(theLetters.length * Math.random());
        const letter = theLetters.charAt(num);
        block += letter;
      }
      if (si === increment - 1) {
        stri++;
      }
      if (si === increment) {
        fixed += password.charAt(stri - 1);
        si = 0;
      }
      setDisplayPassword(fixed + block);
      block = "";
    };

    rustle(clen * increment + 1);
  };

  const saveHighScore = async () => {
    if (user !== null) {
      const context = new PersistUserService();
      return await context.setHighScore("PASSWORD_STRENGTH", currentScore + 1);
    }
    setHighscore((prevScore) => prevScore + 1);
  };

  return (
    <div className="flex flex-col max-w-[1100px] lg:px-6 justify-start h-full">
      <div className="flex justify-between mt-4 gap-8 h-full">
        {!gameStarted ? (
          <div className="flex flex-col gap-y-12">
            <IntroductionText
              headline="Bewerte die Stärke des Passworts"
              text="Ein Passwort gilt nur als stark, wenn alle Kriterien erfüllt sind. Ist nur eine Bedingung falsch gilt das Passwort als mittel und ansonten als schwach. Du bekommst für jedes richtig eingeordnete Passwort einen Punkt. Falls du das Passwort falsch einordnest wird deine Punktzahl auf 0 zurückgesetzt."
            />
            <Button
              onClick={() => {
                setGameStarted(true);
                passwordAnimation(currentQuestion.password);
              }}
              className="max-w-[300px]"
            >
              Spiel Starten
            </Button>
          </div>
        ) : (
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
            <Button
              className="md:mb-2 max-w-[100px] bg-gray-600 hover:bg-gray-700 text-sm"
              onClick={() => router.push("/space/passwort")}
            >
              Zurück
            </Button>
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
