"use client";
import { useState } from "react";
import clsx from "clsx";

export default function Chatbot() {
  return (
    <div className="p-6 flex justify-center">
      <QuizQuestion />
    </div>
  );
}

const questions = [
  {
    questionText: "Ist folgendes Datum personenbezogen?",
    correctExplanation:
      "Ja. Informationen über den Familienstand einer Person (verheiratet, geschieden, verwitwet, ledig) sind personenbezogen, da sie sensible Details über den privaten und sozialen Status offenlegen und rechtliche, finanzielle sowie persönliche Auswirkungen haben können.",
    incorrectExplanation:
      "Ja. Informationen über den Familienstand einer Person (verheiratet, geschieden, verwitwet, ledig) sind personenbezogen, da sie sensible Details über den privaten und sozialen Status offenlegen und rechtliche, finanzielle sowie persönliche Auswirkungen haben können.",

    imageUrl: "/path/to/your/image.png",
    altText: "Familienstand",
    correctAnswer: true,
  },
  {
    questionText: "Ist das Geburtsdatum personenbezogen?",
    correctExplanation:
      "Ja.Das Geburtsdatum ist personenbezogen, da es Rückschlüsse auf das Alter einer Person zulässt.",
    incorrectExplanation: "NO, false",
    imageUrl: "/path/to/another/image.png",
    altText: "Geburtsdatum",
    correctAnswer: true,
  },
];

function QuizQuestion() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answer, setAnswer] = useState<boolean | null>(null);
  const [result, setResult] = useState<"Richtig" | "Falsch" | null>(null);

  const currentQuestion = questions[currentQuestionIndex];

  const handleAnswer = (isCorrect: boolean) => {
    setAnswer(isCorrect);
    setResult(isCorrect ? "Richtig" : "Falsch");
  };

  const handleNextQuestion = () => {
    setAnswer(null);
    setResult(null);
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      alert("Quiz beendet!");
    }
  };

  return (
    <div className="relative flex flex-row justify-center p-4 w-full max-w-5xl">
      <div className="w-6/12 hidden lg:flex justify-center">
        <h2 className="text-center text-xl text-blue-background font-bold ">
          Quiz
        </h2>
      </div>

      {answer !== null ? (
        <div className="flex flex-col w-full max-w-2xl min-h-[500px] items-center justify-center rounded-xl bg-gray-100">
          <span
            className={clsx(
              "flex w-11/12 max-w-md p-4 mb-7 mt-4 rounded-xl items-center justify-center font-bold text-white text-xl max-h-14",
              result === "Richtig" ? "bg-green-500" : "bg-red-600",
            )}
          >
            {result}
          </span>

          <div className="mb-6 flex flex-col justify-center items-center">
            <BellRingIcon className="h-32 w-32 text-[#3e3e3e]" />
            <p className="mt-2 text-xl font-bold">{currentQuestion.altText}</p>
          </div>

          <span className="flex w-full max-w-md lg:my-5 scale-95 lg:scale-100 p-2">
            {result === "Richtig"
              ? currentQuestion.correctExplanation
              : currentQuestion.incorrectExplanation}
          </span>

          <button
            className="flex font-bold items-end justify-end justify-self-end bg-blue-background text-white p-4 rounded-xl"
            onClick={handleNextQuestion}
          >
            Weiter
          </button>
        </div>
      ) : (
        <div className="flex flex-col bg-gray-100 rounded-xl w-full max-w-5xl">
          <div className="my-12">
            <h2 className="text-center lg:text-3xl font-semibold text-xl">
              {currentQuestion.questionText}
            </h2>
          </div>
          <div className="mb-12 flex flex-col justify-center items-center space-y-8">
            <BellRingIcon className="h-32 w-32 text-[#3e3e3e]" />
            <p className="mt-2 text-xl font-bold">{currentQuestion.altText}</p>
          </div>
          <div className="flex justify-center space-x-12 my-5">
            <button
              className="bg-lime-600 text-white min-w-28 lg:min-w-36 h-12 p-5 flex rounded-xl justify-center items-center"
              onClick={() => handleAnswer(true)}
            >
              Ja
            </button>
            <button
              className="bg-red-600 text-white min-w-28 lg:min-w-36 h-12 p-5 flex rounded-xl justify-center items-center"
              onClick={() => handleAnswer(false)}
            >
              Nein
            </button>
          </div>
        </div>
      )}

      <div className="w-6/12 hidden lg:flex justify-center">
        <h2 className="text-center text-xl text-blue-background font-bold">
          {currentQuestionIndex + 1}/{questions.length}{" "}
        </h2>
      </div>
    </div>
  );
}

function BellRingIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
      <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
      <path d="M4 2C2.8 3.7 2 5.7 2 8" />
      <path d="M22 8c0-2.3-.8-4.3-2-6" />
    </svg>
  );
}
