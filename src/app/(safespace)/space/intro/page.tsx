"use client";

import { InlineNavigation } from "@/components/inline-navigation";
import { VideoPlayer } from "@/components/video-player";

export default function Intro() {
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
    </div>
  );
}
