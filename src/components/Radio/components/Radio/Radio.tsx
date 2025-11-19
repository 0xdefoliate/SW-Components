/*
 * Copyright (c) 2025 Axel "Foley" Karlsson and contributors.
 *
 * Use of this source code is governed by the MIT License, which you may
 * view in its entirety in the LICENSE file, found in the project's root directory.
 */

import { type JSX, useContext, useId, useRef } from "react"

import "./Radio.scss"
import { useClassName } from "../../../../internal/hooks/useClassName"
import { RadioContext } from "../../RadioContext"

export interface RadioProps {
    label: string
    value?: string
    disabled?: boolean
    defaultChecked?: boolean
}

export function Radio({ label, value, disabled, defaultChecked }: RadioProps): JSX.Element {

    const { name, change } = useContext(RadioContext)

    // This ref is used if the consumer hasn't provided their own
    const ref = useRef<HTMLInputElement>(null)

    const radioId = useId()
    const labelId = useId()

    const classNames = {
        radio: useClassName("Radio"),
        wrapper: useClassName("Radio-Wrapper"),
    }

    return (
        <div className={classNames.wrapper}>
            <input className={classNames.radio}
                   type="radio"
                   name={name}
                   value={value}
                   id={radioId}
                   aria-labelledby={labelId}
                   aria-disabled={disabled}
                   disabled={disabled}
                   ref={ref}
                   defaultChecked={defaultChecked}
                   onChange={change && ((): void => {
                       const radio = ref?.current

                       if (!radio) {
                           throw new Error("`ref` pointing to this element is undefined.")
                       }

                       if (!value) {
                           throw new Error("Value is undefined. Please provide a value property to this component.")
                       }

                       change({ key: value, checked: radio.checked })
                   })}
            />

            <label htmlFor={radioId} id={labelId}>
                {label}
            </label>
        </div>
    )
}