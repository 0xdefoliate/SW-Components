/*
 * Copyright (c) 2025 Axel "Foley" Karlsson and contributors.
 *
 * Use of this source code is governed by the MIT License, which you may
 * view in its entirety in the LICENSE file, found in the project's root directory.
 */

import { type JSX, type ReactNode } from "react"
import { getClassName } from "@/internal/hooks/getClassName"
import { RadioContext } from "../../RadioContext"

import "./RadioGroup.sass"

export type TRadiosChangeCallback = (arg: { key: string, checked: boolean }) => void

export interface RadioGroupProps {
    name: string
    change: TRadiosChangeCallback
    children: ReactNode
}

export function RadioGroup({ name, change, children }: RadioGroupProps): JSX.Element {

    const className = getClassName("RadioGroup")

    return (
        <div className={className} role="radiogroup">
            <RadioContext value={{ name, change }}>
                {children}
            </RadioContext>
        </div>
    )
}