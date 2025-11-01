/*
 * Copyright (c) 2025 Axel "Foley" Karlsson and contributors.
 *
 * Use of this source code is governed by the MIT License, which you may
 * view in its entirety in the LICENSE file, found in the project's root directory.
 */

"use strict"

import "./Slider.scss"
import { useEffect, useRef, useState } from "react"
import type { FormControlProps } from "../../index"

export interface SliderProps extends FormControlProps<HTMLInputElement, number, number> {
    range: [ number, number ]
    step?: number
}

export function Slider({ label, range, change, value, step, ref, disabled }: SliderProps) {

    const sliderRef = useRef<HTMLInputElement>(null)

    const [ internalValue, setInternalValue ] = useState<number>(range[0])

    useEffect(() => {
        const slider = ref?.current || sliderRef.current

        slider?.style.setProperty("--cursor-type", "grab")

        if (disabled) {
            slider?.style.setProperty("--cursor-type", "not-allowed")
        }

        return () => {
            slider?.style.removeProperty("--cursor-type")
        }
    }, [ disabled, ref ])

    const injectValuesIntoText = (values: { [key: string]: string | number | undefined }, text: string) => {
        let newText = text

        for (const [ key, value ] of Object.entries(values)) {
            newText = newText.replaceAll(key, String(value))
        }

        return newText
    }

    return (
        <label className="X-Slider-Wrapper">
            <div className="X-Slider-Label">
                {injectValuesIntoText({
                    $progress: value ?? internalValue,
                    $min: range[0],
                    $max: range[1]
                }, label as string)}
            </div>
            <input className="X-Slider"
                // TODO: DRY up these handlers
                   onMouseDown={() => {
                       const slider = ref?.current || sliderRef.current
                       if (!disabled) {
                           slider?.style.setProperty("--cursor-type", "grabbing")
                       } else {
                           slider?.style.setProperty("--cursor-type", "not-allowed")
                       }
                   }}

                   onMouseUp={() => {
                       const slider = ref?.current || sliderRef.current
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
                   ref={ref || sliderRef}
                   role="slider"
            />
        </label>
    )
}