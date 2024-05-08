'use client'

import {MouseEventHandler, PropsWithChildren} from "react";

type ButtonProps = {
    onClick?: MouseEventHandler<HTMLButtonElement> | undefined,
    className?: string | undefined
} & PropsWithChildren

export default function Button({children, onClick, className}: ButtonProps) {
    return (
        <button className={"button transition-colors " + className} onClick={onClick}>{children}</button>
    )
}