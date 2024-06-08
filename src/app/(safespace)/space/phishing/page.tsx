"use client"
import Button from "@/components/button";
import { VideoPlayer } from "@/components/video-player";
import { useRouter } from "next/navigation";

const timestamps = [
  { label: "Die Anfrage & das Gewinnspiel", time: 0, durationInMinutes: 2 },
  { label: "Das böse Erwachen", time: 124, durationInMinutes: 1 },
  { label: "Verhalten bei Fake-Profilen", time: 208, durationInMinutes: 1 },
  { label: "Was sind Fake-Profile und ihre Ziele?", time: 248, durationInMinutes: 1 },
  { label: "Anzeichen für Fake-Profile", time: 299, durationInMinutes: 1 },
]

export default function Phishing() {
  const router = useRouter()
  return (
    <div className="flex flex-col justify-between h-full">
      <VideoPlayer
        src="/videos/video_phishing.mp4"
        timestamps={timestamps}
        height={720}
        width={1280}
      />
      <Button
        className="max-w-[120px]"
        onClick={() => router.push("/space/phishing/profiling")}
      >
        Weiter
      </Button>
    </div>
  );
}
