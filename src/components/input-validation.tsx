import { CheckMarkGreen } from "@/components/check-mark-green";
import { RedCrossMark } from "@/components/red-cross-mark";
import {
  containCapitalLetters,
  containDigits,
  containLowerCaseLetters,
  containSpecialCharacters,
  getColor,
  hasLengthGreaterThanEight,
  SUCCESS_COLOR,
} from "@/util/passwort/passwort-validation";

export function InputValidation({ input = "" }: { input: string }) {
  const validations = [
    { check: containLowerCaseLetters, label: "Kleinbuchstaben" },
    { check: containCapitalLetters, label: "Großbuchstaben" },
    { check: containDigits, label: "Zahlen" },
    {
      check: containSpecialCharacters,
      label: "Sonderzeichen (z.B. !§$%&+-_.:,;)",
    },
    { check: hasLengthGreaterThanEight, label: "Passwortlänge 8 oder mehr" },
  ];

  return (
    <div className="flex flex-col items-start space-y-2 lg:space-y-1 w-72">
      {validations.map(({ check, label }) => (
        <div key={label} className="flex flex-row items-center space-x-2">
          <Indicator color={getColor(check(input))} />
          <span className="text-sm text-black">{label}</span>
        </div>
      ))}
    </div>
  );
}

function Indicator({ color }: { color: string }) {
  if (color === SUCCESS_COLOR) {
    return <CheckMarkGreen />;
  } else {
    return <RedCrossMark />;
  }
}
