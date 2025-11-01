/*
 * Copyright (c) 2025 Axel "Foley" Karlsson and contributors.
 *
 * Use of this source code is governed by the MIT License, which you may
 * view in its entirety in the LICENSE file, found in the project's root directory.
 */

"use strict"

import { useId, useState } from "react"
import type { BaseProps } from "../../index.js"

import "./Checkbox.scss"

export interface CheckboxProps extends BaseProps<HTMLDivElement> {
    label: string
    checked?: boolean
    change?: (newValue: boolean) => void
    disabled?: boolean
}

export function Checkbox({ label, checked, change, disabled, ref }: CheckboxProps) {
    const [ value, setValue ] = useState<boolean>(!!checked)

    const onChange = () => {
        if (disabled) {
            return
        }

        const newValue = !value
        setValue(newValue)

        if (change) {
            change(newValue)
        }
    }

    let className = "X-Checkbox"

    if (disabled) {
        className += " disabled"
    }

    const checkBoxId = useId()
    const labelId = useId()

    return (
        <div className="X-Checkbox-Wrapper">
            <div className={className}
                 id={checkBoxId}
                 aria-labelledby={labelId}
                 aria-checked={value}
                // The checkbox should not be tabbable if it's disabled
                 tabIndex={disabled ? undefined : 0}
                 role="checkbox"
                 onClick={onChange}
                 onKeyDown={e => e.key === "Enter" && onChange()}
                 ref={ref}
                 aria-disabled={disabled}>
                {value && (
                    <svg className="X-Checkbox-Checkmark"
                         aria-hidden="true"
                         xmlns="http://www.w3.org/2000/svg"
                         width="16"
                         height="16"
                         fill="currentColor"
                         viewBox="0 0 16 16">
                        <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0" />
                    </svg>
                )}
            </div>

            <label htmlFor={checkBoxId}
                   id={labelId}
                   onClick={() => {
                       document.getElementById(checkBoxId)?.click()
                   }}>
                {label}
            </label>
        </div>
    )
}