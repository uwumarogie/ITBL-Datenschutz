"use client";

import ModuleIntro from "@/components/module-intro";
import { Question, Textbox, ThumbsUp } from "@phosphor-icons/react";
import { useTranslations } from 'next-intl';

export default function Passwort() {
  const t = useTranslations('password.moduleIntro');

  return (
    <div className="flex flex-wrap items-start max-w-[1800px]">
      <ModuleIntro
        title={t('title')}
        description={t('description')}
        entryPath="/space/passwort/quiz"
        background="/passwort.png"
        chapter={[
          {
            title: t('chapter1Title'),
            icon: <Question />,
          },
          {
            title: t('chapter2Title'),
            icon: <Textbox />,
          },
          {
            title: t('chapter3Title'),
            icon: <ThumbsUp />,
          },
        ]}
      />
    </div>
  );
}
