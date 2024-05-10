"use client";

import { Props } from "../Section";
import { MobileSectionItem } from "./MobileSectionItem";

export function MobileSection({
  setSection,
  first,
  second,
  third,
  fourth,
  sectionItems,
}: Props) {
  return (
    <div className="flex flex-row space-x-5 justify-center items-center">
      {sectionItems.map(
        ({ sectionName, isActive, srcActive, srcInactive, href }, index) => (
          <MobileSectionItem
            key={index}
            setSection={setSection}
            sectionName={sectionName}
            isActive={isActive}
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
