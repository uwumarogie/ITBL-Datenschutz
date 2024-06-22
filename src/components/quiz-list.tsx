"use client";
import Quiz, { QuizParams } from "@/components/quiz";
import { useEffect, useState } from "react";
import clsx from "clsx";
import Button from "@/components/button";
import { AchievementId, AchievementData } from "@/util/achievement-data";
import AchievementCard from "@/components/Achievements/achievement-card";
import { PersistUserService } from "@/services/user/PersistUserService";
import Explosion from "react-canvas-confetti/dist/presets/explosion";

export type QuizListProps = {
  className?: string;
  quizzes: QuizParams[];
  onFinish?: () => void;
  onNextQuestion?: () => void;
  achievement?: keyof typeof AchievementId | undefined;
};

export default function QuizList({
  quizzes,
  className,
  onFinish,
  onNextQuestion,
  achievement,
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

  const achievementData = AchievementData.achievements.find(
    (el) => el.id === achievement,
  );

  const achievedScore = quizzesState
    .map((state) => state.isSolved)
    .reduce((acc, v) => acc + (v ? 1 : 0), 0);

  useEffect(() => {
    async function unlockAchievement(achievementId: string) {
      const context = new PersistUserService();
      await context.setAchievement(achievementId, true);
    }

    if (achievement !== undefined && currentQuizIndex === quizzes.length - 1) {
      unlockAchievement(achievement).then((res) => console.log(res));
    }
  }, [achievement, achievedScore]);

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
    onNextQuestion?.();
  }

  function finishQuiz() {
    if (showSummary) {
      onFinish?.();
    } else {
      setCurrentQuizIndex(quizzes.length);
      setShowSummary(true);
      onNextQuestion?.();
    }
  }

  return (
    <div className={className}>
      <div className="py-4 flex gap-6 justify-center items-center">
        {quizzesState.map((_, index) => (
          <div key={index} className={quizStateClasses(index)}>
            {index + 1}
          </div>
        ))}
      </div>

      {!showSummary && (
        <div className="md:mb-10 mb-6">
          {quizzesState.map(({ quiz }, index) => (
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
                onAnswerClick={quiz.onAnswerClick}
                className={undefined}
              />
            </div>
          ))}
        </div>
      )}

      {showSummary && (
        <div className="flex mb-6 justify-center items-center flex-col gap-4 mt-10">
          <Explosion autorun={{ speed: 10, duration: 5000 }} />
          <h3 className="text-xl font-semibold mb-2">Du hast es geschafft!</h3>
          <p className="pb-6">
            Du hast {achievedScore} von {quizzesState.length} Fragen richtig
            beantwortet.
          </p>
          {achievementData && achievedScore === quizzes.length && (
            <AchievementCard
              id={achievementData.id}
              title={achievementData.title}
              description={achievementData.description}
              progress={achievementData.progress}
            />
          )}
          <Button onClick={() => onFinish?.()}>Weiter</Button>
        </div>
      )}

      <div className="ml-100 flex justify-end">
        {quizzesState[currentQuizIndex]?.isDone &&
          (currentQuizIndex === quizzes.length - 1 ? (
            <Button onClick={finishQuiz} className="md:mb-10 mb-6">
              Abschließen
            </Button>
          ) : (
            <Button onClick={nextQuiz} className="md:mb-10 mb-6">
              Weiter
            </Button>
          ))}
      </div>
    </div>
  );
}
