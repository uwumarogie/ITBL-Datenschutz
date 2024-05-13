export function containLowerCaseLetters(word: string) {
  return /[a-z]/.test(word);
}

export function containCapitalLetters(word: string) {
  return /[A-Z]/.test(word);
}

export function containDigits(word: string) {
  return /[0-9]/.test(word);
}

export function containSpecialCharacters(word: string) {
  return /[!§$%&äöüÄÖÜ]/.test(word);
}

//TODO: Add more special functions to make the password even more secure and difficult to guess
// verify the word with a library for password
export function difficultToGuess(word: string) {
  return (
    word.length >= 8 &&
    containLowerCaseLetters(word) &&
    containCapitalLetters(word) &&
    containDigits(word) &&
    containSpecialCharacters(word)
  );
}

export const SUCCESS_COLOR = "#2E8B57";
const FAILURE_COLOR = "#858585";

export function getColor(condition: boolean) {
  return condition ? SUCCESS_COLOR : FAILURE_COLOR;
}
