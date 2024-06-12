"use client";

import clsx from "clsx";
import { Props, SectionName } from "../Section";
import { DesktopSectionItem } from "@/components/NavBar/DesktopNavigation/desktop-section-item";

export function DesktopSection({
  setSection,
  activeSection,
  sectionItems,
}: Props) {
  return (
    <div className="justify-center items-center min-h-48 bg-gradient-to-r from-blue-background to-white ml-6">
      <div
        className={clsx(
          "flex items-center justify-center flex-row space-x-5 min-w-60 max-w-96 min-h-10 bg-blue-background z-30",
          activeSection === SectionName.ERKUNDEN && "rounded-br-3xl",
        )}
      />
      {sectionItems.map(
        ({ sectionName, srcActive, srcInactive, alt, href }, index) => (
          <DesktopSectionItem
            key={index}
            setSection={setSection}
            sectionName={sectionName}
            isActive={activeSection === sectionName}
            srcActive={srcActive}
            srcInactive={srcInactive}
            alt={alt}
            href={href}
            className={clsx(
              "flex items-center justify-start px-28 flex-row space-x-5 min-w-60 max-w-96 min-h-16 bg-blue-background",
              activeSection === sectionName
                ? "bg-white rounded-l-full text-orange-600"
                : "text-white",
              index > 0 &&
                sectionItems[index - 1].sectionName === activeSection &&
                "rounded-tr-3xl",
              index < 3 &&
                sectionItems.length == 4 &&
                sectionItems[index + 1].sectionName === activeSection &&
                "rounded-br-3xl",
              index < 2 &&
                sectionItems.length == 3 &&
                sectionItems[index + 1].sectionName === activeSection &&
                "rounded-br-3xl",
            )}
          />
        ),
      )}
      <div
        className={clsx(
          "flex items-center justify-center flex-row space-x-5 min-w-60 max-w-96 min-h-5 bg-blue-background z-30 ",
          activeSection === SectionName.CHATBOT && "rounded-tr-3xl",
        )}
      />
    </div>
  );
}
