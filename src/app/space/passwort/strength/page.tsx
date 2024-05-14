"use client";

import { useState } from "react";
import { PasswordData, passwordData } from "@/util/password-quiz-data";
import { IntroductionText } from "@/components/introduction-text";
import Button from "@/components/button";
import { useRouter } from "next/navigation";

export default function PasswordStrength() {
  return (
    <div className="flex flex-col max-w-[1100px] px-2 lg:px-6 justify-start">
      <div className="flex justify-start">
        <IntroductionText
          headline="Bewerte die Stärke des Passworts"
          text="    Ein Passwort gilt nur als stark, wenn alle Kriterien erfüllt sind. Ist
        nur eine Bedingung falsch gilt das Passwort als mittel und ansonten als
        schwach."
        />
      </div>
      <PasswordStrengthDisplay passwords={passwordData} />
    </div>
  );
}

const PasswordStrengthDisplay = ({
  passwords,
}: {
  passwords: Array<PasswordData>;
}) => {
  const router = useRouter();

  const [totalPoints, setTotalPoints] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const currentQuestion = passwords[currentQuestionIndex];

  function handleButtonClick(strength: number) {
    if (currentQuestion.strength === strength) {
      setTotalPoints((s) => s + currentQuestion.points);
      goToNextQuestion();
    }
  }

  function goToNextQuestion() {
    if (currentQuestionIndex <= passwords.length) {
      setCurrentQuestionIndex((curr) => curr + 1);
    }
  }

  return (
    <div className="grid grid-rows-1 lg:grid-cols-2 space-y-6 mt-8">
      {currentQuestionIndex === passwords.length ? (
        <Button onClick={() => router.push("/space/privatsphaere")}>
          Nächstes Modul
        </Button>
      ) : (
        <>
          <div className="flex justify-center items-center  lg:space-y-8 sm:space-y-16 gap-y-8">
            <span className="flex bg-blue-contrast p-4 min-w-52 rounded-xl text-white justify-center items-center">
              Password: {currentQuestion.password}
            </span>
          </div>

          <div className="flex flex-col lg:space-y-8 space-y-4">
            <button
              onClick={() => {
                handleButtonClick(2);
              }}
              className="flex justify-center items-center rounded-xl bg-orange-600 p-4 text-white font-light"
            >
              stark
            </button>
            <button
              onClick={() => handleButtonClick(1)}
              className="flex justify-center items-center rounded-xl bg-orange-600 p-4 text-white font-light"
            >
              mittel
            </button>
            <button
              onClick={() => handleButtonClick(0)}
              className="flex justify-center items-center rounded-xl bg-orange-600 p-4 text-white font-light"
            >
              schwach
            </button>
          </div>
        </>
      )}
    </div>
  );
};
