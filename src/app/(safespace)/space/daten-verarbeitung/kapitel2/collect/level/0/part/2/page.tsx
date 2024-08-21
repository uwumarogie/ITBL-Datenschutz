"use client";

import Button from "@/components/button";
import Link from "next/link";
import Image from "next/image";
import {useTranslations} from "next-intl";

export default function DataProcessing3() {
  const t = useTranslations("datenverarbeitung.collect.level.0.part.2")
  return (
    <div className="relative h-full w-full overflow-y-auto">
      <h3 className="font-semibold text-3xl mb-10">
        {t("caption")}
      </h3>

      <span>
        {t("explanation")}
      </span>

      <div className="grid grid-cols-1 lg:grid-cols-[auto_300px] gap-10 mt-4">
        <div>
          <h3 className="text-xl font-semibold mb-2">{t("profile_description.title")}</h3>
          {t("profile_description.title")}
          <ul className="list-disc ml-4">
            <li>{t("profile_description.list.0")}</li>
            <li>{t("profile_description.list.1")}</li>
            <li>{t("profile_description.list.2")}</li>
            <li>{t("profile_description.list.3")}</li>
            <li>{t("profile_description.list.4")}</li>
            <li>{t("profile_description.list.5")}</li>
            <li>{t("profile_description.list.6")}</li>
          </ul>
          {t("profile_description.subtext")}
        </div>
        <div>
          <Image
            className="rounded-xl shadow-md"
            src="/datenverarbeitung/collect/level0/marked/explain_profile.png"
            alt={"Like"}
            width="300"
            height="200"
          />
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-2">{t("pictures.title")}</h3>
          {t("pictures.description")}
        </div>
        <div>
          <Image
            className="rounded-xl shadow-md"
            src="/datenverarbeitung/collect/level0/marked/explain_post.png"
            alt={"Like"}
            width="300"
            height="200"
          />
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-2">{t("captions.title")}</h3>
          {t("captions.description")}
        </div>
        <div>
          <Image
            className="rounded-xl shadow-md"
            src="/datenverarbeitung/collect/level0/marked/explain_caption.png"
            alt={"Like"}
            width="300"
            height="200"
          />
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-2">{t("hashtags.title")}</h3>
          {t("hashtags.description")}
        </div>
        <div>
          <Image
            className="rounded-xl shadow-md"
            src="/datenverarbeitung/collect/level0/marked/explain_hashtags.png"
            alt={"Like"}
            width="300"
            height="200"
          />
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-2">{t("tags.title")}</h3>
          {t("tags.description")}
        </div>
        <div>
          <Image
            className="rounded-xl shadow-md"
            src="/datenverarbeitung/collect/level0/marked/explain_friends.png"
            alt={"Like"}
            width="300"
            height="200"
          />
        </div>
      </div>

      <div className="mt-10 flex justify-center">
        <Link href="/space/daten-verarbeitung/kapitel2/collect/level/0/part/3">
          <Button onClick={() => {}}>{t("next")}</Button>
        </Link>
      </div>
    </div>
  );
}
