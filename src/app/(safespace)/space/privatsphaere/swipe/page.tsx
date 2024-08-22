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
import { useTranslations } from "next-intl";

export type PrivacyQuizQuestion = {
  questionText: string;
  explanation: string;
  icon: React.ReactNode;
  isPersonenbezogen: boolean;
};

export default function PersoQuiz() {
  const t = useTranslations('privacy.swipe');

  const unsortedQuestions: PrivacyQuizQuestion[] = [
    {
      questionText: t('question1'),
      explanation: t('explanation1'),
      icon: <Heart size={150} />,
      isPersonenbezogen: true,
    },
    {
      questionText: t('question2'),
      explanation: t('explanation2'),
      icon: <PhoneCall size={150} />,
      isPersonenbezogen: true,
    },
    {
      questionText: t('question3'),
      explanation: t('explanation3'),
      icon: <Scroll size={150} />,
      isPersonenbezogen: true,
    },
    {
      questionText: t('question4'),
      explanation: t('explanation4'),
      icon: <MapPin size={150} />,
      isPersonenbezogen: true,
    },
    {
      questionText: t('question5'),
      explanation: t('explanation5'),
      icon: <CreditCard size={150} />,
      isPersonenbezogen: true,
    },
    {
      questionText: t('question6'),
      explanation: t('explanation6'),
      icon: <Cross size={150} />,
      isPersonenbezogen: true,
    },
    {
      questionText: t('question7'),
      explanation: t('explanation7'),
      icon: <Fingerprint size={150} />,
      isPersonenbezogen: true,
    },
    {
      questionText: t('question8'),
      explanation: t('explanation8'),
      icon: <Hospital size={150} />,
      isPersonenbezogen: true,
    },
    {
      questionText: t('question9'),
      explanation: t('explanation9'),
      icon: <Sun size={150} />,
      isPersonenbezogen: false,
    },
    {
      questionText: t('question10'),
      explanation: t('explanation10'),
      icon: <Hamburger size={150} />,
      isPersonenbezogen: false,
    },
    {
      questionText: t('question11'),
      explanation: t('explanation11'),
      icon: <SunHorizon size={150} />,
      isPersonenbezogen: false,
    },
    {
      questionText: t('question12'),
      explanation: t('explanation12'),
      icon: <Browsers size={150} />,
      isPersonenbezogen: false,
    },
    {
      questionText: t('question13'),
      explanation: t('explanation13'),
      icon: <MapPin size={150} />,
      isPersonenbezogen: false,
    },
    {
      questionText: t('question14'),
      explanation: t('explanation14'),
      icon: <Airplane size={150} />,
      isPersonenbezogen: false,
    },
    {
      questionText: t('question15'),
      explanation: t('explanation15'),
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
