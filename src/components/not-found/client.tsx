"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

function backUpRouteSegment(route: string) {
  return route.includes("/space")
    ? route.split("/").slice(0, -1).join("/")
    : "/";
}

export function ClientNotFound() {
  const pathname = usePathname();
  const newRoute = backUpRouteSegment(pathname);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-white bg-blue-background gap-y-5">
      <h1 className="text-3xl font-extrabold">
        Du hast die falsche Url eingegeben.
      </h1>
      <Image
        src="https://cdn2.thecatapi.com/images/MTk3MDcwNA.jpg"
        alt="cat image"
        width={400}
        height={400}
      />
      <Link
        href={newRoute}
        className="flex w-72 h-14 rounded-xl bg-white text-red-600 items-center justify-center font-bold text-2xl"
      >
        Nochmal versuchen
      </Link>
    </div>
  );
}
