"use client";

import { useState } from "react";
import { InputValidation } from "@/components/input-validation";

export function SecurePasswordInput() {
  const [input, setInput] = useState("");
  return (
    <div className="flex flex-col justify-start max-w-full space-y-2 p-4">
      <h1 className="text-2xl lg:text-2xl text-blue-background underline decoration-3">
        Erstellle ein sicheres Passwort!
      </h1>
      <input
        className="flex border-2 border-black rounded-xl text-xl md:text-2xl p-3 md:p-4 lg:w-7/12 sm:w-full h-10"
        onChange={(e) => setInput(e.target.value)}
        name="passwort-input"
      />
      <div className="space-y-2">
        <InputValidation input={input} />
      </div>
    </div>
  );
}
