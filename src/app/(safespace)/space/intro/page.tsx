"use client";

import Button from "@/components/button";
import { InlineNavigation } from "@/components/inline-navigation";
import { VideoPlayer } from "@/components/video-player";
import { useMessages } from "@/services/notfication/message-provider";

export default function Intro() {
  const { addMessage } = useMessages();
  const message =
    "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam";
  return (
    <div className="px-6">
      <div className="hidden sm:block">
        <InlineNavigation />
      </div>
      <p>Intro</p>
      <Button onClick={() => addMessage(message, "error")}>Error</Button>
      <Button onClick={() => addMessage(message, "success")}>Success</Button>
      <Button onClick={() => addMessage(message, "info")}>Info</Button>

      <div className="rounded-xl">
        <VideoPlayer
          src="/videos/recording.mp4"
          timestamps={[{ label: "Kapitel 1", time: 10 }]}
          height=
        />
      </div>
    </div>
  );
}
