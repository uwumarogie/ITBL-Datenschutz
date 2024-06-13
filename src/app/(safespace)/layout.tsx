"use client";

import { DesktopNav } from "@/components/NavBar/DesktopNavigation/desktop-nav";
import { MobileNav } from "@/components/NavBar/MobileNavigation/mobile-nav";
import { redirect } from "next/navigation";
import React, { useEffect } from "react";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useEffect(() => {
    if (!localStorage.getItem("userId")) {
      redirect("/");
    }
  }, []);

  return (
    <div className="bg-blue-background h-screen bg-fixed">
      <div className="flex justify-center h-reduced-safari sm:h-full px-3 pt-1 sm:py-11 sm:pr-8 sm:pl-0 flex-col sm:flex-row">
        <div className="hidden sm:block">
          <DesktopNav />
        </div>

        <div className="sm:hidden">
          <MobileNav />
        </div>

        <div className="flex flex-row justify-center grow min-w-[220px] overflow-hidden">
          <div className="bg-white rounded-3xl py-6 w-full">{children}</div>
        </div>
      </div>
    </div>
  );
}
