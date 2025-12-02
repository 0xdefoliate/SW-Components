/*
 * Copyright (c) 2025 Axel "Foley" Karlsson and contributors.
 *
 * Use of this source code is governed by the MIT License, which you may
 * view in its entirety in the LICENSE file, found in the project's root directory.
 */

import "./ProgressBar.sass"
import { type JSX, useRef } from "react"
import { getClassName } from "@/internal/hooks/getClassName"

export function ProgressBar({ progress, indeterminate }: { progress?: number, indeterminate?: boolean }): JSX.Element {

    const progressTrackRef = useRef<HTMLSpanElement>(null)

    // Prevent overflow of the progress bar and other issues.
    let _progress: number = progress ?? 0

    if (_progress > 100) {
        _progress = 100
    } else if (_progress < 0) {
        _progress = 0
    }

    const className = getClassName({
        base: "ProgressBar",
        appendConditionally: {
            indeterminate
        }
    })

    // Progress is always a percentage, so just divide it by 100.
    const progressDecimal = _progress / 100

    return (
        <div className={className}
             title={indeterminate ? "" : `Progress: ${_progress}%`}
             role="progressbar"
             aria-valuemin={0}
             aria-valuemax={1}
             aria-valuenow={progressDecimal}>
            <span className="progress" ref={progressTrackRef} style={{ width: `${_progress}%` }}>
                <div className="label-wrapper">
                <span className="label">
                    {!indeterminate && (
                        <>
                            {_progress}%
                        </>
                    )}

                </span>
            </div>
            </span>
        </div>
    )
}