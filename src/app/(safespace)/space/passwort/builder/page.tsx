"use client";

import { ActionCard } from "@/components/action-card";
import { HintCard } from "@/components/hint-card";
import Button from "@/components/button";
import { InputValidation } from "@/components/input-validation";
import { useMessages } from "@/services/notfication/message-provider";
import { useEffect, useState } from "react";
import { calculateBruteForceTime } from "@/util/passwort/passwort-validation";
import { PersistUserService } from "@/services/user/PersistUserService";
import { AchievementId } from "@/util/achievement-data";
import Robot from "@/components/robot/robot";
import { useTranslations } from "next-intl";

export default function Builder() {
  const { addMessage } = useMessages();
  const t = useTranslations('password.builder');
  
  const [input, setInput] = useState("");
  const [isSecure, setIsSecure] = useState(false);
  const [hint, setHint] = useState(t('initialHint'));
  const [challengeStarted, setChallengeStarted] = useState(false);

  useEffect(() => {
    const context = new PersistUserService();
    const setAchievement = async () => {
      if (hint.includes(t('infiniteHint'))) {
        await context
          .setAchievement(AchievementId.PASSWORD_BUILDER, true)
          .then((res) => {
            if (res) {
              addMessage(AchievementId.PASSWORD_BUILDER, "success");
            }
          });
      }
    };
    setAchievement();
  }, [hint, addMessage, t]);

  const instruction = t('instruction');

  return (
    <>
      {!challengeStarted ? (
        <div className="w-full flex flex-col gap-6 items-center">
          <Robot expression="smiling" className="my-8" />
          <span className="max-w-[600px] text-center">{instruction}</span>
          <Button onClick={() => setChallengeStarted(true)}>{t('startGameButton')}</Button>
        </div>
      ) : (
        <div className="flex flex-row justify-between flex-wrap h-full">
          <div className="flex flex-col max-w-[1100px] px-2 lg:px-6 justify-start mt-[-1rem] mb-4">
            <div className="flex flex-col xl:mr-8">
              <div
                className="flex flex-col justify-start max-w-full space-y-2 pt-4 pb-1"
                style={{ paddingBottom: isSecure ? "0rem" : "2rem" }}
              >
                <h1 className="text-lg lg:text-2xl text-blue-background decoration-3">
                  {t('createSecurePassword')}
                </h1>
                <div className="flex flex-row gap-x-8 gap-y-2 flex-wrap">
                  <input
                    className="flex border-2 border-black rounded-xl text-xl md:text-2xl p-3 md:p-4 lg:w-7/12 sm:w-full h-14 max-w-[290px]"
                    onChange={(e) => {
                      setInput(e.target.value);
                      setIsSecure(false);
                    }}
                    name="passwort-input"
                  />
                  <Button
                    onClick={() => {
                      if (input.trim() !== "") {
                        setIsSecure(true);
                        setHint(calculateBruteForceTime(input));
                      } else {
                        addMessage(t('passwordCheckError'), "error");
                      }
                    }}
                  >
                    {t('passwordCheckButton')}
                  </Button>
                </div>
                {isSecure && (
                  <div className="space-y-2">
                    <InputValidation input={input} />
                  </div>
                )}
              </div>
              <div className="flex flex-row pt-6 2xl:pt-12">
                <div className="flex flex-row lg:gap-6 flex-wrap justify-center">
                  <div className="max-w-[250px]">
                    <ActionCard
                      title={t('passwordProfiTitle')}
                      description={t('passwordProfiDescription')}
                      iconSrc="/key.svg"
                      buttonText={t('startGameButton')}
                      primaryColor="#A9D6E5"
                      secondaryColor="#2A6F97"
                      titleColor="#2A6F97"
                      redirectPath="/space/passwort/strength/"
                    />
                  </div>
                  <div className="max-w-[250px] opacity-50 hover:opacity-100">
                    <ActionCard
                      title={t('safetyFirstTitle')}
                      description={t('safetyFirstDescription')}
                      iconSrc="/safety-first.svg"
                      buttonText={t('playAgainButton')}
                      primaryColor="#A9D6E5"
                      secondaryColor="#2A6F97"
                      titleColor="#2A6F97"
                      redirectPath="/space/passwort/quiz/"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-[400px] max-h-[450px] sm:max-h-[550px] mx-2 lg:mx-6 w-full h-full">
            <HintCard
              text={t('hintText')}
              buttonText={t('showSolutionButton')}
              iconSrc="/smartphone-pw.png"
              hint={
                <>
                  {t('hintSolutionText')}
                  <div className="text-3xl my-4 bg-blue-contrast rounded-xl text-white px-3 py-6">
                    {hint}
                  </div>
                  {t('hintEndText')}
                </>
              }
            />
          </div>
        </div>
      )}
    </>
  );
}
