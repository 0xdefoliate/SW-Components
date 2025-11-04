/*
 * Copyright (c) 2025 Axel "Foley" Karlsson and contributors.
 *
 * Use of this source code is governed by the MIT License, which you may
 * view in its entirety in the LICENSE file, found in the project's root directory.
 */

import type { JSX, ReactNode } from "react"

import "./Group.scss"

export interface GroupProps {
    legend: string
    children: ReactNode
}

export function Group({ legend, children }: GroupProps): JSX.Element {
    return (
        <fieldset className="X-Group">
            <legend>
                {legend}
            </legend>

            <div className="X-Group-Container">
                {children}
            </div>
        </fieldset>
    )
}