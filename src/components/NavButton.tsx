"use client"

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";

export type NavButtonType = {
  href: string;
  isFinished: boolean;
  number: number;
};

export function NavButton({ href, isFinished, number }: NavButtonType) {
  const [active, setActive] = useState(false);

  return (
    <Link
      className={clsx(
        "flex min-w-12 min-h-12 rounded-xl bg-blue-background font-bold  text-white justify-center items-center",
        active && "bg-orange-600",
      )}
      href={href}
      onClick={() => setActive((prevState) => !prevState)}
    >
      <>
        {isFinished ? (
          <Image
            src="/white-tick-button.svg"
            alt="White Tick Button"
            height={20}
            width={20}
          />
        ) : (
          number
        )}
      </>
    </Link>
  );
}
