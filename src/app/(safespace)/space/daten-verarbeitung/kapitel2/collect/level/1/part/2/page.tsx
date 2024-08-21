"use client";

import Button from "@/components/button";
import Link from "next/link";
import StaticGraph, {
  Node,
} from "@/app/(safespace)/space/daten-verarbeitung/kapitel2/components/static-graph";
import Image from "next/image";
import {useTranslations} from "next-intl";

export default function DataProcessing3() {
  const nodes: Node[] = [
    {
      name: "marie",
      attributes: { x: 0, y: 0, size: 15 },
      edgeTo: "memes",
    },
    {
      name: "memes",
      attributes: { x: 1, y: 0, size: 15 },
      edgeAttributes: { label: "Test" },
    },
  ];

  const t = useTranslations("datenverarbeitung.collect.level.1.part.2")

  return (
    <div className="relative h-full w-full overflow-y-auto">
      <h3 className="font-semibold text-3xl mb-10">
        {t("title")}
      </h3>

      <div className="grid grid-cols-1 lg:grid-cols-[auto_300px] gap-10">
        <div>
          <h3 className="text-xl font-semibold mb-2">{t("likedPostHeading")}</h3>
          {t("likedPostDescription")}
        </div>
        <div>
          <Image
            src="/datenverarbeitung/collect/level1/explain_like.png"
            alt={t("likeAlt")}
            width="300"
            height="200"
          />
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-2">{t("savedContentHeading")}</h3>
          {t("savedContentDescription")}
        </div>
        <div>
          <Image
            src="/datenverarbeitung/collect/level1/explain_save.png"
            alt={t("saveAlt")}
            width="300"
            height="200"
          />
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-2">{t("userInteractionHeading")}</h3>
          {t("userInteractionDescription")}
        </div>
        <div>
          <Image
            src="/datenverarbeitung/collect/level1/explain_screentime.png"
            alt={t("screenTimeAlt")}
            width="300"
            height="200"
          />
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-2">{t("sentPostsHeading")}</h3>
          {t("sentPostsDescription")}
        </div>
        <div>
          <Image
            src="/datenverarbeitung/collect/level1/explain_send.png"
            alt={t("sendAlt")}
            width="300"
            height="200"
          />
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-2">{t("friendsOfFriendsHeading")}</h3>
          {t("friendsOfFriendsDescription")}
        </div>
        <div>
          <Image
            src="/datenverarbeitung/collect/level1/explain_reference.png"
            alt={t("referenceAlt1")}
            width="300"
            height="200"
          />
          <Image
            src="/datenverarbeitung/collect/level1/explain_reference2.png"
            alt={t("referenceAlt2")}
            width="300"
            height="200"
          />
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-2">{t("similarProfilesHeading")}</h3>
          <div>
            {t("similarProfilesDescription")}
          </div>
        </div>
        <div>
          <Image
            src="/datenverarbeitung/collect/level1/explain_similar_accounts.png"
            alt={t("similarAccountsAlt")}
            width="300"
            height="200"
          />
        </div>
      </div>

      <div className="mt-10 flex justify-center">
        <Link href="/space/daten-verarbeitung/kapitel2/collect/level/1/part/3">
          <Button onClick={() => {
          }}>{t("nextButtonText")}</Button>
        </Link>
      </div>
    </div>
  );
}
