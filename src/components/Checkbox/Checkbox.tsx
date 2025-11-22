/*
 * Copyright (c) 2025 Axel "Foley" Karlsson and contributors.
 *
 * Use of this source code is governed by the MIT License, which you may
 * view in its entirety in the LICENSE file, found in the project's root directory.
 */

import { type JSX, useId, useRef, useState } from "react"
import { useClassName } from "@/internal/hooks/useClassName"

import "./Checkbox.scss"

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
        checkbox: useClassName({
            base: "Checkbox",
            appendConditionally: {
                disabled
            }
        }),

        wrapper: useClassName("Checkbox-Wrapper"),
        checkmark: useClassName("Checkbox-Checkmark")
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
                     if (e.key === "Enter") {
                         handleChange()
                     }
                 }}
                 ref={checkboxRef}
                 aria-disabled={disabled}>
                {value && (
                    <svg className={classNames.checkmark}
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