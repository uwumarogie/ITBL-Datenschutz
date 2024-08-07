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
        style={{
          height: "calc(100vh - 200px)",
          overflowY: "auto",
          overflowX: "hidden",
        }}
      >
        {children}
      </div>
    </div>
  );
}
