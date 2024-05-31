"use client";

import {CSSProperties, useEffect, useState} from "react";
import Robot, {RobotExpression} from "@/components/robot/robot";
import clsx from "clsx";
import {useRouter, useSearchParams} from "next/navigation";
import Image from "next/image";
import {Info, Note, Notepad} from "@phosphor-icons/react";
import Button from "@/components/button";
import Link from "next/link";

type State = {
  expression: RobotExpression;
  rotation: number;
  text: string;
  loading?: boolean;
  manualNext?: boolean;
  hideButton?: boolean;
  end?: boolean;
  delay?: number;
  style?: CSSProperties | undefined;
}

const states: State[] = [
  {
    expression: "smiling",
    rotation: 0,
    text: "",
    style: {
      marginLeft: "calc(100% + 400px)",
    },
  },
  {
    expression: "resting",
    rotation: 0,
    text: "Ich habe hier ein paar Werbeanzeigen für dich. Welche würde bei Marie am besten ankommen?",
    style: {},
    manualNext: true,
    hideButton: true,
  },
  {
    expression: "resting",
    rotation: 0,
    text: ""
  },
  {
    expression: "smiling",
    rotation: 0,
    text: "Alles klar! Ich schicke Marie gleich die Werbung und melde dir, ob sie drauf klickt oder nicht.",
    manualNext: true,
  },
  {
    expression: "resting",
    rotation: 1.5,
    text: "",
    loading: true,
    style: {
      rotate: "30deg",
      marginLeft: "calc(100% + 400px)",
    }
  },
  {
    expression: "resting",
    rotation: -1.5,
    text: "",
    loading: true,
    style: {
      rotate: "-30deg",
      marginLeft: "calc(100% + 400px)",
    }
  },
  {
    expression: "resting",
    rotation: 0,
    text: "",
  },
];

const stateSuccess: State = {
  expression: "smiling",
  rotation: 0,
  text: "Super! Marie hat sofort auf die Anzeige gedrückt, als sie bei ihr aufgeploppt ist!",
  end: true,
}

const stateFailure: State = {
  expression: "sad",
  rotation: 0,
  text: "Schlechte Nachrichten, Marie hat einfach weitergedrückt. Die Anzeige ist nicht gut angekommen.",
  end: true,
}

export type AdvertisementData = {
  id: string;
  imageSrc: string;
  name: string;
  description: string;
  isSuccessful?: boolean;
}

const advertisements: AdvertisementData[] = [
  {
    id: "0",
    imageSrc: "/phishing.png",
    name: "Antivirenschutz",
    description: "Beschreibung für eine Antivirensoftware",
  },
  {
    id: "1",
    imageSrc: "/data-processing.png",
    name: "Richtige Anzeige",
    description: "Beschreibung für eine Antivirensoftware",
    isSuccessful: true
  },
  {
    id: "2",
    imageSrc: "/phishing.png",
    name: "Antivirenschutz",
    description: "Beschreibung für eine Antivirensoftware",
  },
  {
    id: "3",
    imageSrc: "/phishing.png",
    name: "Antivirenschutz",
    description: "Beschreibung für eine Antivirensoftware",
  },
  {
    id: "4",
    imageSrc: "/phishing.png",
    name: "Antivirenschutz",
    description: "Beschreibung für eine Antivirensoftware",
  },
];

async function delay(delay: number) {
  return new Promise<void>(resolve => {
    setTimeout(() => {
      resolve()
    }, delay)
  })
}

export default function DataProcessing2() {
  const [state, setState] = useState(0);
  const router = useRouter();
  const query = useSearchParams()
  const notes = decodeURIComponent(query.get("notes") ?? "")
  const [showNotes, setNotesShowing] = useState(false)
  const [advertisement, selectAdvertisement] = useState<AdvertisementData | null>(null)

  useEffect(() => {
    const id = setTimeout(() => {
      setState(1);
    }, 200);
    return () => clearTimeout(id);
  }, []);

  function getState(): State {
    if(state >= states.length) {
      return advertisement?.isSuccessful ? stateSuccess : stateFailure
    }else{
      return states[state]
    }
  }

  async function onAdvertisementClick(advertisement: AdvertisementData) {
    selectAdvertisement(advertisement)
    setState(2)
    await delay(1400)
    setState(3)
  }


  async function onButtonClick() {
    if(state == 3) {
      setState(4)
      await delay(3000)
      setState(5)
      await delay(100)
      setState(6)
      await delay(700)
      setState(7)
    }
  }

  return (
    <div className="relative h-full w-full flex flex-col items-center justify-center">
      <input className="absolute w-10 top-0 right-0 border-[1px] border-gray-200 outline-none z-40" type="number"
             value={state} onChange={(ev) => setState(ev.target.valueAsNumber ?? 0)}/>

      <div className="absolute top-0 left-0 w-full">

        <div
          className="m-2 w-10 h-10 p-2 rounded-full bg-orange-500 inline-flex justify-center items-center shadow-sm hover:scale-105 hover:shadow-xl transition-all cursor-pointer"
          onClick={() => setNotesShowing(!showNotes)}>
          <Notepad className="w-full h-full text-white" weight="bold"/>
        </div>

        {
          showNotes &&
            <div className="xl:max-w-[50%] w-full bg-white shadow-xl py-4 px-6 rounded-xl z-30 mt-4">
                <h3 className="font-medium">Deine Notizen</h3>
                <span className="whitespace-pre-wrap">{notes}</span>
            </div>
        }

      </div>

      <div className={clsx(
        "w-full flex flex-col justify-center items-center relative transition-all flex-shrink-0",
      )}>

        {
          advertisement &&
            <div className={clsx(
              "transition-all duration-700 overflow-hidden",
              state >= 3 ? "h-36 opacity-100" : "h-0 opacity-0"
            )}>
                <Advertisement advertisement={advertisement}/>
            </div>
        }

        <Robot
          expression={getState().expression}
          headRotation={getState().rotation}
          className="transition-all duration-700 w-40 h-40"
          style={getState().style}
        />

        {getState().loading && <div className="flex gap-2">
            <div className="w-4 h-4 bg-gray-300 rounded-full animate-bounce"></div>
            <div className="w-4 h-4 bg-gray-300 rounded-full animate-bounce" style={{animationDelay: "150ms"}}></div>
            <div className="w-4 h-4 bg-gray-300 rounded-full animate-bounce" style={{animationDelay: "200ms"}}></div>
        </div>}

        <div className="max-w-96 mt-10 text-xl font-medium text-center">
        {getState().text}
        </div>

        {getState().manualNext && !getState().hideButton && <Button className="mt-10" onClick={onButtonClick}>Weiter</Button>}
        {getState().end && <Link href="/space/daten-verarbeitung/kapitel2/3"><Button className="mt-10" onClick={() => {}}>Weiter</Button> </Link>}
      </div>

      <div
        className={clsx(
          "flex flex-col gap-4 w-full h-full my-4 overflow-y-auto transition-all duration-700 delay-300",
          state == 1 ? "opacity-100" : "opacity-0 !h-0",
        )}
      >
        {advertisements.map((advertisement) => (
          <Advertisement advertisement={advertisement} key={advertisement.id} onClick={onAdvertisementClick}/>
        ))}
      </div>
    </div>
  );
}

function Advertisement({advertisement, onClick}: {
  advertisement: AdvertisementData,
  onClick?: (advertisement: AdvertisementData) => void
}) {
  return <div
    className="bg-blue-200 rounded-xl w-full flex"
    onClick={() => onClick?.(advertisement)}
  >
    <Image
      src={advertisement.imageSrc}
      alt={"Advertisement"}
      width="100"
      height="100"
      className="h-full object-contain"
    />
    <div className="flex flex-col justify-center pl-6 pr-4">
              <span className="text-lg font-semibold text-blue-950">
                {advertisement.name}
              </span>
      <span className="text-slate-800">
                {advertisement.description}
              </span>
    </div>
  </div>
}