"use client";
import Image from "next/image";
import { displayText } from "@/util/landing-page";
import Button from "./button";
import { useRouter } from "next/navigation";
import clsx from "clsx";
import { CheckCircle, LockKey } from "@phosphor-icons/react";

type ExerciseLink = {
  slug: string;
  text: string;
  imageSrc: string;
  description: string;
  unlocked: boolean;
  finished: boolean;
};
export default function ExerciseLink({
  slug,
  text,
  imageSrc,
  description,
  unlocked,
  finished,
}: ExerciseLink) {
  const modifiedText = displayText(text);
  const router = useRouter();
  return (
    <div
      className={clsx(
        "flex flex-col justify-center h-full rounded-2xl relative",
        !unlocked && "grayscale pointer-events-none",
      )}
    >
      {!unlocked && (
        <div className="w-full h-full absolute z-20 flex justify-center items-center">
          <LockKey className="w-24 h-24" weight="duotone" />
        </div>
      )}
      <div
        className={clsx(
          "relative group flex justify-center bg-sky-200 rounded-2xl p-2 max-h-[290px] min-h-[240px] h-full",
          finished && "opacity-30 hover:opacity-100 transition-opacity",
        )}
      >
        <div
          className={clsx(
            "flex flex-col justify-between",
            !unlocked && "opacity-20",
          )}
        >
          <div className="flex justify-center items-center gap-6">
            <h3 className="text-center text-blue-background text-xl h-[56px]">
              {modifiedText}
            </h3>
            {finished && (
              <CheckCircle
                className="w-6 h-6 text-blue-background"
                weight="fill"
              />
            )}
          </div>
          <Image
            src={imageSrc}
            alt={imageSrc}
            width={200}
            height={200}
            className="mx-auto"
            priority
          />
        </div>
        <div className="absolute inset-0 h-full flex items-end">
          <div className="overflow-hidden rounded-2xl w-full h-full max-h-[77%]">
            <div className="flex flex-col justify-between px-8 pb-3 pt-6 w-full h-full bg-sky-200 bg-opacity-100 opacity-0 group-hover:animate-slideUp group-hover:opacity-100 transition-opacity duration-200 ease-in-out">
              <p className="text-blue-background text-center">{description}</p>
              <Button onClick={() => router.push(slug)}>Modul starten</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
