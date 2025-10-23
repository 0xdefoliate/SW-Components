/*
 * Copyright (c) 2025 Axel "Foley" Karlsson and contributors.
 *
 * Use of this source code is governed by the MIT License, which you may
 * view in its entirety in the LICENSE file, found in the project's root directory.
 */

"use strict"

import type { BaseProps } from "../../index.js"

import "./TextBox.css"

export interface TextBoxProps extends BaseProps<HTMLInputElement> {
    value: string,
    onInput: (newValue: string) => void,
    subType?: "email" | "search" | "password" | "tel" | "url"
}

export function TextBox({ label, value, onInput, subType }: TextBoxProps) {
    return (
        <label>
            <div>
                {label}
            </div>
            <input className="X-TextInput"
                   type={subType ?? "text"}
                   value={value}
                   onInput={(event) => onInput(event.currentTarget.value)} />
        </label>
    )
}