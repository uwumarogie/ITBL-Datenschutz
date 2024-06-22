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
  INTRO_FINISHED = "INTRO_FINISHED",
  PASSWORT_FINISHED = "PASSWORT_FINISHED",
  PRIVATSPHAERE_FINISHED = "PRIVATSPHAERE_FINISHED",
  DATENVERARBEITUNG_FINISHED = "DATENVERARBEITUNG_FINISHED",
  PHISHING_FINISHED = "PHISHING_FINISHED",
  MEINE_RECHTE_FINISHED = "MEINE_RECHTE_FINISHED",
  PASSWORD_QUIZ = "PASSWORD_QUIZ",
  PROFIL_DETEKTIV = "PROFIL_DETEKTIV",
}

export namespace AchievementData {
  export const achievements: Achievement[] = [
    {
      id: AchievementId.DATENSCHUTZ_HELD,
      title: "Datenschutz-Held",
      description:
        "Du bist jetzt in deinem Gebiet ein Profi. Kläre eine Person in deinem Umfeld auf und überzeuge sie, ein sicheres Passwort zu erstellen.",
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
      id: AchievementId.INTRO_FINISHED,
      title: "Einsteiger",
      description: "Schließe das Intromodul erfolgreich ab",
      progress: true,
    },
    {
      id: AchievementId.PASSWORT_FINISHED,
      title: "Passwort-Profi",
      description: "Schließe das Passwortmodul erfolgreich ab",
      progress: true,
    },
    {
      id: AchievementId.PRIVATSPHAERE_FINISHED,
      title: "Privatsphäre-Protektor",
      description: "Schließe das Privatsphäremodul erfolgreich ab",
      progress: true,
    },
    {
      id: AchievementId.DATENVERARBEITUNG_FINISHED,
      title: "Datenverarbeitungs-Diplomat",
      description: "Schließe das Datenverarbeitungsmodul erfolgreich ab",
      progress: true,
    },
    {
      id: AchievementId.PHISHING_FINISHED,
      title: "Phishing-Abwehrer",
      description: "Schließe das Phishingmodul erfolgreich ab",
      progress: true,
    },
    {
      id: AchievementId.MEINE_RECHTE_FINISHED,
      title: "Rechte-Ratgeber",
      description: 'Schließe das "Meine Rechte"-Modul erfolgreich ab',
      progress: true,
    },
    {
      id: AchievementId.PASSWORD_QUIZ,
      title: "Passwort-Quiz",
      description: "Beantworte alle Fragen im ersten Quiz richtig",
      progress: true,
    },
    {
      id: AchievementId.PROFIL_DETEKTIV,
      title: "Profil-Detektiv",
      description:
        "Ordne alle Anzeichen für Fake- und reale Profile beim ersten Versuch korrekt zu",
      progress: true,
    },
  ];
}
