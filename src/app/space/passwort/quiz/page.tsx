"use client";
import QuizList from "@/components/quiz-list";
import { quizzes } from "@/util/password-quiz-data";

export default function StartGame() {
  return (
    <div className="flex flex-wrap">
      <div className="flex flex-col px-2 lg:px-4 justify-start max-w-[1100px] 2xl:mt-8">
        <QuizList quizzes={quizzes} />
      </div>
    </div>
  );
}
