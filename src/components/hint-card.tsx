import Image from "next/image";
import Button from "./button";
import { useState, ReactNode } from "react";

type ActionCardProps = {
  text: string;
  buttonText: string;
  iconSrc?: string;
  hint: ReactNode;
};

export function HintCard({ text, buttonText, iconSrc, hint }: ActionCardProps) {
  const [showHint, setShowHint] = useState(false);
  return (
    <div
      className="relative rounded-xl p-4 scale-95 w-full h-full"
      style={{ background: "rgba(251, 109, 58, 0.15)" }}
    >
      <div className="absolute top-[-26px] left-[-26px] w-16 h-16 rounded-full flex items-center justify-center">
        <Image
          src="/question-mark.svg"
          alt="Question Mark"
          width={50}
          height={50}
        />
      </div>
      <div className="flex flex-col h-full justify-between">
        {showHint ? (
          <div className="flex flex-col w-full">
            <div className="flex flex-col items-end">
              <Image
                src="/cancel.svg"
                alt="cancel"
                width={30}
                height={30}
                onClick={() => setShowHint(false)}
                className="cursor-pointer"
              />
            </div>
            <div className="px-6 pb-6">{hint}</div>
          </div>
        ) : (
          <div className="flex justify-between flex-col h-full">
            <div className="flex flex-col relative justify-start items-start p-6">
              <span className="font-light text-sm pb-4 font-semibold text-blue-background">
                {text}
              </span>
              <Button onClick={() => setShowHint(true)}>{buttonText}</Button>
            </div>
            {iconSrc && <div className="flex justify-center w-full">
              <Image
                src={iconSrc}
                alt={text}
                layout="responsive"
                width={400}
                height={400}
                className="max-w-[200px] sm:max-w-[300px]"
              />
            </div>}
          </div>
        )}
      </div>
    </div>
  );
}
