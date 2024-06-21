"use client";

import {
  Airplane,
  Browsers,
  CarProfile,
  CreditCard,
  Cross,
  Fingerprint,
  Hamburger,
  Heart,
  Hospital,
  MapPin,
  PhoneCall,
  Scroll,
  Sun,
  SunHorizon,
} from "@phosphor-icons/react";
import { PrivacyQuiz } from "@/components/privacy-quiz";
import { useEffect, useState } from "react";

export type PrivacyQuizQuestion = {
  questionText: string;
  explanation: string;
  icon: React.ReactNode;
  isPersonenbezogen: boolean;
};

const unsortedQuestions: PrivacyQuizQuestion[] = [
  {
    questionText: "Maria ist verheiratet",
    explanation:
      "Informationen über den Familienstand einer Person (verheiratet, geschieden, verwitwet, ledig) sind personenbezogen, da sie sensible Details über den privaten und sozialen Status offenlegen und rechtliche, finanzielle sowie persönliche Auswirkungen haben können.",
    icon: <Heart size={150} />,
    isPersonenbezogen: true,
  },
  {
    questionText: "Saras Telefonnummer lautet 0176 12345678",
    explanation:
      "Eine Telefonnummer ist eindeutig einer Person zugeordnet und kann verwendet werden, um diese Person direkt zu kontaktieren. Daher ist sie eine personenbezogene Information.",
    icon: <PhoneCall size={150} />,
    isPersonenbezogen: true,
  },
  {
    questionText: "Markus Sozialversicherungsnummer",
    explanation:
      "Die Sozialversicherungsnummer ist eine eindeutige Identifikationsnummer, die einer Person zugeordnet ist und zur Verfolgung ihrer Sozialversicherungsansprüche verwendet wird. Daher ist sie personenbezogen.",
    icon: <Scroll size={28} />    ,
    isPersonenbezogen: true,
  },
  {
    questionText: "Max Standort: 48°10.19361' = 48°10'11.6163'' = 48.16989342°",
    explanation:
      "Der Standort einer Person ist eine personenbezogene Information, da sie genaue Angaben darüber macht, wo sich diese Person zu einem bestimmten Zeitpunkt befindet.",
    icon: <MapPin size={150} />,
    isPersonenbezogen: true,
  },
  {
    questionText: "Kreditkartennummer einer Person",
    explanation:
      "Eine Kreditkartennummer ist eindeutig einer Person zugeordnet und kann zur Identifizierung dieser Person sowie zur Durchführung von Finanztransaktionen verwendet werden. Daher ist sie personenbezogen.",
    icon: <CreditCard size={150} />,
    isPersonenbezogen: true,
  },
  {
    questionText: "Lisa ist evangelisch getauft",
    explanation:
      "Religiöse Zugehörigkeit, wie die Information, dass Lisa evangelisch getauft ist, zählt zu den besonders sensiblen personenbezogenen Daten, da sie Aufschluss über persönliche Überzeugungen gibt.",
    icon: <Cross size={150} />,
    isPersonenbezogen: true,
  },
  {
    questionText: "Fingerabdrücke",
    explanation:
      "Fingerabdrücke sind biometrische Daten, die eine Person eindeutig identifizieren können und daher als personenbezogene Daten gelten.",
    icon: <Fingerprint size={150} />,
    isPersonenbezogen: true,
  },
  {
    questionText: "Krankenakte",
    explanation:
      "Eine Krankenakte enthält umfassende Informationen über die Gesundheit einer Person und gehört zu den besonders sensiblen personenbezogenen Daten.",
    icon: <Hospital size={150} />,
    isPersonenbezogen: true,
  },
  {
    questionText: "28°C°F\nNiederschlag: 0%\nLuftfeuchte: 43%\nWind: 10 km/h",
    explanation:
      "Diese Wetterinformationen sind allgemeine Daten über die Umweltbedingungen und enthalten keine personenbezogenen Informationen.",
    icon: <Sun size={150} />,
    isPersonenbezogen: false,
  },
  {
    questionText: "Anzahl der Kalorien in einem Lebensmittel",
    explanation:
      "Die Kalorienanzahl eines Lebensmittels ist eine allgemeine Information über das Lebensmittel selbst und enthält keine personenbezogenen Daten.",
    icon: <Hamburger size={150} />,
    isPersonenbezogen: false,
  },
  {
    questionText: "Sonnenaufgang heute um 03:28 Uhr",
    explanation:
      "Die Zeit des Sonnenaufgangs ist eine allgemeine Information über natürliche Phänomene und enthält keine personenbezogenen Daten.",
    icon: <SunHorizon size={150} />,
    isPersonenbezogen: false,
  },
  {
    questionText: "1345 User haben heute diese Seite geöffnet",
    explanation:
      "Diese Information beschreibt die Gesamtzahl der Benutzer, die eine Website besucht haben, und enthält keine personenbezogenen Daten.",
    icon: <Browsers size={150} />,
    isPersonenbezogen: false,
  },
  {
    questionText: "48° 10.19361' = 48° 10' 11.6163'' = 48.16989342°",
    explanation:
      "Der Standort ohne Bezug zu einer Person ist keine personenbezogene Information, da sie keine Angaben darüber macht, wo sich eine Person zu einem bestimmten Zeitpunkt befindet.",
    icon: <MapPin size={150} />,
    isPersonenbezogen: false,
  },
  {
    questionText: "Flugnummer nach Prag MS 197",
    explanation:
      "Eine Flugnummer kann indirekt personenbezogen sein, aber nur wenn wenn man eine Person zum FLug zuordnen kann",
    icon: <Airplane size={150} />,
    isPersonenbezogen: false,
  },
  {
    questionText: "Ein Ferrari kann über 350 km/h fahren",
    explanation:
      "Diese Information bezieht sich auf die Leistungsfähigkeit eines Fahrzeugs und enthält keine personenbezogenen Daten.",
    icon: <CarProfile size={150} />,
    isPersonenbezogen: false,
  },
];

function shuffleArray(array: PrivacyQuizQuestion[]) {
  const shuffledArray = array.slice();
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
}

export default function PersoQuiz() {
  const [questions, setQuestions] = useState<PrivacyQuizQuestion[]>([]);

  useEffect(() => {
    const shuffledItems = shuffleArray(unsortedQuestions);
    setQuestions(shuffledItems);
  }, []);

  return (
    <div className="p-6 flex justify-center">
      <PrivacyQuiz questions={questions} />
    </div>
  );
}
