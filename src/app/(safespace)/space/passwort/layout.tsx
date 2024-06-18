import { InlineNavigation } from "@/components/inline-navigation";
import React from "react";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="px-6 h-full">
      <div className="hidden sm:block">
        <InlineNavigation />
      </div>
      <div
        className="h-[calc(100vh-165px)] sm:h-[calc(100vh-190px)]"
        style={{ overflowY: "auto" }}
      >
        {children}
      </div>
    </div>
  );
}
