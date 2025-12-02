/*
 * Copyright (c) 2025 Axel "Foley" Karlsson and contributors.
 *
 * Use of this source code is governed by the MIT License, which you may
 * view in its entirety in the LICENSE file, found in the project's root directory.
 */

import { getClassName } from "@/internal/hooks/getClassName"

import "./NavButton.sass"
import type { ReactNode, JSX } from "react"

export function NavButton({ children, change }: { children: ReactNode, change?: () => void }): JSX.Element {

    const className = getClassName("NavButton")

    return (
        <button className={className} onChange={change}>
            {children}
        </button>
    )
}