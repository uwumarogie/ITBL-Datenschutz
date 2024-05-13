import Link from "next/link";
import { SectionName } from "../Section";
import Image from "next/image";

type DesktopSectionItem = {
  setSection: (activeSection: SectionName) => void;
  sectionName: SectionName;
  isActive: boolean;
  srcActive: string;
  srcInactive: string;
  alt: string;
  href: string;
  className: string;
};

export function DesktopSectionItem({
  setSection,
  sectionName,
  isActive,
  srcActive,
  srcInactive,
  alt,
  href,
  className,
}: DesktopSectionItem) {
  return (
    <Link
      onClick={() => setSection(sectionName)}
      href={href}
      className={className}
    >
      {isActive ? (
        <Image
          src={srcActive}
          alt={alt}
          width={30}
          height={30}
          className="scale-100"
        />
      ) : (
        <Image src={srcInactive} alt={alt} width={30} height={30} />
      )}
      <span className="text-center">{alt}</span>
    </Link>
  );
}
