"use client";

import { Props } from "../Section";
import { MobileSectionItem } from "./MobileSectionItem";

export function MobileSection({
  setSection,
  activeSection,
  sectionItems,
}: Props) {
  return (
    <div className="flex flex-row space-x-5 justify-center items-center">
      {sectionItems.map(
        ({ sectionName, srcActive, srcInactive, href }, index) => (
          <MobileSectionItem
            key={index}
            setSection={setSection}
            sectionName={sectionName}
            isActive={activeSection === sectionName}
            srcActive={srcActive}
            srcInactive={srcInactive}
            alt={sectionName.toString()}
            href={href}
          />
        ),
      )}
    </div>
  );
}
