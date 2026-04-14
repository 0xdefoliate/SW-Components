/*
 * Copyright (c) 2026 Axel "Foley" Karlsson and contributors.
 *
 * Use of this source code is governed by the MIT License, which you may
 * view in its entirety in the LICENSE file, found in the project's root directory.
 */

import "./Slider.sass"
import { type JSX, useEffect, useRef, useState } from "react"
import { getClassName } from "../../internal/hooks/getClassName"
import type { FormControlProps } from "../types"

export interface SliderProps extends FormControlProps<number, number> {
    range: [ number, number ]
    step?: number
}

export function Slider({ label, range, change, value, step, disabled }: SliderProps): JSX.Element {

    const ref = useRef<HTMLInputElement>(null)

    const [ internalValue, setInternalValue ] = useState<number>(range[0])

    useEffect(() => {
        const slider = ref?.current

        slider?.style.setProperty("--cursor-type", "grab")

        if (disabled) {
            slider?.style.setProperty("--cursor-type", "not-allowed")
        }

        return (): void => {
            slider?.style.removeProperty("--cursor-type")
        }
    }, [ disabled, ref ])

    const classNames = {
        wrapper: getClassName("Slider-Wrapper"),
        label: getClassName("Slider-Label"),
        slider: getClassName("Slider")
    }

    return (
        <label className={classNames.wrapper}>
            <div className={classNames.label}>
                {label}
            </div>
            <input className={classNames.slider}
                // TODO: DRY up these handlers
                   onMouseDown={() => {
                       const slider = ref?.current

                       if (!disabled) {
                           slider?.style.setProperty("--cursor-type", "grabbing")
                       } else {
                           slider?.style.setProperty("--cursor-type", "not-allowed")
                       }
                   }}

                   onMouseUp={() => {
                       const slider = ref?.current

                       if (!disabled) {
                           slider?.style.setProperty("--cursor-type", "grab")
                       } else {
                           slider?.style.setProperty("--cursor-type", "not-allowed")
                       }
                   }}

                   type="range"
                   min={range[0]}
                   max={range[1]}
                   value={value ?? internalValue}
                   step={step || 1}
                   onChange={e => {
                       if (change) {
                           change(parseInt(e.currentTarget.value))
                       } else {
                           setInternalValue(parseInt(e.currentTarget.value))
                       }
                   }}
                   disabled={disabled}
                   ref={ref}
                   role="slider"
            />
        </label>
    )
}