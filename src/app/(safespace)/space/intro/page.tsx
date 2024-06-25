"use client";

import Button from "@/components/button";
import { InlineNavigation } from "@/components/inline-navigation";
import { VideoPlayer } from "@/components/video-player";
import { useMessages } from "@/services/notfication/message-provider";
import { PersistUserService } from "@/services/user/PersistUserService 2";
import { AchievementId } from "@/util/achievement-data";

export default function Intro() {
  const messageService = useMessages()
  const handleClick = () => {
    const userService = new PersistUserService()

    userService.setAchievement(AchievementId.INTRO_FINISHED, true)
    messageService.showAchievement(AchievementId.INTRO_FINISHED)
  }

  return (
    <div className="flex flex-col px-6">
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
      <Button onClick={() => handleClick()} className="max-w-[200px] mt-8">
        Abschließen
      </Button>
    </div>
  );
}
