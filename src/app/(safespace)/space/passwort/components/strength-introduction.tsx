import Button from "@/components/button";
import { PasswordData, instruction } from "@/util/passwort/password-quiz-data";
import { passwordAnimation } from "@/util/passwort/strength-helper";
import { IntroductionText } from "@/components/introduction-text";

type IntroProps = {
  setGameStarted: (bool: boolean) => void;
  currentQuestion: PasswordData;
  setDisplayPassword: (str: string) => void;
};

export default function StengthIntro({
  setGameStarted,
  currentQuestion,
  setDisplayPassword,
}: IntroProps) {
  return (
    <div className="flex flex-col gap-y-12">
      <IntroductionText
        headline="Bewerte die Stärke des Passworts"
        text={instruction}
      />
      <Button
        onClick={() => {
          setGameStarted(true);
          passwordAnimation(currentQuestion.password, setDisplayPassword);
        }}
        className="max-w-[300px]"
      >
        Spiel starten
      </Button>
    </div>
  );
}
