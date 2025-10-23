/*
 * Copyright (c) 2025 Axel "Foley" Karlsson and contributors.
 *
 * Use of this source code is governed by the MIT License, which you may
 * view in its entirety in the LICENSE file, found in the project's root directory.
 */

"use strict"

import type { ReactNode } from "react"
import type { BaseProps } from "../../index.js"

import "./Button.css"

export interface ButtonProps extends BaseProps<HTMLButtonElement> {
    children?: ReactNode
    primary?: boolean
    click?: () => void
    disabled?: boolean
}

export function Button({ children, primary, click, disabled, ref }: ButtonProps) {

    let className = "X-Button"

    if (primary) {
        className += " primary"
    }

    return (
        <button className={className}
                onClick={click}
                ref={ref}
                disabled={disabled}
                aria-disabled={disabled}>
            {children}
        </button>
    )
}