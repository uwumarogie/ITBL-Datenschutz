import React from "react";
import { QuizParams } from "@/components/Quiz/quiz";

export const topTenPasswords = [
  "123456789",
  "12345678",
  "hallo",
  "1234567890",
  "1234567",
  "password",
  "password1",
  "target123",
  "iloveyou",
  "gwerty123",
];

export const replaceCharacter = [
  "0 für O",
  "1 oder ! für I",
  "3 für E",
  "@ oder 4 für A",
  " $ oder 5 für S",
  " 6 oder 9 für G",
  " 7 für T",
  " 8 für B",
];

export const quizzes: QuizParams[] = [
  {
    question:
      "Ein Hacker möchte sich in deinen Social Media Account hacken. Häufig verwendete Passwörter werden zuerst geknackt. Welches der Passwörter ist am sichersten?",
    answers: ["123456789", "hallo", "iloveyou", "asdfgh"],
    hint: (
      <span>
        Liste der Top Ten deutscher Passwörter 2023:{" "}
        <a
          href="https://hpi.de/news/jahrgaenge/2023/123456789-ist-das-beliebteste-passwort-2023-in-deutschland.html"
          className="underline"
        >
          Siehe Link
        </a>{" "}
      </span>
    ),
    showCorrectAnswer: true,
    correctAnswer: 3,
  },
  {
    question:
      "Neben den häufigsten Passwörtern werden auch gängige Wiederholungs- oder Tastaturmuster, wie Zahlenfolgen überprüft. Dazu gehört ebenfalls das Hinzufügen einer Zahl oder eines Sonderzeichens am Anfang oder Ende eines sonst simplen Passwortes, oder das Austauschen eines Buchstabens mit einer Zahl oder einem ähnlichen Sonderzeichen. Welches der Passwörter ist am sichersten?",
    answers: ["Marie!", "asdfgh", "abcd1234", "h@llo"],
    hint: "Vermeide Wiederholungen und einfache Muster. Das Hinzufügen von Sonderzeichen verbessert die Sicherheit.",
    showCorrectAnswer: true,
    correctAnswer: 0,
  },
  {
    question:
      "Ein Freund von dir wurde bereits gehackt. Der Hacker kennt schon deinen Namen und dein Geburtsdatum. Welches der Passwörter ist am sichersten?",
    answers: ["Marie1234", "2008Marie", "SakPze69", "password1"],
    hint: "Verwende keine persönlichen Informationen wie deinen Namen oder Geburtsdatum in deinem Passwort.",
    showCorrectAnswer: true,
    correctAnswer: 2,
  },
  {
    question:
      "Der Hacker probiert es zudem mit einem Brute-Force-Angriff. Je länger das Passwort, desto besser. Achte immer darauf, dass dein Passwort aus mindestens 8 Zeichen besteht. Welches der Passwörter ist am sichersten?",
    answers: ["Saf45", "fT3nPajl98bn3", "se5PmsW", "Sj5Kf23eg"],
    hint: "Brute-Force-Angriff: Es werden systematisch alle möglichen Kombinationen ausprobiert. Je mehr Stellen das Passwort hat, desto mehr Möglichkeiten muss der Angreifer berücksichtigen.",
    showCorrectAnswer: true,
    correctAnswer: 1,
  },
  {
    question:
      "Je mehr unterschiedliche Zeichen du verwendest, desto sicherer ist dein Passwort gegen Brute-Force-Angriffe. Dazu gehören Kleinbuchstaben, Großbuchstaben, Zahlen und Sonderzeichen. Welches der Passwörter ist am sichersten?",
    answers: ["Ab1h3zu66", "a4spf(h2", "S#jfO:hPll", "R_9fh!P5Q+d"],
    hint: "Die Verwendung einer Mischung aus verschiedenen Zeichentypen erhöht die Sicherheit erheblich.",
    showCorrectAnswer: true,
    correctAnswer: 3,
  },
];

export type PasswordData = {
  password: string;
  strength: number;
  explanation: string;
};

export const passwordData: PasswordData[] = [
  {
    password: "JosP7s+sw",
    strength: 2,
    explanation: "Das Passwort erfüllt alle Bedingungen.",
  },
  {
    password: "eWg!m8",
    strength: 1,
    explanation: "Das Passwort ist zu kurz.",
  },
  {
    password: "emily2020",
    strength: 0,
    explanation:
      "Das Passwort enthält keinen Großbuchstaben und kein Sonderzeichen.",
  },
  {
    password: "HaPPy!",
    strength: 0,
    explanation: "Das Passwort enthält keine Zahl und ist zu kurz.",
  },
  {
    password: "Z7gT@f8!3",
    strength: 2,
    explanation: "Das Passwort erfüllt alle Bedingungen.",
  },
  {
    password: "helloworld",
    strength: 0,
    explanation:
      "Das Passwort enthält keinen Großbuchstaben, keine Zahl und kein Sonderzeichen.",
  },
  {
    password: "Summer@2021",
    strength: 2,
    explanation: "Das Passwort erfüllt alle Bedingungen.",
  },
  {
    password: "P3f!Qx",
    strength: 1,
    explanation: "Das Passwort ist zu kurz.",
  },
  {
    password: "Wolke7",
    strength: 0,
    explanation: "Das Passwort enthält kein Sonderzeichen und ist zu kurz.",
  },
  {
    password: "Ae7mg?gX",
    strength: 2,
    explanation: "Das Passwort erfüllt alle Bedingungen.",
  },
  {
    password: "F4j@Qj$6#",
    strength: 2,
    explanation: "Das Passwort erfüllt alle Bedingungen.",
  },
  {
    password: "qwertyuiop",
    strength: 0,
    explanation:
      "Das Passwort enthält keinen Großbuchstaben, kein Sonderzeichen und keine Zahl.",
  },
  {
    password: "letmein2020",
    strength: 0,
    explanation:
      "Das Passwort enthält keinen Großbuchstaben und kein Sonderzeichen.",
  },
  {
    password: "Sunshine$",
    strength: 1,
    explanation: "Das Passwort enthält keine Zahl.",
  },
  {
    password: "d7hg&asd1",
    strength: 1,
    explanation: "Das Passwort enthält keinen Großbuchstaben.",
  },
  {
    password: "simplepass",
    strength: 0,
    explanation:
      "Das Passwort enthält keinen Großbuchstaben, kein Sonderzeichen und keine Zahl.",
  },
  {
    password: "Z12kL!f?sH",
    strength: 2,
    explanation: "Das Passwort erfüllt alle Bedingungen.",
  },
  {
    password: "abc123$%&",
    strength: 1,
    explanation: "Das Passwort enthält keinen Großbuchstaben.",
  },
  {
    password: "F4ss!",
    strength: 1,
    explanation: "Das Passwort ist zu kurz.",
  },
  {
    password: "WeakPass",
    strength: 0,
    explanation: "Das Passwort enthält kein Sonderzeichen und keine Zahl.",
  },
  {
    password: "Id3jf&fsa1",
    strength: 2,
    explanation: "Das Passwort erfüllt alle Bedingungen.",
  },
  {
    password: "Football2020",
    strength: 1,
    explanation: "Das Passwort enthält kein Sonderzeichen.",
  },
  {
    password: "Basketball!",
    strength: 1,
    explanation: "Das Passwort enthält keine Zahl.",
  },
  {
    password: "CharlieBrown1",
    strength: 1,
    explanation: "Das Passwort enthält kein Sonderzeichen.",
  },
  {
    password: "sgPPs%3t",
    strength: 2,
    explanation: "Das Passwort erfüllt alle Bedingungen.",
  },
  {
    password: "Keyboard!",
    strength: 1,
    explanation: "Das Passwort enthält keine Zahl.",
  },
  {
    password: "1234ABCD",
    strength: 1,
    explanation:
      "Das Passwort enthält keinen Kleinbuchstaben und kein Sonderzeichen.",
  },
  {
    password: "GlücksKlee! ",
    strength: 1,
    explanation: "Das Passwort enthält keine Zahl.",
  },
  {
    password: "Insecure",
    strength: 0,
    explanation: "Das Passwort enthält kein Sonderzeichen und keine Zahl.",
  },
  {
    password: "W2j@Tp$9#",
    strength: 2,
    explanation: "Das Passwort erfüllt alle Bedingungen.",
  },
  {
    password: "Black&White",
    strength: 1,
    explanation: "Das Passwort enthält keine Zahl.",
  },
  {
    password: "NotSecure",
    strength: 0,
    explanation: "Das Passwort enthält kein Sonderzeichen und keine Zahl.",
  },
  {
    password: "Is1gPdkk!",
    strength: 2,
    explanation: "Das Passwort erfüllt alle Bedingungen.",
  },
  {
    password: "!Aladdin123!",
    strength: 2,
    explanation: "Das Passwort erfüllt alle Bedingungen.",
  },
  {
    password: "GenieLamp!",
    strength: 1,
    explanation: "Das Passwort enthält keine Zahl.",
  },
  {
    password: "M3rm@id",
    strength: 1,
    explanation: "Das Passwort ist zu kurz.",
  },
  {
    password: "Abc123",
    strength: 0,
    explanation: "Das Passwort enthält kein Sonderzeichen und ist zu kurz.",
  },
  {
    password: "TechGeek!123",
    strength: 2,
    explanation: "Das Passwort erfüllt alle Bedingungen.",
  },
  {
    password: "Gamer$2020",
    strength: 2,
    explanation: "Das Passwort erfüllt alle Bedingungen.",
  },
  {
    password: "Ocean11! ",
    strength: 2,
    explanation: "Das Passwort erfüllt alle Bedingungen.",
  },
  {
    password: "Sh?Ts23",
    strength: 1,
    explanation: "Das Passwort ist zu kurz.",
  },
  {
    password: "Default1",
    strength: 1,
    explanation: "Das Passwort enthält kein Sonderzeichen.",
  },
  {
    password: "Chang3Me!",
    strength: 2,
    explanation: "Das Passwort erfüllt alle Bedingungen.",
  },
  {
    password: "N3wP@ssw0rd",
    strength: 2,
    explanation: "Das Passwort erfüllt alle Bedingungen.",
  },
  {
    password: "IloveJava1",
    strength: 1,
    explanation: "Das Passwort enthält kein Sonderzeichen.",
  },
  {
    password: "Python@2021",
    strength: 2,
    explanation: "Das Passwort erfüllt alle Bedingungen.",
  },
  {
    password: "C0d3Rocks!",
    strength: 2,
    explanation: "Das Passwort erfüllt alle Bedingungen.",
  },
  {
    password: "L3arn@C0de",
    strength: 2,
    explanation: "Das Passwort erfüllt alle Bedingungen.",
  },
  {
    password: "1LoveC0ding",
    strength: 1,
    explanation: "Das Passwort enthält kein Sonderzeichen.",
  },
  {
    password: "Devel0per!",
    strength: 2,
    explanation: "Das Passwort erfüllt alle Bedingungen.",
  },
];
