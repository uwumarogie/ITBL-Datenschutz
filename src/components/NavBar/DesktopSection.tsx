"use client";

import { useState } from "react";
import clsx from "clsx";
import Link from "next/link";
import Image from "next/image";

export function DesktopSection() {
  const iconSize = 30;
  const [first, setFirst] = useState(true);
  const [second, setSecond] = useState(false);
  const [third, setThird] = useState(false);
  const [fourth, setFourth] = useState(false);

  function setSection(id: 1 | 2 | 3 | 4) {
    if (id === 1) {
      setFirst(true);
      setSecond(false);
      setThird(false);
      setFourth(false);
    } else if (id === 2) {
      setFirst(false);
      setSecond(true);
      setThird(false);
      setFourth(false);
    } else if (id === 3) {
      setFirst(false);
      setSecond(false);
      setThird(true);
      setFourth(false);
    } else if (id === 4) {
      setFirst(false);
      setSecond(false);
      setThird(false);
      setFourth(true);
    }
  }

  return (
    <div className="justify-center items-center mt-10 min-h-48 bg-gradient-to-r from-blue-background to-white ml-6">
      <div
        className={clsx(
          "flex items-center justify-center flex-row space-x-5 min-w-60 max-w-96 min-h-4 bg-blue-background z-30",
          first && "rounded-br-3xl",
        )}
      ></div>
      <Link
        onClick={() => setSection(1)}
        href="/space"
        className={clsx(
          "flex items-center justify-start px-28 flex-row space-x-5 min-w-60 max-w-96 min-h-16 bg-blue-background",
          first ? "bg-white rounded-l-full text-orange-600" : "text-white",
          second && "rounded-br-3xl",
        )}
      >
        {first ? (
          <Image
            src="/section/discover-active.svg"
            alt="Erkunden"
            width={iconSize}
            height={iconSize}
            className="scale-100"
          />
        ) : (
          <Image
            src="/section/discover.svg"
            alt="Erkunden"
            width={iconSize}
            height={iconSize}
          />
        )}
        <span className="text-center">Erkunden</span>
      </Link>

      <Link
        onClick={() => setSection(2)}
        href="/space"
        className={clsx(
          "flex items-center justify-start px-28 flex-row space-x-5 min-w-60 max-w-96 min-h-16",
          first && "rounded-tr-3xl",
          second
            ? "bg-white rounded-l-full text-orange-600 rounded-tr-3xl"
            : "bg-blue-background text-white",
          third && "rounded-br-3xl",
        )}
      >
        {second ? (
          <Image
            src="/section/pace-active.svg"
            alt="Fortschritt"
            width={iconSize}
            height={iconSize}
            className="scale-100"
          />
        ) : (
          <Image
            src="/section/pace.svg"
            alt="Fortschritt"
            width={iconSize}
            height={iconSize}
          />
        )}
        <span className="text-center ">Fortschritt</span>
      </Link>

      <Link
        onClick={() => setSection(3)}
        href="/space"
        className={clsx(
          "flex items-center justify-start px-28  flex-row space-x-5 min-w-60 max-w-96 min-h-16 bg-blue-background",
          fourth && "rounded-br-3xl",
          third ? "bg-white rounded-l-full text-orange-600" : "text-white",
          second && "rounded-tr-3xl",
        )}
      >
        {third ? (
          <Image
            src="/section/leaderboard-active.svg"
            alt="Leaderboard"
            width={iconSize}
            height={iconSize}
            className="scale-100"
          />
        ) : (
          <Image
            src="/section/leaderboard.svg"
            alt="Leaderboard"
            width={iconSize}
            height={iconSize}
          />
        )}
        <span className="text-center">Leaderboard</span>
      </Link>

      <Link
        onClick={() => setSection(4)}
        href="/space"
        className={clsx(
          "flex items-center justify-start px-28 flex-row space-x-5 min-w-60 max-w-96 min-h-16",
          fourth
            ? "bg-white text-orange-600 rounded-l-full"
            : "bg-blue-background text-white",
          third && "rounded-tr-3xl bg-blue-background",
        )}
      >
        {fourth ? (
          <Image
            src="/section/chatbot-active.svg"
            alt="Chatbot"
            width={iconSize}
            height={iconSize}
            className="scale-100"
          />
        ) : (
          <Image
            src="/section/chatbot.svg"
            alt="Chatbot"
            width={iconSize}
            height={iconSize}
          />
        )}
        <span className="text-center">ChatBot</span>
      </Link>
      <div
        className={clsx(
          "flex items-center justify-center flex-row space-x-5 min-w-60 max-w-96 min-h-4 bg-blue-background z-30 ",
          fourth && "rounded-tr-3xl",
        )}
      ></div>
    </div>
  );
}
