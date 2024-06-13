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
  "Hier siehst du Maries Instagram Feed. Wie lässt sie sich durch ihre Posts beschreiben? Schreibe dir mindestens drei Aspekte auf.";
const task =
  "Untersuche Maries Profil und finde 3 Eigenschaften und Aspekte, die ihre Person bzw. Persönlichkeit beschreiben.";

export default function DataProcessing1() {
  return (
    <ProfileAnalysis
      profile={profile}
      robotText={robotText}
      task={task}
      hint="Wie alt ist sie? Was macht sie in ihrem Leben? Welche Hobbies hat sie? "
      href="/space/daten-verarbeitung/kapitel2/level/0/part/2"
    />
  );
}
