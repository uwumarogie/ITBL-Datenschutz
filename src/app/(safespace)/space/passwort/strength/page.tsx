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
import { State } from "@/app/(safespace)/space/daten-verarbeitung/kapitel2/components/recommendation-quiz";
import RobotInPasswort from "@/components/robot-in-passwort";
import { AchievementId } from "@/util/achievement-data";
import { HintCard } from "@/components/hint-card";
import { useTranslations } from 'next-intl';

const PasswordStrength = () => {
  const t = useTranslations('password.passwordStrength');
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
  const messageService = useMessages();
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
      text: t('state1Text'),
      style: {
        width: "150px",
        height: "150px",
      },
    },
    {
      expression: "smiling",
      rotation: 0,
      text: t('state2Text'),
      style: {
        width: "150px",
        height: "150px",
      },
    },
    {
      expression: "smiling",
      rotation: 0,
      text: t('state3Text'),
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

  useEffect(() => {
    const context = new PersistUserService();
    const fetchHighScore = async () => {
      const loadedHighScore = await context.getHighScore("PASSWORD_STRENGTH");
      setHighscore(loadedHighScore);
    };

    const setAchievement = async () => {
      if (highscore === 15) {
        await userServiceRef.current
          ?.setAchievement(AchievementId.PASSWORD_STRENGTH, true)
          .then((res) => {
            if (res) {
              messageService.showAchievement(AchievementId.PASSWORD_STRENGTH);
            }
          });
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
        t('incorrectAnswerMessage') + ": " + currentQuestion.explanation,
        "error"
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
    <div className="flex flex-col w-full lg:px-6 justify-start">
      <div className="flex justify-between mt-4 gap-8 h-full">
        {!gameStarted ? (
          <Intro
            setGameStarted={setGameStarted}
            currentQuestion={currentQuestion}
            setDisplayPassword={setDisplayPassword}
          />
        ) : (
          <div className="flex flex-col w-full overflow-hidden">
            {highscore === 10 && !continueGame && !moduleFinished ? (
              <div className="flex flex-col justify-center items-center mt-72">
                <RobotInPasswort
                  states={states}
                  setContinueGame={setContinueGame}
                />
              </div>
            ) : (
              <div className="flex flex-col h-full justify-between">
                <PlayGame
                  animatePulse={animatePulse}
                  animateShake={animateShake}
                  buttonStyleCorrect={buttonStyleCorrect}
                  buttonStyleWrong={buttonStyleWrong}
                  currentScore={currentScore}
                  displayPassword={displayPassword}
                  handleButtonClick={handleButtonClick}
                />
                <div className="flex flex-row justify-between mt-12">
                  <Button
                    className="md:mb-2 h-[50px] w-[200px] bg-gray-600 hover:bg-gray-700 text-sm"
                    onClick={() => router.push("/space/passwort/builder")}
                  >
                    Zurück zur Modulübersicht
                  </Button>
                  <HintCard
                    text={t('hintTitle')}
                    buttonText={t('hintButtonText')}
                    hint={t('instruction')}
                    className="max-w-[250px] sm:max-w-[400px] ml-2 flex-end p-2"
                  />
                </div>
              </div>
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
            priority
          />
          <span className="text-xl text-blue-background">High Score</span>
          <span className="flex relative justify-center w-[50px] h-[36px] text-2xl bottom-[94px] left-[27px]">
            {highscore}
          </span>
        </div>
      </div>
    </div>
  );
};

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
  const t = useTranslations('password.passwordStrength');

  return (
    <div className="flex flex-col gap-y-12">
      <IntroductionText
        headline={t('introHeadline')}
        text={t('instruction')}
      />
      <Button
        onClick={() => {
          setGameStarted(true);
          passwordAnimation(currentQuestion.password, setDisplayPassword);
        }}
        className="max-w-[300px]"
      >
        {t('startGameButton')}
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
  const t = useTranslations('password.passwordStrength');

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
            {t('scoreText')} {" " + currentScore}
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
            {t('strongButton')}
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
            {t('mediumButton')}
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
            {t('weakButton')}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default PasswordStrength;
