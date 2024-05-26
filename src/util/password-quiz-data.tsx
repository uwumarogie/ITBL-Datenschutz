import React from "react";

export type QuizParams = {
  className?: string;
  question: string;
  hint?: string | React.ReactNode;
  answers: string[];
  correctAnswer: number;
  hintAnswers?: string[];
  onSelect?: (selection: number, isDone: boolean) => void;
  // If enabled, the user only has a single try. After selection, it will show the solution to the user.
  showCorrectAnswer?: boolean;
};

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
      "Auch gängige Muster wie Wiederholungen und Tastaturfolgen sowie das Hinzufügen von Zahlen oder Sonderzeichen am Anfang oder Ende einfacher Passwörter werden geprüft. Welches Passwort ist am sichersten?",
    answers: ["asdfgh", "abcd1234", "hallo!", "{username}"],
    hint: "Vermeide Wiederholungen und einfache Muster. Das Hinzufügen von Sonderzeichen verbessert die Sicherheit.",
    showCorrectAnswer: true,
    correctAnswer: 2,
  },
  {
    question:
      "Ein Freund von dir wurde bereits gehackt. Der Hacker kennt schon deinen Namen und dein Geburtsdatum. Welches der Passwörter ist am sichersten?",
    answers: ["{username}1234", "2008{username}", "password1", "SakPze69"],
    hint: "Verwende keine persönlichen Informationen wie deinen Namen oder Geburtsdatum in deinem Passwort.",
    showCorrectAnswer: true,
    correctAnswer: 3,
  },
  {
    question:
      "Der Hacker probiert es zudem mit einem Brute-Force-Angriff. Je länger das Passwort, desto besser. Achte immer darauf, dass dein Passwort aus mindestens 8 Zeichen besteht. Welches der Passwörter ist am sichersten?",
    answers: ["Saf45", "se5PmsW", "Sj5Kf23eg", "fT3nPajl98bn3"],
    hint: "Brute-Force-Angriff: Es werden systematisch alle möglichen Kombinationen ausprobiert. Je mehr Stellen das Passwort hat, desto mehr Möglichkeiten muss der Angreifer berücksichtigen.",
    showCorrectAnswer: true,
    correctAnswer: 3,
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
};

export const passwordData: PasswordData[] = [
  { password: "JohnDoe!123", strength: 2 },
  { password: "Emily2020!", strength: 2 },
  { password: "Pass123word", strength: 1 },
  { password: "Chris$789", strength: 2 },
  { password: "helloworld", strength: 0 },
  { password: "Summer@2021", strength: 2 },
  { password: "Welcome123", strength: 1 },
  { password: "MyPass@word", strength: 2 },
  { password: "Sarah!78", strength: 2 },
  { password: "David@2022", strength: 2 },
  { password: "qwertyuiop", strength: 0 },
  { password: "letmein2020", strength: 1 },
  { password: "Sunshine$", strength: 2 },
  { password: "Robert123", strength: 1 },
  { password: "simplepass", strength: 0 },
  { password: "Good$Pass1", strength: 2 },
  { password: "Str@ngth8", strength: 2 },
  { password: "Michael123$", strength: 2 },
  { password: "WeakPass", strength: 0 },
  { password: "Anna2022@", strength: 2 },
  { password: "Football2020", strength: 1 },
  { password: "Basketball!", strength: 1 },
  { password: "CharlieBrown1", strength: 1 },
  { password: "Lucy@1234", strength: 2 },
  { password: "Keyboard!", strength: 1 },
  { password: "Type1234", strength: 1 },
  { password: "Secure!Pass", strength: 2 },
  { password: "Insecure", strength: 0 },
  { password: "Admin@2020", strength: 2 },
  { password: "P@ssw0rd!", strength: 2 },
  { password: "NotSoSecure", strength: 0 },
  { password: "Jasmine@1", strength: 2 },
  { password: "Aladdin123", strength: 1 },
  { password: "GenieLamp!", strength: 1 },
  { password: "Mermaid2021", strength: 1 },
  { password: "Password!2", strength: 2 },
  { password: "TechGeek!123", strength: 2 },
  { password: "Gamer$2020", strength: 2 },
  { password: "P@ssword123", strength: 2 },
  { password: "User@2020", strength: 2 },
  { password: "Default1", strength: 1 },
  { password: "Chang3Me!", strength: 2 },
  { password: "N3wP@ssw0rd", strength: 2 },
  { password: "IloveJava1", strength: 1 },
  { password: "Python@2021", strength: 2 },
  { password: "C0d3Rocks!", strength: 2 },
  { password: "L3arn@C0de", strength: 2 },
  { password: "1LoveC0ding", strength: 1 },
  { password: "Devel0per!", strength: 2 },
];

