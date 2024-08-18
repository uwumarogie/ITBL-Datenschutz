"use client";

import { useRouter } from "next/navigation";
import { QuizParams } from "@/components/Quiz/quiz";
import QuizList from "@/components/Quiz/quiz-list";
import { AchievementId } from "@/util/achievement-data";
import { useTranslations } from "next-intl";

export default function MasterQuiz() {
  const t = useTranslations('quiz');
  const quizzes: QuizParams[] = [
    {
      question: t('question1'),
      answers: [
        t('answer1-1'),
        t('answer1-2'),
        t('answer1-3'),
        t('answer1-4'),
      ],
      correctAnswer: 0,
      showCorrectAnswer: true,
    },
    {
      question: t('question2'),
      answers: [
        t('answer2-1'),
        t('answer2-2'),
        t('answer2-3'),
        t('answer2-4'),
      ],
      correctAnswer: 2,
      showCorrectAnswer: true,
    },
    {
      question: t('question3'),
      answers: [
        t('answer3-1'),
        t('answer3-2'),
        t('answer3-3'),
        t('answer3-4'),
      ],
      correctAnswer: 1,
      showCorrectAnswer: true,
    },
    {
      question: t('question4'),
      answers: [
        t('answer4-1'),
        t('answer4-2'),
        t('answer4-3'),
        t('answer4-4'),
      ],
      correctAnswer: 1,
      showCorrectAnswer: true,
    },
    {
      question: t('question5'),
      answers: [
        t('answer5-1'),
        t('answer5-2'),
        t('answer5-3'),
        t('answer5-4'),
      ],
      correctAnswer: 2,
      showCorrectAnswer: true,
    },
    {
      question: t('question6'),
      answers: [
        t('answer6-1'),
        t('answer6-2'),
        t('answer6-3'),
        t('answer6-4'),
      ],
      correctAnswer: 3,
      showCorrectAnswer: true,
    },
    {
      question: t('question7'),
      answers: [
        t('answer7-1'),
        t('answer7-2'),
        t('answer7-3'),
        t('answer7-4'),
      ],
      correctAnswer: 1,
      showCorrectAnswer: true,
    },
    {
      question: t('question8'),
      answers: [
        t('answer8-1'),
        t('answer8-2'),
        t('answer8-3'),
        t('answer8-4'),
      ],
      correctAnswer: 1,
      showCorrectAnswer: true,
    },
    {
      question: t('question9'),
      answers: [
        t('answer9-1'),
        t('answer9-2'),
        t('answer9-3'),
        t('answer9-4'),
      ],
      correctAnswer: 2,
      showCorrectAnswer: true,
    },
    {
      question: t('question10'),
      answers: [
        t('answer10-1'),
        t('answer10-2'),
        t('answer10-3'),
        t('answer10-4'),
      ],
      correctAnswer: 3,
      showCorrectAnswer: true,
    },
    {
      question: t('question11'),
      answers: [
        t('answer11-1'),
        t('answer11-2'),
        t('answer11-3'),
        t('answer11-4'),
      ],
      correctAnswer: 1,
      showCorrectAnswer: true,
    },
    {
      question: t('question12'),
      answers: [
        t('answer12-1'),
        t('answer12-2'),
        t('answer12-3'),
        t('answer12-4'),
      ],
      correctAnswer: 1,
      showCorrectAnswer: true,
    },
    {
      question: t('question13'),
      answers: [
        t('answer13-1'),
        t('answer13-2'),
        t('answer13-3'),
        t('answer13-4'),
      ],
      correctAnswer: 1,
      showCorrectAnswer: true,
    },
  ];
  const router = useRouter();
  
  return (
    <div className="flex h-full w-full items-center justify-center @container">
      <div className="w-full @4xl:w-1/2 mb-20">
        <QuizList
          quizzes={quizzes}
          onFinish={() => router.push("/space")}
          achievement={AchievementId.MASTER_QUIZ}
        />
      </div>
    </div>
  );
}
