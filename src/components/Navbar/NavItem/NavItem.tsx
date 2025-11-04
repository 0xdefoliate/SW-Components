/*
 * Copyright (c) 2025 Axel "Foley" Karlsson and contributors.
 *
 * Use of this source code is governed by the MIT License, which you may
 * view in its entirety in the LICENSE file, found in the project's root directory.
 */

import { type JSX, type ReactNode } from "react"

import "./NavItem.scss"

export function NavItem({ children }: { children: ReactNode }): JSX.Element {
    return (
        <li className="X-NavItem" role="menuitem">
            {children}
        </li>
    )
}