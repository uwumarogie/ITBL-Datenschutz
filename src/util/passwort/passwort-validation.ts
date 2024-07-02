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
  const attemptsPerSecond = 2e12; // 1 Milliarde Versuche pro Sekunde
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
  const timeInSeconds = (totalCombinations / attemptsPerSecond) * 60;

  const formatNumber = (num: number): string => {
    let roundedNum;
    if (num >= 1e12) {
      return "Unendlich 😏";
    } else if (num >= 1e9) {
      roundedNum = Math.ceil(num/1e9);
      return `${Number(roundedNum)} Milliarden Jahre`;
    } else if (num >= 1e6) {
      roundedNum = Math.ceil(num/1e6);
      return `${Number(roundedNum)} Millionen Jahre`;
    } else if (num >= 1e3) {
      roundedNum = Math.ceil(num/1e3);
      return `${Number(roundedNum)} Tausend Jahre`;
    } else {
      return `${Number(roundedNum)} Jahre`;
    }
  };

  if (timeInSeconds >= secondsInYear * 2) {
    const years = timeInSeconds / secondsInYear;
    return formatNumber(years);
  } else if (timeInSeconds >= secondsInMonth * 2) {
    const months = timeInSeconds / secondsInMonth;
    return `${Number(months.toFixed(2))} Monate`;
  } else if (timeInSeconds >= secondsInDay * 2) {
    const days = timeInSeconds / secondsInDay;
    return `${Number(days.toFixed(2))} Tage`;
  } else if (timeInSeconds >= secondsInHour * 2) {
    const hours = timeInSeconds / secondsInHour;
    return `${Number(hours.toFixed(2))} Stunden`;
  } else if (timeInSeconds >= secondsInMinute * 2) {
    const minutes = timeInSeconds / secondsInMinute;
    return `${Number(minutes.toFixed(2))} Minuten`;
  } else {
    return `${Number(timeInSeconds.toFixed(2))} Sekunden`;
  }
}
