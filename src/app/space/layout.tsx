import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-blue-background min-h-screen overflow-auto bg-fixed">
      {children}
    </div>
  );
}
