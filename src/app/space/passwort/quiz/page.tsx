"use client";
import QuizList from "@/components/quiz-list";
import { InlineNavigation } from "@/components/inline-navigation";
import { quizzes } from "@/util/password-quiz-data";

export default function StartGame() {
  return (
    <div
      className="flex flex-col max-w-[1100px] p-4 justify-start"
      style={{ height: "calc(100vh - 150px)", overflowY: "scroll" }}
    >
      <div className="hidden lg:block">
        <InlineNavigation />
      </div>
      <QuizList
        className="lg:mx-28 lg:my-28 justify-center scale-100 lg:scale-110"
        quizzes={quizzes}
      />
    </div>
  );
}
