"use client";

import InstagramProfile, {
  InstagramProfileData,
} from "@/components/instagram-profile";
import Robot from "@/components/robot/robot";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Button from "@/components/button";
import clsx from "clsx";
import Task from "@/components/task";
import ProfileAnalysis from "@/app/(safespace)/space/daten-verarbeitung/kapitel2/components/profile-analysis";
import { CollectData } from "@/app/(safespace)/space/daten-verarbeitung/data/collect";
import {useTranslations} from "next-intl";
import useTermsLevel0 = CollectData.useTermsLevel0;

function useProfile(): InstagramProfileData {
  const t = useTranslations("datenverarbeitung.collect.level.0.part.1")
  return {
    username: "marie_magic2007",
    profileImageSrc: "/posts/profile_marie.png",
    followers: 97,
    followingCount: 189,
    description: "MUC\n17 yo",
    posts: [
      {
        imageSrc: "/datenverarbeitung/level0/IMG_0614.JPG",
        caption: t("caption_1"),
      },
      {
        imageSrc: "/datenverarbeitung/level0/IMG_0605.JPG",
        caption: t("caption_2"),
        location: "Franz von Miller Gymnasium München",
      },
      {
        imageSrc: "/datenverarbeitung/level0/IMG_0459.jpg",
        caption: t("caption_3"),
        likedBy: "Michael, Sarah und 3 weiteren",
        location: "Cafe Kaffee",
      },
      {
        imageSrc: "/datenverarbeitung/level0/IMG_0401.JPG",
        caption: t("caption_4"),
        likedBy: "Lea",
      },
      {
        imageSrc: "/datenverarbeitung/level0/IMG_0608.JPG",
        caption: t("caption_5"),
        location: "Franz von Miller Gymnasium München",
      },
      {
        imageSrc: "/datenverarbeitung/level0/IMG_0613.JPG",
        caption: t("caption_6"),
        location: "SneakON - München",
      },
      {
        imageSrc: "/datenverarbeitung/level0/IMG_0610.JPG",
        caption: t("caption_7"),
      },
      {
        imageSrc: "/datenverarbeitung/level0/IMG_0612.JPG",
        caption: t("caption_8"),
        likedBy: "Justus und Mara",
      },
      {
        imageSrc: "/datenverarbeitung/level0/IMG_0602.JPG",
        caption: t("caption_9"),
        location: "Dortmund",
      },
      {
        imageSrc: "/datenverarbeitung/level0/IMG_0601.JPG",
        caption: t("caption_10"),
        song: "Everything I wanted - Billie Eilish",
      },
      {
        imageSrc: "/datenverarbeitung/level0/IMG_0609.JPG",
        caption: t("caption_11"),
        location: "Franz von Miller Gymnasium München",
      },
      {
        imageSrc: "/datenverarbeitung/level0/IMG_0460.JPG",
        caption: t("caption_12"),
        location: "Cafe Kaffee",
      },
      {
        imageSrc: "/datenverarbeitung/level0/IMG_0603.JPG",
        caption: t("caption_13"),
        song: "BIRDS OF A FEATHER - Billie Eilish",
      },
      {
        imageSrc: "/datenverarbeitung/level0/IMG_0617.JPG",
        caption: t("caption_14"),
      },
    ],
  }
}

export default function DataProcessing1() {
  const t = useTranslations("datenverarbeitung.collect.level.0.part.1")
  const robotText = t("robotText")
  const task = t("task")
  const hint = t("hint")
  const profile = useProfile()
  const terms = useTermsLevel0()
  return (
    <ProfileAnalysis
      profile={profile}
      robotText={robotText}
      task={task}
      terms={terms}
      minFoundTerms={5}
      hint={hint}
      href="/space/daten-verarbeitung/kapitel2/collect/level/0/part/2"
    >
      <InstagramProfile profile={profile} className="w-full" />
    </ProfileAnalysis>
  );
}
