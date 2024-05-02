import Link from "next/link";
import Image from "next/image";
import { displayText } from "@/util/startingSiteFunctions";

export default function ExerciseLink({
  slug,
  text,
  imageSrc,
}: {
  slug: string;
  text: string;
  imageSrc: string;
}) {
  const modifiedText = displayText(text);
  return (
    <Link
      href={slug}
      className="flex justify-center min-w-[340px] max-h-[340px] bg-sky-200 rounded-2xl"
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
