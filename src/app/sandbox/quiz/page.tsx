"use client";

import QuizList from "@/app/components/QuizList";
import Quiz, {QuizParams} from "@/app/components/Quiz";
import {useState} from "react";

export default function QuizSandboxPage() {
  const answers = [
    "Antwort A",
    "Antwort B",
    "Lange Antwort C, die mehr als eine Zeile braucht",
    "Antwort D",
  ];
  const hintAnswers = answers.map((hint) => "Hint for: " + hint);
  const longHint =
    "Et vitae illum voluptatem suscipit. Minima voluptatibus labore provident  dolores veritatis. \n" +
    "Mollitia ipsam et error ut ut expedita nihil. \n" +
    "Ut temporibus et nihil. Magnam et nobis quasi. Ad eaque neque eaque nobis  minus dignissimos.";

  const [isDone, setDone] = useState(false);
  const [showCorrectAnswer, setShowCorrectAnswer] = useState(true);

  const quizzes: QuizParams[] = [0, 1, 2, 3].map((i) => {
    return {
      question: `[${i}] Warum ist die Banane krumm?`,
      answers: answers,
      hint: longHint,
      showCorrectAnswer: showCorrectAnswer,
      correctAnswer: i,
      hintAnswers: hintAnswers,
    } as QuizParams;
  });

  function onSelect(selection: number, isDone: boolean) {
    console.log(selection, isDone);
    setDone(isDone);
  }

  return (
    <div>
      <QuizList className="mx-32 my-8 w-1/2" quizzes={quizzes} />

      <div className="my-10 h-1 bg-slate-100" />
      <button onClick={() => setShowCorrectAnswer(!showCorrectAnswer)}>
        {showCorrectAnswer ? "Disable" : "Enable"} showCorrectAnswer
      </button>
      <Quiz
        className="mx-32 my-8 w-1/2"
        question="Warum ist die Banane krumm?"
        answers={answers}
        hint={longHint}
        showCorrectAnswer={showCorrectAnswer}
        correctAnswer={0}
        hintAnswers={hintAnswers}
        onSelect={onSelect}
      />
    </div>
  );
}
