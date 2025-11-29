/*
 * Copyright (c) 2025 Axel "Foley" Karlsson and contributors.
 *
 * Use of this source code is governed by the MIT License, which you may
 * view in its entirety in the LICENSE file, found in the project's root directory.
 */

import { type JSX, type ReactNode } from "react"

import "./Navbar.sass"
import { getClassName } from "../../../../internal/hooks/getClassName"

export interface NavbarProps {
    brand: string,
    children?: ReactNode
}

// TODO: Document this component with JSDoc (and other components as well)

export function Navbar({ brand, children }: NavbarProps): JSX.Element {

    // Basically, if the brand looks something along the likes of: "Example Brand:https://example.com",
    // Then this variable below should capture that.
    const brandContainsURL = brand.includes(":") && !brand.startsWith(":") && !brand.endsWith(":")

    let brandName: string | undefined = brand
    let brandURL

    if (brandContainsURL) {
        const separatorIndex = brand.indexOf(":")
        brandName = brand.substring(0, separatorIndex)
        brandURL = brand.substring(separatorIndex + 1)
    }

    const className = getClassName("Navbar")

    return (
        <nav className={className} role="navigation">
            <div className="navbar-brand-and-items">
                <div className="navbar-brand">
                    <a href={brandContainsURL ? brandURL : "#"} className="navbar-brand-link">
                        {brandName}
                    </a>
                </div>

                <ul className="navbar-items" role="menubar">
                    {children}
                </ul>
            </div>
        </nav>
    )
}


