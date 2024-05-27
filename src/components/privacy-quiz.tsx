import { useState } from "react";
import clsx from "clsx";
import Image from "next/image";
import { PrivacyQuizQuestion, questions } from "@/util/privacy-quiz-data";

export function PrivacyQuiz() {
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
    setCurrentQuestionIndex((prevIndex) =>
      prevIndex < questions.length - 1 ? prevIndex + 1 : 0,
    );
  };

  return (
    <div className="relative flex flex-row justify-center p-4 w-full max-w-5xl">
      <div className="w-6/12 hidden lg:flex justify-center">
        <h2 className="text-center text-xl text-blue-background font-bold">
          Quiz
        </h2>
      </div>
      {answer !== null ? (
        <QuizResult
          result={result}
          currentQuestion={currentQuestion}
          handleNextQuestion={handleNextQuestion}
        />
      ) : (
        <QuizQuestion
          currentQuestion={currentQuestion}
          handleAnswer={handleAnswer}
        />
      )}
      <div className="w-6/12 hidden lg:flex justify-center">
        <h2 className="text-center text-xl text-blue-background font-bold">
          {currentQuestionIndex + 1}/{questions.length}
        </h2>
      </div>
    </div>
  );
}

function QuizResult({
  result,
  currentQuestion,
  handleNextQuestion,
}: {
  result: "Richtig" | "Falsch" | null;
  currentQuestion: PrivacyQuizQuestion;
  handleNextQuestion: () => void;
}) {
  return (
    <div className="flex flex-col w-full max-w-2xl min-h-[500px] items-center justify-center rounded-xl bg-gray-100">
      <span
        className={clsx(
          "flex w-11/12 max-w-md p-4 mb-7 mt-4 rounded-xl items-center justify-center font-bold text-white text-xl max-h-14",
          result === "Richtig" ? "bg-green-500" : "bg-red-600",
        )}
      >
        {result}
      </span>
      <ImageSection
        imageUrl={currentQuestion.imageUrl}
        altText={currentQuestion.altText}
      />
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
  );
}

function QuizQuestion({
  currentQuestion,
  handleAnswer,
}: {
  currentQuestion: PrivacyQuizQuestion;
  handleAnswer: (isCorrect: boolean) => void;
}) {
  return (
    <div className="flex flex-col bg-gray-100 rounded-xl w-full max-w-5xl">
      <div className="my-12">
        <h2 className="text-center lg:text-3xl font-semibold text-xl">
          {currentQuestion.questionText}
        </h2>
      </div>
      <ImageSection
        imageUrl={currentQuestion.imageUrl}
        altText={currentQuestion.altText}
      />
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
  );
}

function ImageSection({
  imageUrl,
  altText,
}: {
  imageUrl: string;
  altText: string;
}) {
  return (
    <div className="mb-6 flex flex-col justify-center items-center">
      <Image
        src={imageUrl}
        alt={altText}
        height={150}
        width={150}
        className="text-[#3e3e3e]"
      />
      <p className="mt-2 text-xl font-bold">{altText}</p>
    </div>
  );
}
