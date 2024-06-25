"use client";

import { DesktopNav } from "@/components/NavBar/DesktopNavigation/desktop-nav";
import { MobileNav } from "@/components/NavBar/MobileNavigation/mobile-nav";
import { PersistUserService } from "@/services/user/PersistUserService";
import { redirect } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [username, setUsername] = useState("");
  useEffect(() => {
    const fetchUserData = async () => {
      if (
        typeof window !== "undefined" &&
        window.localStorage &&
        !localStorage.getItem("userId")
      ) {
        redirect("/");
      }

      try {
        const userService = new PersistUserService();
        const user = await userService.getUser();
        setUsername(user.userName);
      } catch (error) {
        console.error("User not found", error);
      }
    };
    fetchUserData();
  }, []);

  return (
    <div className="bg-blue-background h-screen bg-fixed">
      <span className="absolute top-3 right-14 text-white hidden sm:block">
        <span className="text-slate-400">Eingeloggt als:</span> {username}
      </span>
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
