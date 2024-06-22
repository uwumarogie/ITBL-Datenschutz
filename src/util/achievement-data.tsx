export type Achievement = {
  id: string;
  title: string;
  description: string;
  icon?: string | undefined;
  progress: boolean;
};

export enum AchievementId {
  DATENSCHUTZ_HELD = "DATENSCHUTZ_HELD",
  WERBE_GURU = "WERBE_GURU",
  PHISHING_FAENGER = "PHISHING_FAENGER",
  PASSWORD_QUIZ = "PASSWORD_QUIZ",
  PASSWORD_STRENGTH = "PASSWORD_STRENGTH",
  PASSWORD_BUILDER = "PASSWORD_BUILDER",
}

export namespace AchievementData {
  export const achievements: Achievement[] = [
    {
      id: AchievementId.DATENSCHUTZ_HELD,
      title: "Datenschutz-Held",
      description:
        "Du bist jetzt in seinem Gebiet ein Profi. Kläre eine Person in deinem Umfeld auf und überwiege sie ein sicheres Passwort zu erstellen.",
      progress: false,
    },
    {
      id: AchievementId.WERBE_GURU,
      title: "Werbe-Guru",
      description: "Erziele 5 perfekte Werbeangebote.",
      progress: true,
    },
    {
      id: AchievementId.PHISHING_FAENGER,
      title: "Phishing-Fänger",
      description: "Erkenne und melde 2 Phishing-Versuche.",
      progress: true,
    },
    {
      id: AchievementId.PASSWORD_QUIZ,
      title: "Passwort-Quiz",
      description: "Alle Fragen im ersten Quiz richtig beatwortet.",
      progress: true,
    },
    {
      id: AchievementId.PASSWORD_STRENGTH,
      title: "Passwort-Strength",
      description: "Erziele 15 Punkte in der Passwort-Strength-Quiz.",
      progress: true,
    },
    {
      id: AchievementId.PASSWORD_BUILDER,
      title: "Passwort-Builder",
      description:
        "Erstelle ein sicheres Passwort, dass mehr als 1 Millionen Jahre zum Knacken bräuchte",
      progress: true,
    },
  ];
}
