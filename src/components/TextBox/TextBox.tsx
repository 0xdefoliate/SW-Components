/*
 * Copyright (c) 2025 Axel "Foley" Karlsson and contributors.
 *
 * Use of this source code is governed by the MIT License, which you may
 * view in its entirety in the LICENSE file, found in the project's root directory.
 */

import { type JSX, useState } from "react"
import { useClassName } from "../../internal/hooks/useClassName"
import type { FormControlProps } from "../types"

import "./TextBox.scss"

export interface TextBoxProps extends FormControlProps<string, string> {
    placeholder?: string
    subType?: "email" | "search" | "password" | "tel" | "url"
}

export function TextBox({ label, value, change, disabled, placeholder, subType }: TextBoxProps): JSX.Element {

    // This state is only used if no `value` is provided.
    const [ internalValue, setInternalValue ] = useState<string>("")

    const classNames = {
        wrapper: useClassName("TextInput-Wrapper"),
        textBox: useClassName("TextInput")
    }

    return (
        <label className={classNames.wrapper}>
            <div>
                {label}
            </div>
            <input className={classNames.textBox}
                   type={subType ?? "text"}
                   value={value ?? internalValue}
                   disabled={disabled}
                   placeholder={placeholder}
                   onInput={event => {
                       if (change) {
                           change(event.currentTarget.value)
                       } else {
                           setInternalValue(event.currentTarget.value)
                       }
                   }} />
        </label>
    )
}