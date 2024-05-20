"use client";
import QuizList from "@/components/quiz-list";
import { quizzes } from "@/util/password-quiz-data";
import { useRouter } from "next/navigation";

export default function StartGame() {
  const router = useRouter();
  return (
    <div className="flex flex-wrap">
      <div className="flex flex-col px-2 lg:px-4 justify-start max-w-[1100px] 2xl:mt-8">
        <QuizList
          quizzes={quizzes}
          onFinish={() => router.push("/space/passwort/strength")}
        />
      </div>
    </div>
  );
}
