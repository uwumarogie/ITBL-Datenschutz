
export type Achievement = {
  id: string;
  title: string;
  description: string;
  icon?: string | undefined;
  progress: boolean;
};

export namespace AchievementData {

  export const achievements: Achievement[] = [
    {
      id: "datenschutz-held",
      title: "Datenschutz-Held",
      description: "Du bist jetzt in seinem Gebiet ein Profi. Kläre eine Person in deinem Umfeld auf und überwiege sie ein sicheres Passwort zu erstellen.",
      progress: false
    },
    {
      id: "werbe-guru",
      title: "Werbe-Guru",
      description: "Erziele 5 perfekte Werbeangebote.",
      progress: true,
    },
    {
      id: "phishing-fänger",
      title: "Phishing-Fänger",
      description: "Erkenne und melde 2 Phishing-Versuche.",
      progress: true,
    },
  ]
}