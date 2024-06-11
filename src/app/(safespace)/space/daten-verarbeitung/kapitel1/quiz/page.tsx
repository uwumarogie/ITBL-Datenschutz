"use client";

import QuizList, { QuizListProps } from "@/components/quiz-list";
import { QuizParams } from "@/components/quiz";
import { useRouter } from "next/navigation";

const quizzes: QuizParams[] = [
  {
    question: "Was ist 1+1?",
    answers: ["1", "2", "123"],
    correctAnswer: 0,
  },
];

export default function DataProtectionChapter1Quiz() {
  const router = useRouter();
  return (
    <div>
      <QuizList
        quizzes={quizzes}
        onFinish={() => router.push("/space/daten-verarbeitung/kapitel2/0")}
      />
    </div>
  );
}
