/*
 * Copyright (c) 2025 Axel "Foley" Karlsson and contributors.
 *
 * Use of this source code is governed by the MIT License, which you may
 * view in its entirety in the LICENSE file, found in the project's root directory.
 */

import { getClassName } from "@/internal/hooks/getClassName"
import { type JSX, useId, useState } from "react"

import "./Switch.sass"

export function Switch({ label, disabled, change, on }: { label: string, disabled?: boolean, change?: (newValue: boolean) => void, on?: boolean }): JSX.Element {
    const [ value, setValue ] = useState<boolean>(!!on)

    const handleChange = (): void => {
        if (disabled) {
            return
        }

        const newValue = !value
        setValue(newValue)

        if (change) {
            change(newValue)
        }
    }

    const className = getClassName("Switch")

    const ids = {
        label: useId(),
        switchElement: useId()
    }

    return (
        <div>
            <label id={ids.label} htmlFor={ids.switchElement}>
                {label}
            </label>

            <div className={className}
                 id={ids.switchElement}
                 role="switch"
                 aria-checked={value}
                 aria-labelledby={ids.label}
                 aria-disabled={disabled}
                 tabIndex={!disabled ? 0 : undefined}
                 onClick={() => {
                     handleChange()
                 }}
                 onKeyDown={e => {
                     if (e.key === " " || e.key === "Enter") {
                        handleChange()
                     }
                 }}>
                <div className="pill" aria-hidden></div>
            </div>
        </div>
    )
}