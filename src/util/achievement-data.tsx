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
  ];
}
