"use client";

import { useState } from "react";
import { InputValidation } from "@/components/input-validation";
import Button from "@/components/button";

export function SecurePasswordInput() {
  const [input, setInput] = useState("");
  const [isSecure, setIsSecure] = useState(false);
  return (
    <div
      className="flex flex-col justify-start max-w-full space-y-2 pt-4 pb-1"
      style={{ paddingBottom: isSecure ? "0rem" : "2rem" }}
    >
      <h1 className="text-lg lg:text-2xl text-blue-background decoration-3">
        Erstelle ein sicheres Passwort!
      </h1>
      <div className="flex flex-row gap-x-8 gap-y-2 flex-wrap">
        <input
          className="flex border-2 border-black rounded-xl text-xl md:text-2xl p-3 md:p-4 lg:w-7/12 sm:w-full h-14 max-w-[290px]"
          onChange={(e) => setInput(e.target.value)}
          name="passwort-input"
        />

        <Button onClick={() => setIsSecure((prev) => !prev)}>
          {isSecure ? "Versuch nochmal" : "Passwortcheck"}
        </Button>
      </div>
      {isSecure && (
        <div className="space-y-2">
          <InputValidation input={input} />
        </div>
      )}
    </div>
  );
}
