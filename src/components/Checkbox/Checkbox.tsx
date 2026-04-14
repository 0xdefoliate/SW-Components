/*
 * Copyright (c) 2026 Axel "Foley" Karlsson and contributors.
 *
 * Use of this source code is governed by the MIT License, which you may
 * view in its entirety in the LICENSE file, found in the project's root directory.
 */

import { type JSX, useId, useRef, useState } from "react"
import { getClassName } from "@/internal/hooks/getClassName"

import "./Checkbox.sass"

export interface CheckboxProps {
    label: string
    checked?: boolean
    change?: (newValue: boolean) => void
    disabled?: boolean
}

export function Checkbox({ label, checked, change, disabled }: CheckboxProps): JSX.Element {
    const [ value, setValue ] = useState<boolean>(!!checked)

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

    const classNames = {
        checkbox: getClassName({
            base: "Checkbox",
            appendConditionally: {
                disabled
            }
        }),

        wrapper: getClassName("Checkbox-Wrapper"),
        checkmark: getClassName("Checkbox-Checkmark")
    }

    const checkBoxID = useId()
    const labelID = useId()

    const checkboxRef = useRef<HTMLDivElement>(null)

    return (
        <div className={classNames.wrapper}>
            <div className={classNames.checkbox}
                 id={checkBoxID}
                 aria-labelledby={labelID}
                 aria-checked={value}
                // The checkbox should not be tabbable if it's disabled
                 tabIndex={disabled ? undefined : 0}
                 role="checkbox"
                 onClick={handleChange}
                 onKeyDown={e => {
                     if (e.key === " ") {
                         handleChange()
                     }
                 }}
                 ref={checkboxRef}
                 aria-disabled={disabled}>
                {value && (
                    <span className={classNames.checkmark} aria-hidden="true"></span>
                )}
            </div>

            <label htmlFor={checkBoxID}
                   id={labelID}
                   onClick={() => {
                       checkboxRef.current?.click()
                   }}>
                {label}
            </label>
        </div>
    )
}