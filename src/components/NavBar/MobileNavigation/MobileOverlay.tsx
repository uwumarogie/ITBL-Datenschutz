import Link from "next/link";
import Image from "next/image";

export function Overlay() {
  return (
    <div className="absolute left-[-0.3rem] right-[-0.3rem] top-full mt-2 bg-white shadow-xl px-5 py-9 z-50 rounded-3xl">
      <div className="flex flex-row gap-x-3 justify-between">
        <p>Navigation will happen here</p>

        <Link
          href="/space/spaceholder"
          className="flex flex-col items-center bg-blue-contrast rounded-xl min-h-16 min-w-16 justify-center py-4 px-2"
        >
          <span className="pb-2 text-xs text-white">MasterQuiz</span>
          <Image
            src="/star.svg"
            alt="Logo"
            width={60}
            height={60}
            className="mx-auto"
          />
        </Link>
      </div>
    </div>
  );
}
