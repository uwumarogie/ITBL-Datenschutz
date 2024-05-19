"use client";

import { useState } from "react";
import clsx from "clsx";

type CheckboxProps = {
  className?: string;
  hoverText: string;
  style?: React.CSSProperties;
  isChecked: boolean;
  index: number;
  handleCheckboxChanged: (index: number) => void;
};

export default function Checkbox({
  className,
  hoverText,
  style,
  isChecked,
  index,
  handleCheckboxChanged,
}: CheckboxProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={className}
      style={style}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <label className="flex items-center space-x-2 cursor-pointer">
        <div
          className={clsx(
            "relative h-5 w-5 md:h-6 md:w-6 2xl:w-8 2xl:h-8 rounded border-2 border-orange-300 bg-orange-500 transition duration-300",
            isChecked && "bg-orange-600 border-orange-600",
          )}
          onClick={() => handleCheckboxChanged(index)}
        >
          {isChecked && (
            <svg
              className="absolute inset-0 w-full h-full text-white"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12l5 5L20 7" />
            </svg>
          )}
        </div>
      </label>
      <div
        className="hidden sm:block absolute left-3 bottom-6 mt-6 px-2 py-1 bg-gray-700 text-white text-xs rounded transition-opacity duration-300 z-50"
        style={{ opacity: isHovered ? 1 : 0 }}
      >
        {hoverText}
      </div>
    </div>
  );
}
