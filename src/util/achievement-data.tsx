"use client";
import {
  Barbell,
  CloudArrowDown,
  Detective,
  FishSimple,
  Gear,
  Gavel,
  HandSwipeRight,
  IconProps,
  Lightbulb,
  ListChecks,
  LockKey,
  Password,
  PencilRuler,
  Robot,
  Scales,
  Star,
} from "@phosphor-icons/react";

export type Achievement = {
  id: string;
  title: string;
  description: string;
  icon?: React.ReactNode;
  progress: boolean;
};

export enum AchievementId {
  MASTER_QUIZ = "MASTER_QUIZ",
  WERBE_GURU = "WERBE_GURU", //TODO
  INTRO_FINISHED = "INTRO_FINISHED", //TODO
  DATENVERARBEITUNG_FINISHED = "DATENVERARBEITUNG_FINISHED", //TODO
  MEINE_RECHTE_FINISHED = "MEINE_RECHTE_FINISHED", //TODO
  PASSWORT_FINISHED = "PASSWORT_FINISHED",
  PRIVATSPHAERE_FINISHED = "PRIVATSPHAERE_FINISHED",
  PHISHING_FINISHED = "PHISHING_FINISHED",
  PASSWORD_QUIZ = "PASSWORD_QUIZ",
  PASSWORD_STRENGTH = "PASSWORD_STRENGTH",
  PASSWORD_BUILDER = "PASSWORD_BUILDER",
  PROFIL_DETEKTIV = "PROFIL_DETEKTIV",
  PRIVATSPHAERE_QUIZ = "PRIVATSPHAERE_QUIZ",
  PRIVATSPHAERE_SWIPE = "PRIVATSPHAERE_SWIPE",

  DATA_PROCESSING_CHECKPOINT_STARTED = "#DATA_PROCESSING_CHECKPOINT_STARTED",
  DATA_PROCESSING_CHECKPOINT_INTRODUCTION = "#DATA_PROCESSING_CHECKPOINT_INTRODUCTION",
  DATA_PROCESSING_CHECKPOINT_COLLECT = "#DATA_PROCESSING_CHECKPOINT_COLLECT",
  DATA_PROCESSING_CHECKPOINT_PROCESS = "#DATA_PROCESSING_CHECKPOINT_PROCESS",

  RECHTSANWALT = "RECHTSANWALT",
}

export namespace AchievementData {
  const iconProps: IconProps = {
    weight: "fill",
    className: "w-full h-full p-3",
  };

  export const achievements: Achievement[] = [
    {
      id: AchievementId.MASTER_QUIZ,
      title: "Master",
      description:
        "Schließe das Master-Quiz erfolgreich ab und werde zum Datenschutz-Experte",
      progress: false,
      icon: <Star {...iconProps} />,
    },
    {
      id: AchievementId.WERBE_GURU,
      title: "Werbe-Guru",
      description: "Erziele 5 perfekte Werbeangebote.",
      progress: false,
      icon: <Robot {...iconProps} />,
    },
    {
      id: AchievementId.INTRO_FINISHED,
      title: "Einsteiger",
      description: "Schließe das Intromodul erfolgreich ab",
      progress: false,
      icon: <Lightbulb {...iconProps} />,
    },
    {
      id: AchievementId.PASSWORT_FINISHED,
      title: "Passwort-Profi",
      description: "Schließe das Passwortmodul erfolgreich ab",
      progress: false,
      icon: <Password {...iconProps} />,
    },
    {
      id: AchievementId.PRIVATSPHAERE_FINISHED,
      title: "Privatsphäre-Protektor",
      description: "Schließe das Privatsphäremodul erfolgreich ab",
      progress: false,
      icon: <LockKey {...iconProps} />,
    },
    {
      id: AchievementId.DATENVERARBEITUNG_FINISHED,
      title: "Datenverarbeitungs-Diplomat",
      description: "Schließe das Datenverarbeitungsmodul erfolgreich ab",
      progress: false,
      icon: <CloudArrowDown {...iconProps} />,
    },
    {
      id: AchievementId.PHISHING_FINISHED,
      title: "Phishing-Abwehrer",
      description: "Schließe das Phishingmodul erfolgreich ab",
      progress: false,
      icon: <FishSimple {...iconProps} />,
    },
    {
      id: AchievementId.MEINE_RECHTE_FINISHED,
      title: "Rechte-Ratgeber",
      description: 'Schließe das "Meine Rechte"-Modul erfolgreich ab',
      progress: false,
      icon: <Scales {...iconProps} />,
    },
    {
      id: AchievementId.PASSWORD_QUIZ,
      title: "Passwort-Quiz",
      description: "Beantworte alle Fragen im Passwort-Quiz Quiz richtig",
      progress: false,
      icon: <ListChecks {...iconProps} />,
    },
    {
      id: AchievementId.PROFIL_DETEKTIV,
      title: "Profil-Detektiv",
      description:
        "Ordne alle Anzeichen für Fake- und reale Profile beim ersten Versuch korrekt zu",
      progress: false,
      icon: <Detective {...iconProps} />,
    },
    {
      id: AchievementId.PASSWORD_STRENGTH,
      title: "Passwort-Strength",
      description: "Erziele 15 Punkte im Passwort-Strength Spiel.",
      progress: false,
      icon: <Barbell {...iconProps} />,
    },
    {
      id: AchievementId.PASSWORD_BUILDER,
      title: "Passwort-Builder",
      description:
        "Erstelle ein sicheres Passwort, dass mehr als 1 Millionen Jahre zum Knacken bräuchte",
      progress: false,
      icon: <PencilRuler {...iconProps} />,
    },
    {
      id: AchievementId.PRIVATSPHAERE_QUIZ,
      title: "Privatsphäre-Quiz",
      description: "Beantworte alle Fragen im Privatsphäre-Quiz richtig",
      progress: false,
      icon: <ListChecks {...iconProps} />,
    },
    {
      id: AchievementId.PRIVATSPHAERE_SWIPE,
      title: "Privatsphäre-Schützer",
      description:
        "Entscheide für alle Daten richtig, ob sie personenbezogen sind oder nicht",
      progress: false,
      icon: <HandSwipeRight {...iconProps} />,
    },
    {
      id: AchievementId.DATENVERARBEITUNG_FINISHED,
      title: "Datenmaschine",
      description: "Werde Meister in der Datensammlung und -verarbeitung",
      progress: false,
      icon: <Gear {...iconProps} />,
    },
    {
      id: AchievementId.RECHTSANWALT,
      title: "Rechtsanwalt",
      description:
        "Ordne im DSGVO Game beim ersten Versuch alle Aussagen den richtigen Artikeln zu",
      progress: false,
      icon: <Gavel {...iconProps} />,
    },
  ];
}
