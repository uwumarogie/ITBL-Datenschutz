"use client";

import { useState } from "react";
import { InputValidation } from "@/components/input-validation";

export default function Passwort() {
  const [input, setInput] = useState("");

  return (
    <div className="flex max-w-[1100px] p-4 justify-start">
      <div className="flex flex-col justify-start max-w-full space-y-5 p-10">
        <h1 className="text-xl lg:text-3xl text-blue-background ">
          Wähle ein sicheres Passwort!
        </h1>
        <input
          className="flex border-2 border-black rounded-xl text-xl md:text-2xl p-3 md:p-4 w-full h-14"
          onChange={(e) => setInput(e.target.value)}
          name="passwort-input"
        />
        <div className="space-y-2">
          <InputValidation input={input} />
        </div>
      </div>
    </div>
  );
}
