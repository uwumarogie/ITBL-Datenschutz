"use client";

import { useRouter } from "next/navigation";
import QuizList from "@/components/Quiz/quiz-list";
import { QuizParams } from "@/components/Quiz/quiz";
import { PersistUserService } from "@/services/user/PersistUserService";
import { AchievementId } from "@/util/achievement-data";
import {useTranslations} from "next-intl";

function useQuizzes(): QuizParams[] {
  const t = useTranslations("datenverarbeitung.introduction.quiz")
  return [
    {
      question: t("question1"),
      answers: [
        t("question1answer1"),
        t("question1answer2"),
        t("question1answer3"),
        t("question1answer4")
      ],
      correctAnswer: 2,
      showCorrectAnswer: true,
    },
    {
      question: t("question2"),
      answers: [
        t("question2answer1"),
        t("question2answer2"),
        t("question2answer3"),
        t("question2answer4")
      ],
      correctAnswer: 1,
      showCorrectAnswer: true,
    },
    {
      question: t("question3"),
      answers: [
        t("question3answer1"),
        t("question3answer2"),
        t("question3answer3"),
        t("question3answer4")
      ],
      correctAnswer: 1,
      showCorrectAnswer: true,
    },
    {
      question: t("question4"),
      answers: [
        t("question4answer1"),
        t("question4answer2"),
        t("question4answer3"),
        t("question4answer4")
      ],
      correctAnswer: 2,
      showCorrectAnswer: true,
    },
    {
      question: t("question5"),
      answers: [
        t("question5answer1"),
        t("question5answer2"),
        t("question5answer3"),
        t("question5answer4")
      ],
      correctAnswer: 3,
      showCorrectAnswer: true,
    },
  ];
}

export default function DataProtectionChapter1Quiz() {
  const router = useRouter();
  const quizzes = useQuizzes()
  return (
    <div className="flex h-full w-full items-center justify-center @container">
      <div className="w-full @4xl:w-1/2 mb-20">
        <QuizList
          quizzes={quizzes}
          onFinish={async () => {
            await new PersistUserService().setAchievement(
              AchievementId.DATA_PROCESSING_CHECKPOINT_INTRODUCTION,
              true,
            );
            router.push("/space/daten-verarbeitung/overview");
          }}
        />
      </div>
    </div>
  );
}
