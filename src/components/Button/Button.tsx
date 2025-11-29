/*
 * Copyright (c) 2025 Axel "Foley" Karlsson and contributors.
 *
 * Use of this source code is governed by the MIT License, which you may
 * view in its entirety in the LICENSE file, found in the project's root directory.
 */

import { type JSX, type ReactNode, useRef } from "react"
import { getClassName } from "@/internal/hooks/getClassName"

import "./Button.sass"

export interface ButtonProps {
    children?: ReactNode
    primary?: boolean
    click?: () => void
    disabled?: boolean
    fluid?: boolean
}

export function Button({ children, primary, click, disabled, fluid }: ButtonProps): JSX.Element {

    const buttonRef = useRef<HTMLButtonElement>(null)

    const className = getClassName({
        base: "Button",

        extensions: {
            primary
        },
        appendConditionally: {
            fluid
        }
    })

    return (
        <button className={className}
                onClick={click}
                ref={buttonRef}
                disabled={disabled}
                aria-disabled={disabled}
                onKeyDown={e => {
                    if (e.key !== "Enter" || !buttonRef.current) {
                        return
                    }

                    buttonRef.current.classList.add("__KEYBOARD_CLICK__")
                }}
                onKeyUp={e => {
                    if (e.key !== "Enter" || !buttonRef.current) {
                        return
                    }

                    buttonRef.current.classList.remove("__KEYBOARD_CLICK__")
                }}>
            {children}
        </button>
    )
}