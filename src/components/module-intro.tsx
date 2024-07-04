import Image from "next/image";
import Button from "@/components/button";
import { useRouter } from "next/navigation";
import React, { cloneElement } from "react";
import clsx from "clsx";

export type ModuleChapter = {
  icon: string | React.ReactNode;
  title: string;
  minutes?: string;
  onClick?: () => void;
};

export type ModuleIntroProps = {
  title: string;
  description: string;
  background?: string;
  entryPath: string;
  chapter: ModuleChapter[];
};

export default function ModuleIntro({
  title,
  description,
  chapter,
  background,
  entryPath,
}: ModuleIntroProps) {
  const router = useRouter();
  return (
    <div className="h-full w-full flex flex-col items-start relative">
      <h1 className="font-semibold text-4xl text-sky-900 mb-2">{title}</h1>
      <h4 className="font-semibold text-xl mb-4">Modulübersicht</h4>
      <p className="whitespace-pre-wrap mb-10 w-full 2xl:max-w-[50%]">
        {description}
      </p>
      <div className="w-full flex flex-col-reverse lg:grid lg:grid-cols-[minmax(auto,_600px)_auto] lg:gap-8">
        <div className="w-full ">
          <h3 className="text-3xl font-semibold mb-6">Kapitel</h3>
          <Chapter chapter={chapter} />
        </div>

        {background && (
          <Image
            className="w-full h-full max-h-40 lg:max-h-96 object-contain object-center lg:object-right"
            src={background}
            alt="Background image"
            width="1000"
            height="1000"
            priority
          />
        )}
      </div>

      <Button
        className="w-full lg:w-1/2"
        onClick={() => router.push(entryPath)}
      >
        Modul starten
      </Button>
    </div>
  );
}

function Chapter({ chapter }: { chapter: ModuleChapter[] }) {
  return (
    <div className="flex flex-col gap-4 mb-10">
      {chapter.map((c, index) => {
        const icon = React.isValidElement(c.icon) ? (
          cloneElement(c.icon, {
            size: "100px",
            color: "white",
            weight: "fill",
          } as any)
        ) : (
          <Image
            src={c.icon as string}
            alt={c.title}
            width="100"
            height="100"
          />
        );
        return (
          <React.Fragment key={c.title}>
            <div
              className={clsx(
                "flex items-center group",
                c.onClick && "cursor-pointer",
              )}
              onClick={c.onClick}
            >
              <div
                className={clsx(
                  "bg-orange-500 w-14 h-14 p-4 mr-6 rounded-2xl inline-flex items-center justify-center shrink-0",
                  c.onClick &&
                    "transition-all group-hover:bg-orange-600 group-hover:shadow-xl",
                )}
              >
                {icon}
              </div>
              <div className="flex flex-col w-full">
                <span className="font-medium text-lg">{c.title}</span>
                <span className="flex gap-2 opacity-40 text-sm font-medium">
                  <span>Kapitel {index + 1}</span>
                  {c.minutes && (
                    <React.Fragment>
                      <span>•</span>
                      <span>{c.minutes} min</span>
                    </React.Fragment>
                  )}
                </span>
              </div>
            </div>
            <div className="w-full h-[1px] pl-[4.8rem]">
              <div className="w-full h-full bg-gray-200 box-content"></div>
            </div>
          </React.Fragment>
        );
      })}
    </div>
  );
}
