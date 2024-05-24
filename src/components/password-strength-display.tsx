import {PasswordData} from "@/util/password-quiz-data";
import {useRouter} from "next/navigation";
import {useState} from "react";
import Button from "@/components/button";

export function PasswordStrengthDisplay  ({
                                     passwords,
                                 }: {
    passwords: Array<PasswordData>;
})  {
    const router = useRouter();

    const [totalPoints, setTotalPoints] = useState(0);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [buttonStyle, setButtonStyle] = useState(-1);
    const currentQuestion = passwords[currentQuestionIndex];

    function handleButtonClick(strength: number) {
        if (currentQuestion.strength === strength) {
            setTotalPoints((s) => s + currentQuestion.points);
            goToNextQuestion();
            setButtonStyle(-1);
        } else {
            setButtonStyle(strength);
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
                <Button onClick={() => router.push("/space/passwort/builder")}>
                    Weiter
                </Button>
            ) : (
                <>
                    <div className="flex flex-col justify-center items-center lg:space-y-8 sm:space-y-16 lg:gap-y-1 gap-y-4">
            <span className="flex bg-blue-contrast p-4 min-w-52 rounded-xl text-white justify-center items-center">
              Password: {currentQuestion.password}
            </span>
                        <span className="text-xl text-blue-background">
              {" "}
                            Punkte: {currentQuestion.points}
            </span>
                        <span className="text-xl text-blue-background">
              Dein Score: {totalPoints}
            </span>
                    </div>

                    <div className="flex flex-col lg:space-y-8 space-y-4">
                        <Button
                            onClick={() => handleButtonClick(2)}
                            style={buttonStyle == 2 ? "red" : "default"}
                        >
                            stark
                        </Button>
                        <Button
                            onClick={() => handleButtonClick(1)}
                            style={buttonStyle == 1 ? "red" : "default"}
                        >
                            mittel
                        </Button>
                        <Button
                            onClick={() => handleButtonClick(0)}
                            style={buttonStyle == 0 ? "red" : "default"}
                        >
                            schwach
                        </Button>
                    </div>
                </>
            )}
        </div>
    );
};
