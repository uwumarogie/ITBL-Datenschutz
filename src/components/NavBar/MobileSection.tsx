"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export function MobileSection() {
  const iconSize = 40;
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
    <div className="flex flex-row space-x-5 justify-center items-center">
      <Link onClick={() => setSection(1)} href="/space">
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
      </Link>

      <Link onClick={() => setSection(2)} href="/space">
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
      </Link>

      <Link onClick={() => setSection(3)} href="/space">
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
      </Link>

      <Link onClick={() => setSection(4)} href="/space">
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
      </Link>
    </div>
  );
}
