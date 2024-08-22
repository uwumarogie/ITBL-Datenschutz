"use client";
import Button from "@/components/button";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";

export default function Privacy() {
  const router = useRouter();
  const t = useTranslations('privacy.intro');

  return (
    <div className="flex flex-col p-3 justify-between h-full">
      <div className="flex flex-col space-y-4 pb-2 max-w-[700px]">
        <h1 className="text-xl lg:text-3xl text-blue-background pb-2 font-semibold">
          {t("title.personalData")}
        </h1>
        <span className="text-base lg:text-base sm:text-wrap md:text-wrap text-blue-background">
          {t("description.personalData")}
        </span>
        <h1 className="text-xl lg:text-3xl text-blue-background pb-2 font-semibold">
          {t("title.whyProtect")}
        </h1>
        <span className="text-base lg:text-base sm:text-wrap md:text-wrap text-blue-background">
          {t("description.whyProtect")}
        </span>
      </div>
      <Button
        onClick={() => router.push("/space/privatsphaere/quiz")}
        className="max-w-[400px]"
      >
        {t("button.continue")}
      </Button>
    </div>
  );
}
