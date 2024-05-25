import Link from "next/link";
import Image from "next/image";
import { displayText } from "@/util/landing-page";

type ExerciseLink = {
  slug: string;
  text: string;
  imageSrc: string;
};
export default function ExerciseLink({ slug, text, imageSrc }: ExerciseLink) {
  const modifiedText = displayText(text);
  return (
    <div className="flex flex-col justify-center h-full">
      <Link
        href={slug}
        className="flex justify-center bg-sky-200 rounded-2xl p-2 max-h-[290px] min-h-[240px] h-full"
      >
        <div className="flex flex-col justify-center">
          <h3 className="text-center text-blue-background text-xl">
            {modifiedText}
          </h3>
          <Image
            src={imageSrc}
            alt={imageSrc}
            width={200}
            height={200}
            className="mx-auto"
          />
        </div>
      </Link>
    </div>
  );
}
