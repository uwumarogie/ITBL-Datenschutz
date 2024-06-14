"use client";
import { HintCard } from "@/components/hint-card";
import QuizList from "@/components/quiz-list";
import { quizzes, replaceCharacter } from "@/util/password-quiz-data";
import { useRouter } from "next/navigation";
import { topTenPasswords } from "@/util/password-quiz-data";
import { useState } from "react";

const hintCards = [
  {
    questionIndex: 0,
    text: "Top Ten deutsche Passwörter 2023",
    buttonText: "Anzeigen",
    hint: (
      <div className="grid sm:grid-cols-1 grid-cols-3 gap-3 font-bold text-sm">
        {topTenPasswords.map((password, index) => {
          return (
            <span key={index}>
              <strong>{index + 1}</strong>. {password}
            </span>
          );
        })}
      </div>
    ),
  },
  {
    questionIndex: 1,
    text: "Welche Buchstaben werden oft ersetzt?",
    buttonText: "Anzeigen",
    hint: (
      <div className="grid sm:grid-cols-1 grid-cols-3 gap-3 font-bold text-xs">
        {replaceCharacter.map((character, index) => {
          return <span key={index}> {character}</span>;
        })}
      </div>
    ),
  },
  {
    questionIndex: 3,
    text: "Kann ein Brute-Force-Angriff immer erfolgreich sein?",
    buttonText: "Mehr erfahren",
    hint: "Theoretisch ja, aber praktisch kann es Jahre dauern, ein sehr starkes Passwort zu knacken, was den Angriff ineffektiv macht.",
  },
  {
    questionIndex: 4,
    text: "Wie kann man Brute-Force-Angriffe abwehren?",
    buttonText: "Mehr erfahren",
    hint: "Verwenden Sie lange und komplexe Passwörter, aktivieren Sie Zwei-Faktor-Authentifizierung und setzen Sie Account-Sperrungen nach mehreren Fehlversuchen ein.",
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
