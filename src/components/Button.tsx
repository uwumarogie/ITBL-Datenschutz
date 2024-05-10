'use client'

import {MouseEventHandler, PropsWithChildren} from "react";
import clsx from "clsx";

type ButtonProps = {
    onClick?: MouseEventHandler<HTMLButtonElement> | undefined,
    className?: string | undefined
} & PropsWithChildren

export default function Button({children, onClick, className}: ButtonProps) {
    const buttonStyle = "inline-flex justify-center align-center bg-orange-500 px-6 py-3 text-white font-medium rounded-2xl transition-colors "
    return (
        <button className={clsx(buttonStyle, className)} onClick={onClick}>{children}</button>
    )
}