export type PrivacyQuizQuestion = {
  questionText: string;
  correctExplanation: string;
  incorrectExplanation: string;
  imageUrl: string;
  altText: string;
  correctAnswer: boolean;
};

export const questions = [
  {
    questionText: "Ist folgendes Datum personenbezogen?",
    correctExplanation:
      "Ja. Informationen über den Familienstand einer Person (verheiratet, geschieden, verwitwet, ledig) sind personenbezogen, da sie sensible Details über den privaten und sozialen Status offenlegen und rechtliche, finanzielle sowie persönliche Auswirkungen haben können.",
    incorrectExplanation:
      "Nein. Informationen über den Familienstand einer Person (verheiratet, geschieden, verwitwet, ledig) sind personenbezogen, da sie sensible Details über den privaten und sozialen Status offenlegen und rechtliche, finanzielle sowie persönliche Auswirkungen haben können.",
    imageUrl: "/test.svg",
    altText: "Familienstand",
    correctAnswer: true,
  },
  {
    questionText: "Ist das Geburtsdatum personenbezogen?",
    correctExplanation:
      "Ja.Das Geburtsdatum ist personenbezogen, da es Rückschlüsse auf das Alter einer Person zulässt.",
    incorrectExplanation: "No, false",
    imageUrl: "/path/to/another/image.png",
    altText: "Geburtsdatum",
    correctAnswer: true,
  },
];
