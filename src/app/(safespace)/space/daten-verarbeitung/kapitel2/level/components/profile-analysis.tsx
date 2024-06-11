import { useState } from "react";
import { useRouter } from "next/navigation";
import InstagramProfile, {
  InstagramProfileData,
} from "@/app/(safespace)/space/daten-verarbeitung/instagram-profile";
import Task from "@/components/task";
import Button from "@/components/button";
import Robot from "@/components/robot/robot";
import clsx from "clsx";

type ProfileAnalysisProps = {
  profile: InstagramProfileData;
  robotText: string;
  task: string;
  href: string;
};

export default function ProfileAnalysis({
  profile,
  robotText,
  task,
  href,
}: ProfileAnalysisProps) {
  const [state, setState] = useState(0);
  const [notes, setNotes] = useState("");
  const [showMessage, setShowMessage] = useState(true);
  const router = useRouter();

  function onClick() {
    router.push(href + encodeURIComponent(notes), {
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
        {!showMessage && <Task className="w-full">{task}</Task>}
        <textarea
          className="w-full border-[1px] border-gray-200 rounded-xl resize-none h-1/3 outline-none py-4 px-6 hidden @2xl:block"
          placeholder="Platz für Notizen"
          onChange={(ev) => setNotes(ev.target.value ?? "")}
        />
        <div className="flex flex-col justify-center items-center gap-10 h-full">
          {showMessage && (
            <p className="max-w-80 box-content w-full text-center px-8 py-6 bg-white shadow-lg rounded-2xl">
              {robotText}
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
