"use client";

import Button from "@/components/button";
import { useRouter } from "next/navigation";
import { IntroductionText } from "@/components/introduction-text";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import { SealQuestion } from "@phosphor-icons/react";
import Image from "next/image";
import { useState } from "react";
import Task from "@/components/task";
import {useTranslations} from "next-intl";


export default function DataProcessingChapter1() {
  const router = useRouter();
  const t = useTranslations("datenverarbeitung.introduction")

  const [showQuizButton, setShowQuizButton] = useState(false);

  return (
    <div className="flex flex-col items-start gap-10 overflow-y-auto h-full">
      <div className="flex gap-x-16">
        <IntroductionText
          headline={t("headline")}
          text={t("text")}
        />
        <div className="max-h-60">
          <Image
            src="/data-processing.png"
            alt="Data Processing"
            width="1000"
            height="1000"
            className="h-full object-contain"
            priority
          />
        </div>
      </div>

      <Task className="max-w-[700px]">
        {t("task")}
      </Task>

      <Tabs className="mb-10">
        <TabList className="flex flex-wrap mb-6 border-b-2">
          <Tab className="cursor-pointer p-4 outline-none  border-b-sky-800">
            {t("tab1")}
          </Tab>
          <Tab className="cursor-pointer p-4 outline-none  border-b-sky-800">
            {t("tab2")}
          </Tab>
          <Tab className="cursor-pointer p-4 outline-none  border-b-sky-800">
            {t("tab3")}
          </Tab>
        </TabList>
        <TabPanel className="px-4">
          <div className="flex justify-between gap-20">
            <div className="max-w-[700px]">{t("tab1Text")}</div>
            <Image
              src="/datenverarbeitung/introduction/explain1.jpg"
              alt="Explaination"
              width="200"
              height="200"
            />
          </div>
        </TabPanel>
        <TabPanel className="px-4">
          <div className="flex justify-between gap-20">
            <div className="max-w-[700px]">
              {t("tab2Text")}
            </div>
            <Image
              src="/datenverarbeitung/introduction/explain2.jpg"
              alt="Explaination"
              width="400"
              height="200"
            />
          </div>
        </TabPanel>
        <TabPanel className="px-4">
          <div>
            <div className="max-w-[700px]">
              {t("tab3Text")}
            </div>
          </div>
        </TabPanel>
      </Tabs>

      {showQuizButton ? (
        <Button
          onClick={() => router.push("/space/daten-verarbeitung/kapitel1/quiz")}
        >
          <SealQuestion className="text-white mr-4" weight="fill" />
          {t("buttonCheck")}
        </Button>
      ) : (
        <Button onClick={() => setShowQuizButton(true)} style="secondary">
          {t("buttonReady")}
        </Button>
      )}
    </div>
  );
}
