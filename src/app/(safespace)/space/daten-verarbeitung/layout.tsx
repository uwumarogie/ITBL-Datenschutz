"use client";

import { InlineNavigation } from "@/components/inline-navigation";
import React from "react";
import { ProgressBar } from "@/components/progress-bar";
import { usePathname, useRouter } from "next/navigation";

export default function DataProgressingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const parts = pathname.split("/");

  let progress = 0;
  if (parts.includes("kapitel1")) {
    if (parts.includes("quiz")) {
      progress = 0.1;
    }
  } else if (parts.includes("kapitel2")) {
    progress = 0.2 + (parseInt(parts[parts.length - 1]) / 4) * 0.6;
  } else if (parts.includes("kapitel3")) {
    progress = 0.8;
  } else if (parts.includes("done")) {
    progress = 1;
  }

  return (
    <div className="px-6 h-full flex flex-col">
      <div className="hidden sm:block w-full justify-center">
        <InlineNavigation />
      </div>
      <div className="w-full h-full overflow-hidden">{children}</div>
    </div>
  );
}
