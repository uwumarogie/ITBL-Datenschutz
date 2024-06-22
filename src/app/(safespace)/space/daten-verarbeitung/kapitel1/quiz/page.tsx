"use client";

import { useRouter } from "next/navigation";
import { QuizParams } from "@/components/Quiz/quiz";
import QuizList from "@/components/Quiz/quiz-list";

const quizzes: QuizParams[] = [
  {
    question: "Was ist 1+1?",
    answers: ["1", "2", "123"],
    correctAnswer: 1,
    showCorrectAnswer: true,
  },
  {
    question: "Was ist 2*2?",
    answers: ["1", "2", "3", "4", "5"],
    correctAnswer: 3,
    showCorrectAnswer: true,
  },
];

export default function DataProtectionChapter1Quiz() {
  const router = useRouter();
  return (
    <div className="flex h-full w-full items-center justify-center @container">
      <div className="w-full @4xl:w-1/2 mb-20">
        <QuizList
          quizzes={quizzes}
          onFinish={() =>
            router.push("/space/daten-verarbeitung/kapitel2/level/0/part/0")
          }
        />
      </div>
    </div>
  );
}
