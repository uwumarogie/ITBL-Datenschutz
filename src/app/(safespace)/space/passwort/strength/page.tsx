"use client";

import { useEffect, useState } from "react";
import { PasswordData, passwordData } from "@/util/password-quiz-data";
import { IntroductionText } from "@/components/introduction-text";
import { useRouter } from "next/navigation";
import Button from "@/components/button";
import { useUserData } from "@/services/user/UserServiceContext";
import Image from "next/image";
import { Highscore } from "@/model/HighscoresEnum";
import { useMessages } from "@/services/notfication/message-provider";

export default function PasswordStrength() {
  const { userStore } = useUserData();
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

  const addPulseAnimation = (elementId: string) => {
    const elementToPulse = document.getElementById(elementId);
    if (elementToPulse) {
      elementToPulse.classList.add("animate-pointIncrease");
      setTimeout(() => {
        elementToPulse.classList.remove("animate-pointIncrease");
      }, 300);
    }
  };

  const addShakeAnimation = (elementId: string) => {
    const elementToShake = document.getElementById(elementId);
    if (elementToShake) {
      elementToShake.classList.add("animate-shake");
      setTimeout(() => {
        elementToShake.classList.remove("animate-shake");
      }, 500);
    }
  };

  const handleButtonClick = (strength: number) => {
    if (currentQuestion.strength === strength) {
      setCurrentScore((prevScore) => prevScore + 1);
      if (currentScore >= highscore) {
        saveHighscore();
      }
      addPulseAnimation("punkte");
      setButtonStyleCorrect(strength);
      setButtonStyleWrong(-1);
      goToNextQuestion()
    } else {
      addMessage(
        "Das war leider falsch. " + currentQuestion.explanation,
        "error"
      );
      setCurrentScore(0);
      addShakeAnimation("passwort");
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
    passwordAnimation(passwordData[currentQuestionIndex + 1]?.password || passwordData[0]?.password);
    setTimeout(() => setButtonStyleCorrect(-1), 1000);
  };

  const passwordAnimation = (password: string) => {
    const theLetters = "abcdefghijklmnopqrstuvwxyz#%&^+=-";
    const speed = 30;
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

  const loadHighscore = async () => {
    const user = await userStore.loadUser();
    return user ? user.highscores[Highscore.PASSWORD_STRENGTH] : 0;
  };

  const saveHighscore = async () => {
    const user = await userStore.loadUser();
    const highscoreEntry = user ? user.highscores[Highscore.PASSWORD_STRENGTH] : 0;
    if (currentScore > highscoreEntry) {
      userStore.setHighscore(Highscore.PASSWORD_STRENGTH, currentScore + 1);
    }
    setHighscore(currentScore + 1);
  };

  useEffect(() => {
    const fetchHighscore = async () => {
      const loadedHighscore = await loadHighscore();
      setHighscore(loadedHighscore);
    };

    fetchHighscore();
  }, []);

  useEffect(() => {
    if (gameStarted) {
      passwordAnimation(currentQuestion.password);
    }
  }, [gameStarted, currentQuestionIndex]);

  return (
    <div className="flex flex-col max-w-[1100px] lg:px-6 justify-start">
      <div className="flex justify-between mt-4 gap-8">
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
          <div className="flex flex-col justify-center align-center w-full mt-24 md:mt-14">
            <div className="flex flex-col gap-y-12 mb-12 md:mb-28">
              <span id="punkte" className="text-2xl md:text-3xl text-blue-background text-center">
                Punkte: {currentScore}
              </span>

              <div className="flex justify-center w-full">
                <div className="w-full flex justify-center">
                  <span
                    id="passwort"
                    className="bg-blue-contrast p-4 min-w-52 rounded-xl text-2xl md:text-3xl text-white text-start max-w-[400px] w-full"
                  >
                    {displayPassword}
                  </span>
                </div>
              </div>
            </div>

            <div className="flex w-full flex-col md:flex-row items-center md:justify-center space-y-8 md:space-y-0 md:space-x-8">
              <Button
                onClick={() => handleButtonClick(2)}
                style={buttonStyleWrong === 2 ? "red" : buttonStyleCorrect === 2 ? "green" : "default"}
                className="max-w-[200px] w-full"
              >
                stark
              </Button>
              <Button
                onClick={() => handleButtonClick(1)}
                style={buttonStyleWrong === 1 ? "red" : buttonStyleCorrect === 1 ? "green" : "default"}
                className="max-w-[200px] w-full"
              >
                mittel
              </Button>
              <Button
                onClick={() => handleButtonClick(0)}
                style={buttonStyleWrong === 0 ? "red" : buttonStyleCorrect === 0 ? "green" : "default"}
                className="max-w-[200px] w-full"
              >
                schwach
              </Button>
            </div>
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
