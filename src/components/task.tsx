import {Info} from "@phosphor-icons/react";
import React from "react";
import clsx from "clsx";

export default function Task({children, className}: { children?: React.ReactNode, className?: string }) {
  return <div className={clsx("flex items-center p-4 bg-slate-100 rounded-xl", className)}>
    <Info className="mr-4 text-orange-500 flex-shrink-0" weight="bold" size="20px"/>
    <div className="text-slate-800">
      {children}
    </div>
  </div>
}