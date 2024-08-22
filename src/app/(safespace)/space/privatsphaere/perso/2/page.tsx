"use client";
import { useState } from "react";
import PersoComponent, { CheckboxData } from "../perso";
import Robot from "@/components/robot/robot";
import Button from "@/components/button";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";

export default function Perso() {
  const router = useRouter();
  const t = useTranslations('privacy.perso2');

  const [moduleFinished, setModuleFinished] = useState(false);
  const [checkboxes, setCheckboxes] = useState<CheckboxData[]>([
    {
      bottom: 88,
      left: 15,
      hoverText: t('checkboxes.eyeColor'),
      isChecked: false,
      isPersonalData: true,
    },
    {
      bottom: 88,
      left: 68,
      hoverText: t('checkboxes.address'),
      isChecked: false,
      isPersonalData: true,
    },
    {
      bottom: 78,
      left: 18,
      hoverText: t('checkboxes.height'),
      isChecked: false,
      isPersonalData: true,
    },
    {
      bottom: 69,
      left: 22,
      hoverText: t('checkboxes.issueDate'),
      isChecked: false,
      isPersonalData: false,
    },
    {
      bottom: 58,
      left: 27,
      hoverText: t('checkboxes.issuingAuthority'),
      isChecked: false,
      isPersonalData: true,
    },
    {
      bottom: 44,
      left: 90,
      hoverText: t('checkboxes.idCardLogo'),
      isChecked: false,
      isPersonalData: false,
    },
    {
      bottom: -3,
      left: 90,
      hoverText: t('checkboxes.federalPrintingOffice'),
      isChecked: false,
      isPersonalData: false,
    },
  ]);

  return (
    <>
      {moduleFinished ? (
        <div className="p-2 flex flex-col items-center gap-4 lg:mt-8">
          <Robot expression="resting" className="mb-6" />
          <span className="text-center max-w-[700px]">
            {t('completion.text')}
          </span>
          <Button
            onClick={() => router.push("/space/privatsphaere/swipe")}
            className="max-w-[150px] lg:mt-4"
          >
            {t('completion.button')}
          </Button>
        </div>
      ) : (
        <PersoComponent
          checkboxes={checkboxes}
          imgSrc="/id-back.png"
          setCheckboxes={setCheckboxes}
          hint={t('hint')}
          title={t('title')}
          nextPageHref="/space/privatsphaere"
          onFinish={() => setModuleFinished(true)}
        />
      )}
    </>
  );
}
