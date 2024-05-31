"use client";

import InstagramProfile, {
  InstagramProfileData,
} from "@/app/(safespace)/space/daten-verarbeitung/instagram-profile";
import Robot from "@/components/robot/robot";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Button from "@/components/button";
import clsx from "clsx";
import Task from "@/components/task";

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

const states = [{}];

export default function DataProcessing1() {
  const [state, setState] = useState(0);
  const [notes, setNotes] = useState("");
  const [showMessage, setShowMessage] = useState(true);
  const router = useRouter();

  function onClick() {
    router.push("/space/daten-verarbeitung/kapitel2/2?notes=" + encodeURIComponent(notes), {
      scroll: true,
    });
  }

  return (
    <div className="h-full relative flex @container">
      <div className="h-full w-full @2xl:w-1/2 @2xl:max-w-md flex-shrink-0 mr-10 border-2 rounded-xl shadow overflow-hidden">
        <div className="h-full box-border">
          <InstagramProfile profile={profile} className="w-full" />
        </div>
      </div>
      <div className="flex justify-center items-center flex-col gap-4 absolute bottom-0 right-0 z-40 @2xl:relative @2xl:w-full @2xl:h-full">
        <Task>Untersuche Maries Profil und notiere dir Informationen, die uns bei der Auswahl der passenden Werbung helfen können.</Task>
        <textarea
          className="w-full border-[1px] border-gray-200 rounded-xl resize-none h-1/3 outline-none py-4 px-6 hidden @2xl:block"
          placeholder="Platz für Notizen"
          onChange={(ev) => setNotes(ev.target.value ?? "")}
        />
        <div className="flex flex-col justify-center items-center gap-10 h-full">
          {showMessage && (
            <p className="max-w-80 box-content w-full text-center px-8 py-6 bg-white shadow-lg rounded-2xl">
              Das ist Marie. Sie ist seit ca. 4 Jahren auf Instagram und hat uns
              einige Informationen hinterlassen. Schau dich einfach mal um und
              Tipp mich an, wenn du denkst, genug über Marie zu wissen.
              <Button
                className="w-full mt-4"
                onClick={() => setShowMessage(false)}
              >
                Alles klar!
              </Button>
            </p>
          )}
          <Robot
            expression="resting"
            className={clsx(
              showMessage ? "w-48 h-48" : "w-32 h-32",
              "hover:scale-110 transition-all cursor-pointer duration-500",
            )}
            onClick={onClick}
          />
        </div>
      </div>
    </div>
  );
}
