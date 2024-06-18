"use client";

import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import { useState } from "react";

export type NavButtonType = {
  href: string;
  isFinished: boolean;
  icon: React.ReactNode;
  description: string;
};

export function NavButton({ href, isFinished, icon, description }: NavButtonType) {
  const router = usePathname();
  let routeLeaf = href.split("/").pop() || href;
  const active = router.includes(routeLeaf);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      className={clsx(
        "relative flex min-w-12 min-h-12 sm:min-w-8 sm:min-h-8 md:min-w-12 md:min-h-12 rounded-xl bg-blue-background font-bold text-white justify-center items-center cursor-pointer transition-colors duration-150",
        active && "bg-orange-600",
      )}
      href={href}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
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
          icon
        )}
      </span>
      <div
        className="hidden sm:block absolute left-3 top-[50px] px-2 py-1 bg-gray-700 text-white text-xs min-w-[130px] rounded transition-opacity duration-300 z-50"
        style={{ opacity: isHovered ? 1 : 0 }}
      >
        {description}
      </div>
    </Link>
  );
}
