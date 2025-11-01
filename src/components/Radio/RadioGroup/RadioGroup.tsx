/*
 * Copyright (c) 2025 Axel "Foley" Karlsson and contributors.
 *
 * Use of this source code is governed by the MIT License, which you may
 * view in its entirety in the LICENSE file, found in the project's root directory.
 */

import { type ReactNode } from "react"
import { RadioContext } from "../RadioContext"

import "./RadioGroup.scss"

export type TRadiosChangeCallback = (arg: { key: string, checked: boolean }) => void

export interface RadiosProps {
    name: string
    change: TRadiosChangeCallback
    children: ReactNode
}

export function RadioGroup({ name, change, children }: RadiosProps) {
    return (
        <div className="X-RadioGroup" role="radiogroup">
            <RadioContext value={{ name, change }}>
                {children}
            </RadioContext>
        </div>
    )
}