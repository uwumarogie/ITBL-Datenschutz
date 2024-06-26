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
import ProfileAnalysis from "@/app/(safespace)/space/daten-verarbeitung/kapitel2/level/components/profile-analysis";
import { CollectData } from "@/app/(safespace)/space/daten-verarbeitung/data/collect";

const profile: InstagramProfileData = {
  username: "marie_magic1995",
  profileImageSrc: "/posts/profile_marie.png",
  followers: 97,
  followingCount: 189,
  description: "MUC\n17 yo",
  posts: [
    {
      imageSrc: "/datenverarbeitung/level0/IMG_0614.JPG",
      caption:
        "Die neusten Nike WMNS  AIR JORDAN 1 MID 365 in lila, weiß, schwarz sind verfügbar. Ich könnte auf Wunsch welche in unserem Store zurücklegen.",
    },
    {
      imageSrc: "/datenverarbeitung/level0/IMG_0605.JPG",
      caption: "Schon wieder eine Gruppenarbeit",
      location: "Franz von Miller Gymnasium München",
    },
    {
      imageSrc: "/datenverarbeitung/level0/IMG_0459.jpg",
      caption:
        "Wir, wenn der Matheunterricht entfällt. @Michael, @Sarah, @Lena, @Lukas, @Livia",
      likedBy: "Michael, Sarah und 3 weiteren",
      location: "Cafe Kaffee",
    },
    {
      imageSrc: "/datenverarbeitung/level0/IMG_0401.JPG",
      caption:
        "Auch, wenn wir uns immer wieder mal streiten habe ich dich ganz doll lieb, Lea. Ich bin stolz deine große Schwester sein zu dürfen.",
      likedBy: "Lea",
    },
    {
      imageSrc: "/datenverarbeitung/level0/IMG_0608.JPG",
      caption: "Schreibe gleich eine Mathe Klausur, wünscht mir Glück!",
      location: "Franz von Miller Gymnasium München",
    },
    {
      imageSrc: "/datenverarbeitung/level0/IMG_0613.JPG",
      caption: "Mein neuer Ferienjob im Schuhstore. Kommt vorbei!",
      location: "SneakON - München",
    },
    {
      imageSrc: "/datenverarbeitung/level0/IMG_0610.JPG",
      caption: "NEUES FAMILIENMITGLIED!!",
    },
    {
      imageSrc: "/datenverarbeitung/level0/IMG_0612.JPG",
      caption: "Ohne meinem Kaffee kann ich nicht lernen.",
      likedBy: "Justus und Mara",
    },
    {
      imageSrc: "/datenverarbeitung/level0/IMG_0602.JPG",
      caption: "Bester Tag in meinem Leben #BilliEilish #Konzert2023 #Dortmund",
      location: "Dortmund",
    },
    {
      imageSrc: "/datenverarbeitung/level0/IMG_0601.JPG",
      caption:
        "Omg, ihr neues Album ist draußen! Ich feier das Lied “Everything I wanted“",
      song: "Everything I wanted - Billie Eilish",
    },
    {
      imageSrc: "/datenverarbeitung/level0/IMG_0609.JPG",
      caption: "Ich hoffe das viele Lernen lohnt sich...",
      location: "Franz von Miller Gymnasium München",
    },
    {
      imageSrc: "/datenverarbeitung/level0/IMG_0460.JPG",
      caption: "Lieblingscafe Tante Emma",
      location: "Cafe Kaffee",
    },
    {
      imageSrc: "/datenverarbeitung/level0/IMG_0603.JPG",
      caption: "Auf dem Weg zur Schule Billie Eilish zu hören ist Therapie.",
      song: "BIRDS OF A FEATHER - Billie Eilish",
    },
    {
      imageSrc: "/datenverarbeitung/level0/IMG_0617.JPG",
      caption: "Meinung zu meinen neuen Schuhen?",
    },
  ],
};

const terms = CollectData.termsLevel0

const robotText =
  "Hier siehst du Maries Instagram Feed. Wie lässt sie sich durch ihre Posts beschreiben? Schreibe dir mindestens fünf Aspekte auf.";
const task =
  "Untersuche Maries Profil und finde 5 Eigenschaften und Aspekte, die ihre Person bzw. Persönlichkeit beschreiben.";

export default function DataProcessing1() {
  return (
    <ProfileAnalysis
      profile={profile}
      robotText={robotText}
      task={task}
      terms={terms}
      minFoundTerms={5}
      hint="Wie alt ist sie? Was macht sie in ihrem Leben? Welche Hobbies hat sie? "
      href="/space/daten-verarbeitung/kapitel2/collect/level/0/part/2"
    >
      <InstagramProfile profile={profile} className="w-full" />
    </ProfileAnalysis>
  );
}
