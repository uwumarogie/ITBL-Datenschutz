"use client"

import clsx from "clsx";
import {X} from "@phosphor-icons/react";
import {CollectData} from "@/app/(safespace)/space/daten-verarbeitung/data/collect";
import {useState} from "react";


export default function TagList({show, onClose}: {show: boolean, onClose: () => void }) {
  return <div
    className={clsx("absolute w-full h-full z-20 flex items-center justify-center transition-all", show ? "opacity-100" : "opacity-0 pointer-events-none")}>
    <div className="bg-white rounded-xl shadow-md relative z-10 w-full max-w-[700px] h-full max-h-[80%] flex flex-col">
      <div className="flex justify-between w-full flex-shrink-0 px-6 py-4">
        <h3 className="font-semibold">Gesammelte Daten</h3>
        <X className="transition-transform hover:scale-110 cursor-pointer" onClick={onClose}/>
      </div>
      <div className="flex flex-wrap gap-2 h-full overflow-y-auto px-6 pb-4">
        {CollectData.termsAll.map(t => (
          <span key={t} className="bg-blue-100 px-2 py-1 rounded-full text-blue-900">{t}</span>))}
      </div>
    </div>
    <div className="absolute w-full h-full bg-black opacity-20 rounded-2xl cursor-pointer"
         onClick={onClose}></div>
  </div>
}