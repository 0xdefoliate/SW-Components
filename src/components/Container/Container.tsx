/*
 * Copyright (c) 2025 Axel "Foley" Karlsson and contributors.
 *
 * Use of this source code is governed by the MIT License, which you may
 * view in its entirety in the LICENSE file, found in the project's root directory.
 */

"use strict"

import type { ReactNode } from "react"

export function Container({ children, vertical, centre, gap }: {
    children: ReactNode,
    vertical?: boolean,
    centre?: boolean,
    gap?: number
}) {

    let className = "X-Container"

    if (vertical) {
        className += " vertical"
    }

    if (centre) {
        className += " centre"
    }

    return (
        <div className={className} {...(gap !== undefined ? { style: { gap: `${gap}px` } } : {})}>
            {children}
        </div>
    )
}