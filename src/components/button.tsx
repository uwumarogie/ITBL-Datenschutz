"use client";

import { MouseEventHandler, PropsWithChildren } from "react";
import clsx from "clsx";

export type ButtonStyle = "default" | "green" | "red" | "secondary";

type ButtonProps = {
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
  className?: string | undefined;
  style?: ButtonStyle;
  disabled?: boolean | undefined;
} & PropsWithChildren;

export default function Button({
  children,
  onClick,
  className,
  style,
  disabled,
}: ButtonProps) {
  const buttonBase =
    "inline-flex justify-center items-center align-center px-6 py-3 font-medium rounded-2xl transition-colors";
  let buttonStyle = "text-white bg-orange-500";
  const buttonDisabledStyle = "bg-gray-300 text-white";
  let buttonHoverStyle = "hover:bg-orange-600";
  if (style == "green") {
    buttonStyle = "text-white bg-lime-500";
    buttonHoverStyle = "hover:bg-lime-600";
  } else if (style == "red") {
    buttonStyle = "text-white bg-red-500";
    buttonHoverStyle = "hover:bg-red-600";
  } else if (style == "secondary") {
    buttonStyle = "text-white bg-[#004F86]"
    buttonHoverStyle = "hover:bg-[#004170]"
  }

  const mergedStyle = clsx(
    buttonBase,
    disabled ? buttonDisabledStyle : buttonStyle,
    className,
    onClick ? "cursor-pointer" : "cursor-default",
    onClick && buttonHoverStyle,
  );
  return (
    <button className={mergedStyle} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}
