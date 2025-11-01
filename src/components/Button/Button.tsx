/*
 * Copyright (c) 2025 Axel "Foley" Karlsson and contributors.
 *
 * Use of this source code is governed by the MIT License, which you may
 * view in its entirety in the LICENSE file, found in the project's root directory.
 */

"use strict"

import { type ReactNode, useRef } from "react"
import type { BaseProps } from "../../index.js"

import "./Button.scss"

export interface ButtonProps extends BaseProps<HTMLButtonElement> {
    children?: ReactNode
    primary?: boolean
    click?: () => void
    disabled?: boolean
    fluid?: boolean
}

export function Button({ children, primary, click, disabled, ref, fluid }: ButtonProps) {

    const buttonRef = useRef<HTMLButtonElement>(null)

    let className = "X-Button"

    if (primary) {
        className += " primary"
    }

    if (fluid) {
        className += " fluid"
    }

    return (
        <button className={className}
                onClick={click}
                ref={ref ?? buttonRef}
                disabled={disabled}
                aria-disabled={disabled}
                onKeyDown={e => {
                    if (e.key !== "Enter") return

                    const button = ref?.current ?? buttonRef.current

                    if (button) {
                        button.classList.add("__KEYBOARD_CLICK__")
                    }
                }}
                onKeyUp={e => {
                    if (e.key !== "Enter") return

                    const button = ref?.current ?? buttonRef.current

                    if (button) {
                        button.classList.remove("__KEYBOARD_CLICK__")
                    }
                }}>
            {children}
        </button>
    )
}