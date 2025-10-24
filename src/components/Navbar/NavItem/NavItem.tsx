/*
 * Copyright (c) 2025 Axel "Foley" Karlsson and contributors.
 *
 * Use of this source code is governed by the MIT License, which you may
 * view in its entirety in the LICENSE file, found in the project's root directory.
 */

import type { ReactNode } from "react"

import "./NavItem.css"

export function NavItem({ children }: { children: ReactNode }) {
    return (
        <li className="X-NavItem" role="menuitem">
            {children}
        </li>
    )
}