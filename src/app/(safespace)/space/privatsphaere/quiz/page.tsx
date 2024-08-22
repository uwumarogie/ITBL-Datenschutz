"use client";
import { HintCard } from "@/components/hint-card";
import { useRouter } from "next/navigation";
import { useState } from "react";
import QuizList from "@/components/Quiz/quiz-list";
import { QuizParams } from "@/components/Quiz/quiz";
import { AchievementId } from "@/util/achievement-data";
import { useTranslations } from "next-intl";

export default function StartGame() {
  const router = useRouter();
  const t = useTranslations('quiz');

  const [showHintCard, setShowHintCard] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  function onAnswerClick() {
    setShowHintCard(true);
  }

  const quiz: { quiz: QuizParams; explanation: string }[] = [
    {
      quiz: {
        question: t('question1'),
        answers: [
          t('answer1_1'),
          t('answer1_2'),
          t('answer1_3'),
          t('answer1_4'),
        ],
        showCorrectAnswer: true,
        correctAnswer: 2,
        onAnswerClick: onAnswerClick,
      },
      explanation: t('explanation1'),
    },
    {
      quiz: {
        question: t('question2'),
        answers: [
          t('answer2_1'),
          t('answer2_2'),
          t('answer2_3'),
          t('answer2_4'),
        ],
        showCorrectAnswer: true,
        correctAnswer: 0,
        onAnswerClick: onAnswerClick,
      },
      explanation: t('explanation2'),
    },
    {
      quiz: {
        question: t('question3'),
        answers: [
          t('answer3_1'),
          t('answer3_2'),
          t('answer3_3'),
          t('answer3_4'),
        ],
        showCorrectAnswer: true,
        correctAnswer: 3,
        onAnswerClick: onAnswerClick,
      },
      explanation: t('explanation3'),
    },
    {
      quiz: {
        question: t('question4'),
        answers: [
          t('answer4_1'),
          t('answer4_2'),
          t('answer4_3'),
          t('answer4_4'),
        ],
        showCorrectAnswer: true,
        correctAnswer: 1,
        onAnswerClick: onAnswerClick,
      },
      explanation: t('explanation4'),
    },
    {
      quiz: {
        question: t('question5'),
        answers: [
          t('answer5_1'),
          t('answer5_2'),
          t('answer5_3'),
          t('answer5_4'),
        ],
        showCorrectAnswer: true,
        correctAnswer: 2,
        onAnswerClick: onAnswerClick,
      },
      explanation: t('explanation5'),
    },
  ];

  const handleQuestionChange = () => {
    setCurrentQuestionIndex(currentQuestionIndex + 1);
    setShowHintCard(false);
  };

  return (
    <div className="flex flex-col xl:gap-8 2xl:mt-8 px-2 lg:px-4">
      <QuizList
        className="max-w-[1100px]"
        quizzes={quiz.map((q) => q.quiz)}
        onFinish={() => {
          router.push("/space/privatsphaere/perso/1");
        }}
        onNextQuestion={handleQuestionChange}
        achievement={AchievementId.PRIVATSPHAERE_QUIZ}
      />
      <div className="max-w-[400px]">
        {showHintCard && (
          <HintCard
            text={t('hintCard.title')}
            buttonText={t('hintCard.buttonText')}
            hint={quiz[currentQuestionIndex].explanation}
          />
        )}
      </div>
    </div>
  );
}
