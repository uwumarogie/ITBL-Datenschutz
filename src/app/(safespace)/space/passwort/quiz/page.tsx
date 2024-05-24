"use client";
import { HintCard } from "@/components/hint-card";
import QuizList from "@/components/quiz-list";
import { quizzes } from "@/util/password-quiz-data";
import { useRouter } from "next/navigation";

export default function StartGame() {
  const router = useRouter();
  return (
    <div className="flex flex-col xl:gap-8 2xl:mt-8 px-2 lg:px-4">
        <QuizList
          className="max-w-[1100px]"
          quizzes={quizzes}
          onFinish={() => router.push("/space/passwort/builder")}
        />
        <div className="max-w-[400px]">
        <HintCard
          text="Top Ten deutsche Passwörter 2023"
          buttonText="Anzeigen"
          hint="123456789, 12345678, hallo, 1234567890, 1234567, password, password1, target123, iloveyou, gwerty123"
        />
        </div>
    </div>
  );
}
