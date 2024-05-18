import { InlineNavigation } from "@/components/inline-navigation";
import React from "react";

export default function DataProgressingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="px-6 h-full flex flex-col">
      <div className="hidden sm:block">
        <InlineNavigation />
      </div>
      <div className="w-full h-full overflow-hidden">{children}</div>
    </div>
  );
}
