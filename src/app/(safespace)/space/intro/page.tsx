"use client";

import { InlineNavigation } from "@/components/inline-navigation";
import { VideoPlayer } from "@/components/video-player";
import Button from "@/components/button";
import { PersistUserService } from "@/services/user/PersistUserService";
import { AchievementId } from "@/util/achievement-data";
import { useRouter } from "next/navigation";

export default function Intro() {
  const router = useRouter();
  async function finish() {
    const userService = new PersistUserService();
    await userService.setAchievement(AchievementId.INTRO_FINISHED, true);
    router.push("/space");
  }

  return (
    <div className="px-6">
      <div className="hidden sm:block">
        <InlineNavigation />
      </div>

      <div className="rounded-xl">
        <VideoPlayer
          src="/videos/recording.mp4"
          timestamps={[
            { label: "Einführung", time: 3, durationInMinutes: 2 },
            { label: "Was ist Datenschutz?", time: 10, durationInMinutes: 3 },
          ]}
          height={720}
          width={1280}
        />
      </div>

      <Button onClick={finish}>Finish Module</Button>
    </div>
  );
}
