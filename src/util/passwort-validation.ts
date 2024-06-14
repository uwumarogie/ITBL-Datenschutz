import { topTenPasswords } from "./password-quiz-data";

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
  return /[!§$%&+-_.:,;]/.test(word);
}

export function notFrequentlyUsed(word: string) {
  return !topTenPasswords.includes(word);
}

export const SUCCESS_COLOR = "#2E8B57";
const FAILURE_COLOR = "#FF0000";

export function getColor(condition: boolean) {
  return condition ? SUCCESS_COLOR : FAILURE_COLOR;
}

export function calculateBruteForceTime(password: string): string {
  const attemptsPerSecond = 1e9; // 1 Milliarde Versuche pro Sekunde
  const secondsInMinute = 60;
  const secondsInHour = 60 * secondsInMinute;
  const secondsInDay = 24 * secondsInHour;
  const secondsInMonth = 30 * secondsInDay; // Durchschnittlicher Monat
  const secondsInYear = 365 * secondsInDay;

  const characterSets = {
    lowercase: 26,
    uppercase: 26,
    digits: 10,
    special: 32,
  };

  let characterSetSize = 0;

  if (/[a-z]/.test(password)) characterSetSize += characterSets.lowercase;
  if (/[A-Z]/.test(password)) characterSetSize += characterSets.uppercase;
  if (/\d/.test(password)) characterSetSize += characterSets.digits;
  if (/[^a-zA-Z0-9]/.test(password)) characterSetSize += characterSets.special;

  const passwordLength = password.length;
  const totalCombinations = Math.pow(characterSetSize, passwordLength);
  const timeInSeconds = totalCombinations / attemptsPerSecond;

  let timeString: string;

  const formatLargeNumbers = (num: number): string => {
    if (num >= 1e12) {
      return (num / 1e12).toFixed(2) + " Billionen Jahre";
    } else if (num >= 1e9) {
      return (num / 1e9).toFixed(2) + " Milliarden Jahre";
    } else if (num >= 1e6) {
      return (num / 1e6).toFixed(2) + " Millionen Jahre";
    } else {
      return num.toFixed(0) + " Jahre";
    }
  };

  if (timeInSeconds >= secondsInYear * 2) {
    const years = timeInSeconds / secondsInYear;
    timeString = formatLargeNumbers(years);
  } else if (timeInSeconds >= secondsInMonth * 2) {
    const months = timeInSeconds / secondsInMonth;
    timeString = `${months.toFixed(0)} Monate`;
  } else if (timeInSeconds >= secondsInDay * 2) {
    const days = timeInSeconds / secondsInDay;
    timeString = `${days.toFixed(0)} Tage`;
  } else if (timeInSeconds >= secondsInHour * 2) {
    const hours = timeInSeconds / secondsInHour;
    timeString = `${hours.toFixed(0)} Stunden`;
  } else if (timeInSeconds >= secondsInMinute * 2) {
    const minutes = timeInSeconds / secondsInMinute;
    timeString = `${minutes.toFixed(0)} Minuten`;
  } else {
    timeString = `${timeInSeconds.toFixed(0)} Sekunden`;
  }

  return timeString;
}
