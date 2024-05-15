"use client";

import React, { useState } from "react";
import clsx from "clsx";
import Button from "@/components/button";
import { QuizParams } from "@/util/password-quiz-data";

export default function Quiz(quiz: QuizParams) {
  const [selection, setSelection] = useState<number | undefined>(undefined);

  function onClick(index: number) {
    if (quiz.showCorrectAnswer && selection != undefined) return;
    setSelection(index);
    const isDone = quiz.showCorrectAnswer
      ? index != undefined
      : index == quiz.correctAnswer;
    quiz.onSelect?.(index, isDone);
  }

  function selectionClass(index: number) {
    if (
      quiz.showCorrectAnswer &&
      selection != undefined &&
      index == quiz.correctAnswer
    ) {
      return "bg-lime-500";
    } else {
      return selection == index
        ? index == quiz.correctAnswer
          ? "bg-lime-500"
          : "bg-red-500"
        : "";
    }
  }

  function showCursorClass() {
    return quiz.showCorrectAnswer && selection != undefined
      ? "cursor-auto"
      : null;
  }

  return (
    <div className={quiz.className}>
      <h3 className="text-xl font-semibold mb-2">{quiz.question}</h3>
      <p className="mb-5">{quiz.hint}</p>
      <div className="answers grid grid-cols-1 lg:grid-cols-2 gap-4">
        {quiz.answers.map((answer, index) => (
          <Button
            key={index}
            className={clsx(selectionClass(index), showCursorClass())}
            onClick={() => {
              onClick(index);
            }}
          >
            {answer}
          </Button>
        ))}
      </div>

      {selection != undefined && (
        <div className="px-6 py-2 border border-orange-400 bg-orange-100 text-orange-800 rounded-xl my-4">
          {selection == quiz.correctAnswer ? (
            <>
              <h4 className="font-semibold">Richtige Antwort!</h4>
            </>
          ) : (
            <div>
              <h4 className="font-semibold">Das stimmt leider nicht!</h4>
              {quiz.showCorrectAnswer ? (
                <>
                  Die richtige Antwort wäre{" "}
                  <span className="italic">
                    {quiz.answers[quiz.correctAnswer]}
                  </span>{" "}
                  gewesen.
                </>
              ) : (
                <>Versuche es noch einmal.</>
              )}
            </div>
          )}

          {quiz.hintAnswers && quiz.hintAnswers[selection] && (
            <p className="mt-4">{quiz.hintAnswers[selection]}</p>
          )}
        </div>
      )}
    </div>
  );
}
