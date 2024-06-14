import React, { useState } from "react";
import { useRouter } from "next/navigation";
import InstagramProfile, {
  InstagramProfileData,
} from "@/components/instagram-profile";
import Task from "@/components/task";
import Button from "@/components/button";
import Robot from "@/components/robot/robot";
import clsx from "clsx";
import { HintCard } from "@/components/hint-card";
import { distance } from "fastest-levenshtein";
import { useMessages } from "@/services/notfication/message-provider";
import Link from "next/link";

type ProfileAnalysisProps = {
  profile: InstagramProfileData;
  robotText: string;
  task: string;
  terms: string[];
  minFoundTerms: number;
  hint?: string;
  href: string;
};

const MAX_DISTANCE = 1;

export default function ProfileAnalysis({
  profile,
  robotText,
  task,
  terms,
  minFoundTerms,
  hint,
  href,
}: ProfileAnalysisProps) {
  const [state, setState] = useState(0);
  const [termInput, setTermInput] = useState("");
  const [showRobot, setShowRobot] = useState(true);
  const [foundTerms, setFoundTerms] = useState<string[]>([]);
  const router = useRouter();
  const { addMessage } = useMessages();

  function checkTerm() {
    for (let term of foundTerms) {
      if (
        distance(term.toLowerCase(), termInput.toLowerCase()) <= MAX_DISTANCE
      ) {
        addMessage(
          "Du hast diesen Begriff bereits gefunden. Finde eine andere Eigenschaft!",
          "info",
        );
        return;
      }
    }
    let termFound = false;
    for (let term of terms) {
      if (
        distance(term.toLowerCase(), termInput.toLowerCase()) <= MAX_DISTANCE
      ) {
        setFoundTerms((terms) => [...terms, term]);
        termFound = true;
        setTermInput("");
        break;
      }
    }
    if (!termFound) {
      addMessage(
        "Dieser Begriff scheint nicht zu passen. Versuche einen ähnliche oder ganz anderen Begriff.",
        "error",
      );
    }
  }

  function onClick() {
    router.push(href, {
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
      <div className="flex flex-col gap-4 absolute bottom-0 right-0 z-40 @2xl:relative @2xl:w-full @2xl:h-full">
        {showRobot && (
          <div className="flex flex-col justify-center items-center gap-10 h-full">
            <p className="max-w-80 box-content w-full text-center px-8 py-6 bg-white shadow-lg rounded-2xl">
              {robotText}
              <Button
                className="w-full mt-4"
                onClick={() => setShowRobot(false)}
              >
                Los gehts
              </Button>
            </p>
            <Robot
              expression="resting"
              className={clsx(
                showRobot ? "w-48 h-48" : "w-32 h-32",
                "hover:scale-110 transition-all cursor-pointer duration-500",
              )}
              onClick={onClick}
            />
          </div>
        )}
        {!showRobot && (
          <React.Fragment>
            {foundTerms.length < minFoundTerms && (
              <Task className="w-full">{task}</Task>
            )}
            <span className="font-semibold">
              Gefundene Eigenschaften: ({foundTerms.length}/{minFoundTerms})
            </span>
            <ul className="list-disc ml-8">
              {foundTerms.map((t, i) => (
                <li key={i}>{t}</li>
              ))}
            </ul>
            <input
              className="w-full border-[1px] border-gray-200 rounded-xl resize-none outline-none py-4 px-6 hidden @2xl:block"
              placeholder="Eigenschaft / Aspekt"
              value={termInput}
              onChange={(ev) => setTermInput(ev.target.value ?? "")}
              onKeyUp={(ev) => ev.key == "Enter" && checkTerm()}
            />
            <Button onClick={checkTerm}>Überprüfen</Button>
            {hint && foundTerms.length < minFoundTerms && (
              <HintCard
                text="Welche Infos soll ich suchen?"
                buttonText="Tipp zeigen"
                hint={hint}
              />
            )}
            {foundTerms.length >= minFoundTerms && (
              <div className="flex flex-col justify-center items-center h-full">
                <Robot expression="smiling" />
                <span className="text-center font-medium mt-8 mb-4">
                  Klasse! Du hast alle Begriffe gefunden!
                </span>
                <Link href={href}>
                  <Button onClick={() => {}}>Weiter</Button>
                </Link>
              </div>
            )}
          </React.Fragment>
        )}
      </div>
    </div>
  );
}
