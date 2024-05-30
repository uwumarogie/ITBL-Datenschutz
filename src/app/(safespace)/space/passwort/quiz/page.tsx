"use client";
import { HintCard } from "@/components/hint-card";
import QuizList from "@/components/quiz-list";
import { quizzes } from "@/util/password-quiz-data";
import { useRouter } from "next/navigation";
import { topTenPasswords } from "@/util/password-quiz-data";
import { useState } from "react";

const hintCards = [
  {
    questionIndex: 0,
    text: "Top Ten deutsche Passwörter 2023",
    buttonText: "Anzeigen",
    hint: topTenPasswords.join(", "),
  },
  {
    questionIndex: 3,
    text: "Brute-Force-Angriff",
    buttonText: "Mehr erfahren",
    hint: "Es werden systematisch alle möglichen Kombinationen ausprobiert. Je mehr Stellen das Passwort hat, desto mehr Möglichkeiten muss der Angreifer berücksichtigen.",
  },
  {
    questionIndex: 4,
    text: "Brute-Force-Angriff",
    buttonText: "Mehr erfahren",
    hint: "Es werden systematisch alle möglichen Kombinationen ausprobiert. Je mehr verschiedene Zeichenarten du verwendest, desto mehr Möglichkeiten an Kombinationen gibt es und desto länger dauert es das Passwort zu knacken",
  },
];

export default function StartGame() {
  const router = useRouter();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const handleQuestionChange = () => {
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  const currentHintCard = hintCards.find(
    (card) => card.questionIndex === currentQuestionIndex,
  );

  return (
    <div className="flex flex-col xl:gap-8 2xl:mt-8 px-2 lg:px-4">
      <QuizList
        className="max-w-[1100px]"
        quizzes={quizzes}
        onFinish={() => {
          router.push("/space/passwort/builder");
        }}
        onNextQuestion={handleQuestionChange}
      />
      <div className="max-w-[400px]">
        {currentHintCard && (
          <HintCard
            text={currentHintCard.text}
            buttonText={currentHintCard.buttonText}
            hint={currentHintCard.hint}
          />
        )}
      </div>
    </div>
  );
}
