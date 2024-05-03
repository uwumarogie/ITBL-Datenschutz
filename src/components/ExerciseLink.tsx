import Link from "next/link";
import Image from "next/image";
import { displayText } from "@/util/startingSiteFunctions";

type ExerciseLink = {
    slug: string;
    text: string;
    imageSrc: string;
};
export default function ExerciseLink({
  slug,
  text,
  imageSrc,
}: ExerciseLink) {
  const modifiedText = displayText(text);
  return (
    <Link
      href={slug}
      className="flex justify-center min-w-[337px] max-h-[337px] bg-sky-200 rounded-2xl p-2"
    >
      <div className="flex flex-col justify-center">
        <h3 className="text-center text-blue-background text-xl min-w-[50px]">
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
  );
}
