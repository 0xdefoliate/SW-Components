/*
 * Copyright (c) 2025 Axel "Foley" Karlsson and contributors.
 *
 * Use of this source code is governed by the MIT License, which you may
 * view in its entirety in the LICENSE file, found in the project's root directory.
 */

import type { JSX, ReactNode } from "react"

import "./Group.scss"
import { useClassName } from "../../internal/hooks/useClassName"

export interface GroupProps {
    legend: string
    children: ReactNode
}

export function Group({ legend, children }: GroupProps): JSX.Element {

    const classNames = {
        group: useClassName("Group"),
        wrapper: useClassName("Group-Container"),
    }

    return (
        <fieldset className={classNames.group}>
            <legend>
                {legend}
            </legend>

            <div className={classNames.wrapper}>
                {children}
            </div>
        </fieldset>
    )
}