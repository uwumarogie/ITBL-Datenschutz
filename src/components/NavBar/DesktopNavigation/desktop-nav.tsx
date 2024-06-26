"use client";
import Link from "next/link";
import Image from "next/image";
import { ActionCard } from "@/components/action-card";
import { Section } from "../Section";
import { SignOut } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";
import clsx from "clsx";

export function DesktopNav({ isCollapsed }: { isCollapsed: boolean }) {
  const router = useRouter();
  return (
    <div className="flex flex-col w-full h-full justify-between align-center">
      <div>
        <div className="flex flex-row space-x-4 justify-start items-center ml-14 mt-5 mb-12">
          <Link
            href={"/space"}
            className="flex items-center bg-blue-contrast rounded-xl max-h-14 min-w-14 justify-center p-4"
          >
            <Image
              src="/logo.svg"
              alt="Logo"
              width={20}
              height={20}
              className="mx-auto"
            />
          </Link>
          <h2
            className={clsx(
              "text-white text-3xl font-bold transition-opacity",
              isCollapsed && "opacity-0",
            )}
          >
            SafeSpace
          </h2>
        </div>
        <Section isCollapsed={isCollapsed} />
      </div>
      <div
        className={clsx(
          "mx-auto transition-opacity",
          isCollapsed && "opacity-0",
        )}
      >
        <ActionCard
          title="Master Quiz"
          description="Teste all dein Wissen"
          iconSrc="/star.svg"
          buttonText="Start"
          primaryColor="#014F86"
          secondaryColor="#2A6F97"
          titleColor="white"
          redirectPath="/sandbox/quiz"
        />
        <span
          className="flex justify-center items-center gap-2 mt-2 hover:cursor-pointer"
          onClick={() => {
            if (typeof window !== "undefined" && window.localStorage) {
              localStorage.removeItem("gameCode");
              localStorage.removeItem("userId");
            }
            router.push("/");
          }}
        >
          <SignOut size={28} color="#ffffff" />
          <span className="text-white text-lg align-center">Ausloggen</span>
        </span>
      </div>
    </div>
  );
}
