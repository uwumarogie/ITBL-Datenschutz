"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Image from "next/image";
import Button from "@/components/button";
import {
  quizzes,
  replaceCharacter,
  topTenPasswords,
} from "@/util/passwort/password-quiz-data";
import QuizList from "@/components/Quiz/quiz-list";
import { AchievementId } from "@/util/achievement-data";
import { useTranslations } from "next-intl";

export default function StartGame() {
  const router = useRouter();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [showHint, setShowHint] = useState(false);
  const t = useTranslations('password.startGame');

  const hintCards = [
    {
      questionIndex: 0,
      text: t("hintCard.topTenTitle"),
      buttonText: t("hintCard.showButtonText"),
      hint: (
        <div className="grid sm:grid-cols-1 grid-cols-3 gap-3 font-bold text-sm">
          {topTenPasswords.map((password, index) => (
            <span key={index}>
              <strong>{index + 1}</strong>. {password}
            </span>
          ))}
        </div>
      ),
    },
    {
      questionIndex: 1,
      text: t("hintCard.replacedLettersTitle"),
      buttonText: t("hintCard.showButtonText"),
      hint: (
        <div className="grid sm:grid-cols-1 grid-cols-3 gap-3 font-bold text-xs">
          {replaceCharacter.map((character, index) => (
            <span key={index}> {character}</span>
          ))}
        </div>
      ),
    },
    {
      questionIndex: 3,
      text: t("hintCard.bruteForceTitle"),
      buttonText: t("hintCard.learnMoreButtonText"),
      hint: t("hintCard.bruteForceHint"),
    },
    {
      questionIndex: 4,
      text: t("hintCard.defenseTitle"),
      buttonText: t("hintCard.learnMoreButtonText"),
      hint: t("hintCard.defenseHint"),
    },
  ];

  const handleQuestionChange = () => {
    setCurrentQuestionIndex(currentQuestionIndex + 1);
    setShowHint(false);
  };

  const currentHintCard = hintCards.find(
    (card) => card.questionIndex === currentQuestionIndex,
  );

  return (
    <div className="flex items-center flex-col xl:gap-8 2xl:mt-8 px-2 lg:px-4">
      <QuizList
        className="max-w-[1100px]"
        quizzes={quizzes}
        onFinish={() => {
          router.push("/space/passwort/builder");
        }}
        onNextQuestion={handleQuestionChange}
        achievement={AchievementId.PASSWORD_QUIZ}
      />
      <div className="max-w-[400px]">
        {currentHintCard && (
          <div
            className="relative rounded-xl p-4 scale-95 w-full h-full"
            style={{ background: "rgba(251, 109, 58, 0.15)" }}
          >
            <div className="absolute top-[-26px] left-[-26px] w-16 h-16 rounded-full flex items-center justify-center">
              <Image
                src="/question-mark.svg"
                alt={t('questionMarkAlt')}
                width={50}
                height={50}
                priority
              />
            </div>
            <div className="flex flex-col h-full justify-between">
              {showHint ? (
                <div className="flex flex-col w-full">
                  <div className="flex flex-col items-end">
                    <Image
                      src="/cancel.svg"
                      alt={t('cancelAlt')}
                      width={30}
                      height={30}
                      onClick={() => setShowHint(false)}
                      className="cursor-pointer"
                      priority
                    />
                  </div>
                  <div className="px-2 pb-2">{currentHintCard.hint}</div>
                </div>
              ) : (
                <div className="flex justify-between flex-col h-full">
                  <div className="flex flex-col relative justify-start items-start p-6">
                    <span className="font-semibold text-sm pb-4 text-blue-background">
                      {t('hintCardTitle')} {" " + (currentQuestionIndex + 1)}
                    </span>
                    <Button onClick={() => setShowHint(true)}>
                      {t('hintCardButtonText')}
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
