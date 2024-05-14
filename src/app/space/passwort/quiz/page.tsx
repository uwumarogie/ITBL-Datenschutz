"use client";
import QuizList from "@/components/quiz-list";
import { quizzes } from "@/util/password-quiz-data";
import Image from "next/image";

export default function StartGame() {
  return (
    <div className="flex flex-wrap">
      <div className="flex flex-col px-2 lg:px-4 justify-start max-w-[1100px] sm:mt-8">
        <QuizList className="" quizzes={quizzes} />
      </div>
      <Image
        src="/smartphone-pw.png"
        alt="passwort safety"
        width={400}
        height={400}
        className="m-auto"
      />
    </div>
  );
}
