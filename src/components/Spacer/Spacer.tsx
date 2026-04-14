/*
 * Copyright (c) 2026 Axel "Foley" Karlsson and contributors.
 *
 * Use of this source code is governed by the MIT License, which you may
 * view in its entirety in the LICENSE file, found in the project's root directory.
 */

import { type JSX } from "react"

export function Spacer({ size }: { size?: "large" | "medium" | "small" }): JSX.Element {

    let pixels: number

    switch (size) {
        case "large":
            pixels = 32
            break
        case "medium":
            pixels = 16
            break
        case "small":
            pixels = 8
            break
        default:
            pixels = 16
    }

    return (
        <div aria-hidden={true} style={{
            height: `${pixels}px`
        }}></div>
    )
}