"use client";

import clsx from "clsx";
import { Props } from "../Section";
import { DesktopSectionItem } from "./desktop-section-item";

export function DesktopSection({
  setSection,
  first,
  second,
  third,
  fourth,
  sectionItems,
}: Props) {
  return (
    <div className="justify-center items-center min-h-48 bg-gradient-to-r from-blue-background to-white ml-6">
      <div
        className={clsx(
          "flex items-center justify-center flex-row space-x-5 min-w-60 max-w-96 min-h-10 bg-blue-background z-30",
          first && "rounded-br-3xl",
        )}
      />
      {sectionItems.map(
        (
          { sectionName, isActive, srcActive, srcInactive, alt, href },
          index,
        ) => (
          <DesktopSectionItem
            key={index}
            setSection={setSection}
            sectionName={sectionName}
            isActive={isActive}
            srcActive={srcActive}
            srcInactive={srcInactive}
            alt={alt}
            href={href}
            className={clsx(
              "flex items-center justify-start px-28 flex-row space-x-5 min-w-60 max-w-96 min-h-16 bg-blue-background",
              isActive
                ? "bg-white rounded-l-full text-orange-600"
                : "text-white",
              index > 0 && sectionItems[index - 1].isActive && "rounded-tr-3xl",
              index < 3 && sectionItems[index + 1].isActive && "rounded-br-3xl",
            )}
          />
        ),
      )}
      <div
        className={clsx(
          "flex items-center justify-center flex-row space-x-5 min-w-60 max-w-96 min-h-5 bg-blue-background z-30 ",
          fourth && "rounded-tr-3xl",
        )}
      />
    </div>
  );
}
