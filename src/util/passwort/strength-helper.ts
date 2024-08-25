export function passwordAnimation(
  password: string,
  setDisplayPassword: (str: string) => void,
) {
  const theLetters = "abcdefghijklmnopqrstuvwxyz#%&^+=-";
  const speed = 20;
  const increment = 8;

  let clen = password.length;
  let si = 0;
  let stri = 0;
  let block = "";
  let fixed = "";

  const rustle = (i: number) => {
    setTimeout(() => {
      if (--i) {
        rustle(i);
      }
      nextFrame();
      si = si + 1;
    }, speed);
  };

  const nextFrame = () => {
    for (let i = 0; i < clen - stri; i++) {
      const num = Math.floor(theLetters.length * Math.random());
      const letter = theLetters.charAt(num);
      block += letter;
    }
    if (si === increment - 1) {
      stri++;
    }
    if (si === increment) {
      fixed += password.charAt(stri - 1);
      si = 0;
    }
    setDisplayPassword(fixed + block);
    block = "";
  };

  rustle(clen * increment + 1);
}

function generateEasyPassword() {
  const characters = "abcdefghijklmnopqrstuvwxyz0123456789";

  let password = "";

  // Generate a password of 6 to 8 characters in length
  const passwordLength = Math.floor(Math.random() * 3) + 6; // Random length between 6 and 8

  for (let i = 0; i < passwordLength; i++) {
    password += characters[Math.floor(Math.random() * characters.length)];
  }

  return password;
}

function generateStrongPassword() {
  const lowerCase = "abcdefghijklmnopqrstuvwxyz";
  const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "0123456789";
  const specialChars = "!@#$%^&*\"'()+,-./:;<=>?[\\]^_`{|}~";

  let password = "";

  // Ensure at least one of each required character type
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += numbers[Math.floor(Math.random() * numbers.length)];
  password += specialChars[Math.floor(Math.random() * specialChars.length)];

  // Fill the rest of the password to meet the minimum length requirement
  const allChars = lowerCase + upperCase + numbers + specialChars;

  while (password.length < 10) {
    password += allChars[Math.floor(Math.random() * allChars.length)];
  }

  return shufflePassword(password);
}

function generateMediumPassword() {
  const lowerCase = "abcdefghijklmnopqrstuvwxyz";
  const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "0123456789";
  const specialChars = "!@#$%^&*\"'()+,-./:;<=>?[\\]^_`{|}~";

  let password = "";

  // Ensure at least one of each required character type
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += numbers[Math.floor(Math.random() * numbers.length)];
  password += specialChars[Math.floor(Math.random() * specialChars.length)];

  // Fill the rest of the password to meet the minimum length requirement
  const allChars = lowerCase + upperCase + numbers + specialChars;
  while (password.length < 8) {
    password += allChars[Math.floor(Math.random() * allChars.length)];
  }

  return shufflePassword(password);
}

function shuffleArray<T>(array: Array<T>) {
  for (let i = array.length - 1; i > 0; i--) {
    // Generate a random index between 0 and i
    const j = Math.floor(Math.random() * (i + 1));

    // Swap elements at index i and j
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function shufflePassword(password: string) {
  return password
    .split("")
    .sort(() => Math.random() - 0.5)
    .join("");
}

function createPasswordStrength(
  explanation: string,
  generatePassword: () => string,
) {
  const data = [];
  for (let i = 0; i < 15; i++) {
    const password = generatePassword();

    data.push({
      password: password,
      explanation: explanation,
    });
  }

  return data;
}
export function generatePassword() {
  const data: Array<{ password: string; explanation: string }> = [];

  const mediumExplanation =
    "Dieses Passwort wird als mittelstark angesehen, da es mindestens 8 Zeichen lang ist und mindestens einen Kleinbuchstaben, einen Großbuchstaben, eine Zahl und ein Sonderzeichen enthält.";
  const strongExplanation =
    "Dieses Passwort gilt als stark, da es mindestens 10 Zeichen lang ist und mindestens einen Kleinbuchstaben, einen Großbuchstaben, eine Zahl und ein Sonderzeichen enthält. Es bietet ein höheres Maß an Sicherheit.";

  const easyExplanation =
    "Dieses Passwort ist einfach, da es aus 6 bis 8 Zeichen besteht und nur Kleinbuchstaben und Zahlen enthält. Es ist leicht zu merken, aber möglicherweise nicht so sicher.";

  const mediumData = createPasswordStrength(
    mediumExplanation,
    generateMediumPassword,
  );

  const strongData = createPasswordStrength(
    strongExplanation,
    generateStrongPassword,
  );

  const easyData = createPasswordStrength(
    easyExplanation,
    generateEasyPassword,
  );

  const result = data.concat(mediumData).concat(strongData).concat(easyData);

  return shuffleArray(result);
}
