"use client";

import { MouseEventHandler, PropsWithChildren } from "react";
import clsx from "clsx";

export type ButtonStyle = "default" | "green" | "red";

type ButtonProps = {
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
  className?: string | undefined;
  style?: ButtonStyle;
} & PropsWithChildren;

export default function Button({
  children,
  onClick,
  className,
  style,
}: ButtonProps) {
  const buttonBase =
    "inline-flex justify-center items-center align-center px-6 py-3 font-medium rounded-2xl transition-colors ";
  let buttonStyle = "text-white bg-orange-500";
  let buttonHoverStyle = "hover:bg-orange-600";
  if (style == "green") {
    buttonStyle = "text-white bg-lime-500";
    buttonHoverStyle = "hover:bg-lime-600";
  } else if (style == "red") {
    buttonStyle = "text-white bg-red-500";
    buttonHoverStyle = "hover:bg-red-600";
  }
  return (
    <button
      className={clsx(
        buttonBase,
        buttonStyle,
        className,
        onClick && buttonHoverStyle,
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
