/*
 * Copyright (c) 2025 Axel "Foley" Karlsson and contributors.
 *
 * Use of this source code is governed by the MIT License, which you may
 * view in its entirety in the LICENSE file, found in the project's root directory.
 */

"use strict"

export interface SliderProps {
    label: string
    range: [ number, number ]
    onChange: (newValue: number) => void
    value?: number
    step?: number
}

export function Slider({ label, range, onChange, value, step }: SliderProps) {
    return (
        <label>
            <div>
                {label}
            </div>
            <input className="X-Slider"
                   type="range"
                   min={range[0]}
                   max={range[1]}
                   value={value || range[0]}
                   step={step || 1}
                   onChange={e => onChange(parseInt(e.currentTarget.value))}
                   aria-label={label}
                   role="slider"
            />
        </label>
    )
}