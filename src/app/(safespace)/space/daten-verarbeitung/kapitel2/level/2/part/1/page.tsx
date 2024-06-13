"use client";

import InstagramProfile, {
  InstagramProfileData,
} from "@/components/instagram-profile";
import Robot from "@/components/robot/robot";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Button from "@/components/button";
import clsx from "clsx";
import Task from "@/components/task";
import ProfileAnalysis from "@/app/(safespace)/space/daten-verarbeitung/kapitel2/level/components/profile-analysis";

const profile: InstagramProfileData = {
  username: "marie_magic1995",
  profileImageSrc: "/posts/profile_marie.png",
  followers: 215,
  followingCount: 350,
  following: [
    "Letzte Generation",
    "TastyInternational",
    "Emily Brau",
    "Markus Metzer",
    "Billie Eilish",
  ],
  description: `I’m Marie ❤️
🏠️ Hometown Munich/Ro
🤰 Mother of 2 children
🚴‍♀️ Always on my bike!`,
  posts: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0].map((i) => ({
    imageSrc: "/posts/post_marie_1.jpg",
    caption: "Living my best live\n#freedome #nature",
    likedBy: "Ammelie Hirnhauser",
  })),
};

const robotText =
  "Das ist Marie. Sie ist seit ca. 4 Jahren auf Instagram und hat uns einige Informationen hinterlassen. Schau dich einfach mal um und tipp mich an, wenn du denkst, genug über Marie zu wissen.";
const task =
  "Untersuche Maries Profil und notiere dir Informationen, die uns bei der Auswahl der passenden Werbung helfen können.";

export default function DataProcessing1() {
  return (
    <ProfileAnalysis
      profile={profile}
      robotText={robotText}
      task={task}
      href="/space/daten-verarbeitung/kapitel2/level/2/part/2"
    />
  );
}
