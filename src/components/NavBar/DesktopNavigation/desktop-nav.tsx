"use client";
import Link from "next/link";
import Image from "next/image";
import { ActionCard } from "@/components/action-card";
import { Section } from "../Section";
import { useRouter } from "next/navigation";

export function DesktopNav() {
  const router = useRouter();
  return (
    <div className="flex flex-col w-[340px] h-full justify-between align-center">
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
      <div className="mx-auto">
        <ActionCard
          title="Master Quiz"
          description="Teste all dein Wissen"
          iconSrc="/star.svg"
          buttonText="Start"
          primaryColor="#014F86"
          secondaryColor="#2A6F97"
          titleColor="white"
          onClick={() => router.push("/sandbox/quiz")}
        />
      </div>
    </div>
  );
}
