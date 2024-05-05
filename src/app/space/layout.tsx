import React from "react";
import Link from "next/link";
import Image from "next/image";
import { UnlockMasterQuiz } from "@/components/UnlockMasterQuiz";
import { Section } from "@/components/Section";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-blue-background min-h-screen overflow-auto bg-fixed">
      <div className="flex justify-center h-screen py-11 px-8">
        <div className="flex flex-col w-[340px] max-h-sidebar justify-between align-center">
          <div>
            <div className="flex flex-row space-x-4 justify-center items-center mt-5">
              <Link
                href="/space"
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
              <h2 className="text-white text-3xl font-bold">SafeSpace</h2>
            </div>
            <Section />
          </div>
          <UnlockMasterQuiz />
        </div>

        <div className="flex flex-row justify-center grow min-w-[220px]">
          <div className="bg-white rounded-3xl py-6 w-full">{children}</div>
        </div>
      </div>
    </div>
  );
}
