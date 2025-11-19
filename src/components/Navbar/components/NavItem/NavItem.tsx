/*
 * Copyright (c) 2025 Axel "Foley" Karlsson and contributors.
 *
 * Use of this source code is governed by the MIT License, which you may
 * view in its entirety in the LICENSE file, found in the project's root directory.
 */

import { type JSX, type ReactNode } from "react"

import "./NavItem.scss"
import { useClassName } from "../../../../internal/hooks/useClassName"

export function NavItem({ children }: { children: ReactNode }): JSX.Element {

    const className = useClassName("NavItem")

    return (
        <li className={className} role="menuitem">
            {children}
        </li>
    )
}