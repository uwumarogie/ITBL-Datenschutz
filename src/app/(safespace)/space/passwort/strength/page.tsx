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

  const loadHighscore = async () => {
    const user = await userStore.loadUser();
    return user ? user.highscores[Highscore.PASSWORD_STRENGTH] : 0;
  };

  const saveHighscore = async () => {
    const user = await userStore.loadUser();
    const highscoreEntry = user
      ? user.highscores[Highscore.PASSWORD_STRENGTH]
      : 0;
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

  return (
    <div className="flex flex-col max-w-[1100px] lg:px-6 justify-start">
      <div className="flex justify-between mt-4 gap-8">
        <IntroductionText
          headline="Bewerte die Stärke des Passworts"
          text="Ein Passwort gilt nur als stark, wenn alle Kriterien erfüllt sind. Ist nur eine Bedingung falsch gilt das Passwort als mittel und ansonten als schwach. Du bekommst für jedes richtig eingeordnete Passwort einen Punkt. Falls du das Passwort falsch einordnest wird deine Punktzahl auf 0 zurückgesetzt."
        />
        <div className="md:flex flex-col min-w-[104px] hidden">
          <Image
            src="/trophy.svg"
            alt="Highscore"
            width={90}
            height={90}
            className="mx-auto"
          />
          <span className="text-xl text-blue-background">High Score</span>
          <span className="flex justify-center w-[50px] h-[36px] text-2xl relative bottom-[94px] left-[27px]">
            {highscore}
          </span>
        </div>
      </div>
      <PasswordStrengthDisplay
        passwords={passwordData}
        currentScore={currentScore}
        highscore={highscore}
        setCurrentScore={setCurrentScore}
        saveHighscore={saveHighscore}
      />
    </div>
  );
}

const PasswordStrengthDisplay = ({
  passwords,
  currentScore,
  highscore,
  setCurrentScore,
  saveHighscore,
}: {
  passwords: Array<PasswordData>;
  currentScore: number;
  highscore: number;
  setCurrentScore: (score: number) => void;
  saveHighscore: () => void;
}) => {
  const router = useRouter();
  const { addMessage } = useMessages();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [buttonStyleWrong, setButtonStyleWrong] = useState(-1);
  const [buttonStyleCorrect, setButtonStyleCorrect] = useState(-1)
  const currentQuestion = passwords[currentQuestionIndex];

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
      setCurrentScore(currentScore + 1);
      if (currentScore >= highscore) {
        saveHighscore();
      }
      addPulseAnimation("punkte");
      setButtonStyleCorrect(strength)
      setButtonStyleWrong(-1);
      setTimeout(goToNextQuestion, 700)
    } else {
      addMessage(
        "Das war leider falsch. " + currentQuestion.explanation,
        "error",
      );
      setCurrentScore(0);
      addShakeAnimation("passwort");
      setButtonStyleWrong(strength);
      setButtonStyleCorrect(-1)
    }
  };

  const goToNextQuestion = () => {
    setButtonStyleCorrect(-1)
    if (currentQuestionIndex < passwords.length - 1) {
      setCurrentQuestionIndex((curr) => curr + 1);
    } else {
      setFinished(true);
    }
  };

  const [finished, setFinished] = useState(false);

  return (
    <div className="grid grid-rows-1 lg:grid-cols-2 space-y-6 md:mt-8">
      {finished ? (
        <div className="flex flex-col gap-4">
          <span className="text-xl text-blue-background">
            Punkte: {currentScore}
          </span>
          <Button
            onClick={() => {
              saveHighscore();
              router.push("/space/passwort/builder");
            }}
          >
            Weiter
          </Button>
        </div>
      ) : (
        <>
          <div className="flex justify-between md:justify-center">
            <div className="flex flex-col justify-center items-center lg:space-y-8 sm:space-y-4 gap-y-2">
              <span
                id="passwort"
                className="flex bg-blue-contrast p-4 min-w-52 rounded-xl text-white justify-center items-center"
              >
                Passwort: {currentQuestion.password}
              </span>
              <span id="punkte" className="text-2xl text-blue-background">
                Punkte: {currentScore}
              </span>
            </div>
            <div className="flex flex-col min-w-[104px] justify-center md:hidden scale-90">
              <Image
                src="/trophy.svg"
                alt="Highscore"
                width={90}
                height={90}
                className="mx-auto"
              />
              <span className="text-xl text-blue-background">High Score</span>
              <span className="flex justify-center w-[50px] h-[36px] text-2xl relative bottom-[94px] left-[27px]">
                {highscore}
              </span>
            </div>
          </div>

          <div className="flex flex-col lg:space-y-8 space-y-4">
            <Button
              onClick={() => handleButtonClick(2)}
              style={buttonStyleWrong === 2 ? "red" : buttonStyleCorrect === 2 ? "green" : "default"}
            >
              stark
            </Button>
            <Button
              onClick={() => handleButtonClick(1)}
              style={buttonStyleWrong === 1 ? "red" : buttonStyleCorrect === 1 ? "green" : "default"}
            >
              mittel
            </Button>
            <Button
              onClick={() => handleButtonClick(0)}
              style={buttonStyleWrong === 0 ? "red" : buttonStyleCorrect === 0 ? "green" : "default"}
            >
              schwach
            </Button>
          </div>
        </>
      )}
    </div>
  );
};
