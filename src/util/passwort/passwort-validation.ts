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
  return /[!§$%&+-.:,;]/.test(word);
}

export function hasLengthGreaterThanEight(word: string) {
  return word.length >= 8;
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

  const formatNumber = (num: number): string => {
    const roundedNum = num.toPrecision(3);
    if (num >= 1e12) {
      return "Unendlich 😏";
    } else if (num >= 1e9) {
      return `${roundedNum} Millarden Jahre`;
    } else if (num >= 1e6) {
      return `${roundedNum} Millionen Jahre`;
    } else {
      return `${roundedNum} Jahre`;
    }
  };

  if (timeInSeconds >= secondsInYear * 2) {
    const years = timeInSeconds / secondsInYear;
    return formatNumber(years);
  } else if (timeInSeconds >= secondsInMonth * 2) {
    const months = timeInSeconds / secondsInMonth;
    return `${months.toPrecision(3)} Monate`;
  } else if (timeInSeconds >= secondsInDay * 2) {
    const days = timeInSeconds / secondsInDay;
    return `${days.toPrecision(3)} Tage`;
  } else if (timeInSeconds >= secondsInHour * 2) {
    const hours = timeInSeconds / secondsInHour;
    return `${hours.toPrecision(3)} Stunden`;
  } else if (timeInSeconds >= secondsInMinute * 2) {
    const minutes = timeInSeconds / secondsInMinute;
    return `${minutes.toPrecision(3)} Minuten`;
  } else {
    return `${timeInSeconds.toPrecision(3)} Sekunden`;
  }
}
