"use client";
import { useState } from "react";
import PersoComponent, { CheckboxData } from "../perso";
import Button from "@/components/button";
import Robot from "@/components/robot/robot";
import { useTranslations } from "next-intl";

export default function Perso() {
  const [moduleStarted, setModuleStarted] = useState(false);
  const [instructionsRead, setInstructionsRead] = useState(false);
  const t = useTranslations('privacy.perso1');

  const [checkboxes, setCheckboxes] = useState<CheckboxData[]>([
    {
      bottom: 77,
      left: 6,
      hoverText: t('checkboxes.logoEU'),
      isChecked: false,
      isPersonalData: false,
    },
    {
      bottom: 60,
      left: 10,
      hoverText: t('checkboxes.photo'),
      isChecked: false,
      isPersonalData: true,
    },
    {
      bottom: 89,
      left: 65,
      hoverText: t('checkboxes.idNumber'),
      isChecked: false,
      isPersonalData: true,
    },
    {
      bottom: 52,
      left: 57,
      hoverText: t('checkboxes.firstName'),
      isChecked: false,
      isPersonalData: true,
    },
    {
      bottom: 66,
      left: 70,
      hoverText: t('checkboxes.lastName'),
      isChecked: false,
      isPersonalData: true,
    },
    {
      bottom: 38,
      left: 39,
      hoverText: t('checkboxes.dob'),
      isChecked: false,
      isPersonalData: true,
    },
    {
      bottom: 38,
      left: 83,
      hoverText: t('checkboxes.nationality'),
      isChecked: false,
      isPersonalData: true,
    },
    {
      bottom: 29,
      left: 59,
      hoverText: t('checkboxes.birthPlace'),
      isChecked: false,
      isPersonalData: true,
    },
    {
      bottom: 18,
      left: 72,
      hoverText: t('checkboxes.accessNumber'),
      isChecked: false,
      isPersonalData: true,
    },
    {
      bottom: 7,
      left: 70,
      hoverText: t('checkboxes.signature'),
      isChecked: false,
      isPersonalData: true,
    },
    {
      bottom: 16,
      left: 39,
      hoverText: t('checkboxes.expiryDate'),
      isChecked: false,
      isPersonalData: false,
    },
  ]);

  return (
    <>
      {moduleStarted && instructionsRead ? (
        <PersoComponent
          checkboxes={checkboxes}
          imgSrc="/id-front.png"
          setCheckboxes={setCheckboxes}
          hint={t('hint')}
          title={t('title')}
          nextPageHref="/space/privatsphaere/perso/2"
        />
      ) : (
        <div className="p-2 flex flex-col items-center gap-4 lg:mt-8">
          {!moduleStarted && !instructionsRead ? (
            <>
              <Robot expression="resting" className="mb-6" />
              <span className="text-center max-w-[700px]">
                {t('intro.text')}
              </span>
              <Button
                onClick={() => setModuleStarted(true)}
                className="max-w-[150px] lg:mt-4"
              >
                {t('intro.button')}
              </Button>
            </>
          ) : (
            <>
              <Robot expression="resting" className="mb-6" />
              <span className="text-center max-w-[700px]">
                {t('instructions.text')}
              </span>
              <Button
                onClick={() => setInstructionsRead(true)}
                className="max-w-[150px] lg:mt-4"
              >
                {t('instructions.button')}
              </Button>
            </>
          )}
        </div>
      )}
    </>
  );
}
