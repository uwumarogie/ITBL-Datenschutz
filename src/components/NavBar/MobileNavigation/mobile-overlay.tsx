import Link from "next/link";
import Image from "next/image";
import { InlineNavigation } from "@/components/inline-navigation";
import { useRouter } from "next/navigation";
import { SignOut } from "@phosphor-icons/react";

export function Overlay() {
  const router = useRouter()
  return (
    <div className="absolute left-[-0.3rem] right-[-0.3rem] top-full mt-2 bg-white shadow-xl px-5 pt-6 pb-4 z-50 rounded-3xl">
      <div className="flex flex-col gap-6">
        <div className="flex flex-row gap-x-3 justify-around">
          <div className="flex items-center">
            <InlineNavigation />
          </div>

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
        <span
          className="flex justify-center items-center gap-2 mt-2 hover:cursor-pointer"
          onClick={() => {
            localStorage.removeItem("gameCode")
            localStorage.removeItem("userId")
            router.push("/")
          }}
        >
          <SignOut size={28}/>
          <span className="text-lg align-center">Ausloggen</span>
        </span>
      </div>
    </div>
  );
}
