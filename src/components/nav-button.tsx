"use client";

import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";
import { usePathname } from "next/navigation";

export type NavButtonType = {
  href: string;
  isFinished: boolean;
  number: number;
};

export function NavButton({ href, isFinished, number }: NavButtonType) {
  const router = usePathname();
  const active = router === href;

  return (
    <Link
      className={clsx(
        "flex min-w-8 min-h-8 md:min-w-12 md:min-h-12 rounded-xl bg-blue-background font-bold text-white justify-center items-center cursor-pointer transition-colors duration-150",
        active && "bg-orange-600",
      )}
      href={href}
    >
      <span className="flex">
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
      </span>
    </Link>
  );
}
