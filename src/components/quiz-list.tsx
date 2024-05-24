"use client";
import Quiz from "@/components/quiz";
import { useState } from "react";
import clsx from "clsx";
import Button from "@/components/button";
import { QuizParams } from "@/util/password-quiz-data";

export type QuizListProps = {
  className?: string;
  quizzes: QuizParams[];
  onFinish?: () => void;
};

export default function QuizList({
  quizzes,
  className,
  onFinish,
}: QuizListProps) {
  const [currentQuizIndex, setCurrentQuizIndex] = useState(0);
  const [showSummary, setShowSummary] = useState(false);

  const [quizzesState, setQuizzesState] = useState<
    {
      quiz: QuizParams;
      selection: number;
      isSolved: boolean;
      isDone: boolean;
    }[]
  >(
    quizzes.map((quiz) => ({
      quiz,
      selection: -1,
      isSolved: false,
      isDone: false,
    })),
  );

  function quizStateClasses(index: number) {
    let classes =
      "rounded-full w-10 h-10 inline-flex justify-center items-center font-bold ";
    if (index == currentQuizIndex) {
      classes += "bg-orange-500 text-white";
    } else if (quizzesState[index].isDone) {
      if (quizzes[index].showCorrectAnswer) {
        if (quizzesState[index].isSolved) {
          classes += "bg-green-200 text-green-800";
        } else {
          classes += "bg-red-200 text-red-800";
        }
      } else {
        classes += "bg-sky-200 text-green-800";
      }
    } else if (
      quizzesState[index].selection != -1 &&
      !quizzesState[index].isSolved
    ) {
      classes += "bg-red-200 text-red-800";
    } else {
      classes += "bg-slate-200 text-sky-800";
    }
    return classes;
  }

  function onSelect(quizIndex: number, selection: number, isDone: boolean) {
    setQuizzesState(
      quizzesState.map((state, index) => {
        if (quizIndex == index) {
          return {
            quiz: state.quiz,
            selection: selection,
            isSolved: selection == state.quiz.correctAnswer,
            isDone: isDone,
          };
        } else {
          return state;
        }
      }),
    );
  }

  function nextQuiz() {
    if (currentQuizIndex == quizzes.length - 1) return;
    setCurrentQuizIndex(currentQuizIndex + 1);
  }

  function finishQuiz() {
    if (showSummary) {
      onFinish?.();
    } else {
      setCurrentQuizIndex(quizzes.length);
      setShowSummary(true);
    }
  }

  return (
    <div className={className}>
      <div className="py-4 flex gap-6 justify-center items-center">
        {quizzesState.map((state, index) => (
          <div key={index} className={quizStateClasses(index)}>
            {index + 1}
          </div>
        ))}
      </div>

      {!showSummary && (
        <div className="mb-10">
          {quizzesState.map(({ quiz, isDone, isSolved, selection }, index) => (
            <div
              className={clsx("", currentQuizIndex != index && "hidden")}
              key={index}
            >
              <Quiz
                question={quiz.question}
                answers={quiz.answers}
                hint={quiz.hint}
                hintAnswers={quiz.hintAnswers}
                correctAnswer={quiz.correctAnswer}
                showCorrectAnswer={quiz.showCorrectAnswer}
                onSelect={(selection, isDone) => {
                  onSelect(currentQuizIndex, selection, isDone);
                }}
                className={undefined}
              />
            </div>
          ))}
        </div>
      )}

      {showSummary && (
        <div className="summary mb-6">
          <h3 className="text-xl font-semibold mb-2">Du hast es geschafft!</h3>
          <p className="pb-6">
            Du hast{" "}
            {quizzesState
              .map((state) => state.isSolved)
              .reduce((acc, v) => acc + (v ? 1 : 0), 0)}{" "}
            von {quizzesState.length} Fragen richtig beantwortet.
          </p>
          <Button onClick={() => onFinish}>Weiter</Button>
        </div>
      )}

      <div className="ml-100 flex justify-end">
        {quizzesState[currentQuizIndex]?.isDone &&
          (currentQuizIndex === quizzes.length - 1 ? (
            <Button onClick={finishQuiz} className="mb-10">
              Abschließen
            </Button>
          ) : (
            <Button onClick={nextQuiz} className="mb-10">
              Weiter
            </Button>
          ))}
      </div>
    </div>
  );
}
