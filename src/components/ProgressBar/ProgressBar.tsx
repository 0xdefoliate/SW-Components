/*
 * Copyright (c) 2025 Axel "Foley" Karlsson and contributors.
 *
 * Use of this source code is governed by the MIT License, which you may
 * view in its entirety in the LICENSE file, found in the project's root directory.
 */

"use strict"

import "./ProgressBar.scss"
import { useEffect, useRef } from "react"

export function ProgressBar({ progress }: { progress: number }) {

    const progressTrackRef = useRef<HTMLSpanElement>(null)

    // Prevent overflow of the progress bar.
    const _progress = progress > 100 ? 100 : progress

    useEffect(() => {
        if (!progressTrackRef.current) return

        type ProgressState = "nearly-empty" | "nearly-full" | "full" | "reset" | "one-percent"

        const setProgressState = (state: ProgressState) => {
            const classNames: ProgressState[] = [ "one-percent", "nearly-empty", "nearly-full", "full", "one-percent" ]

            progressTrackRef.current!.classList.remove(...classNames)

            if (state !== "reset") {
                progressTrackRef.current!.classList.add(state)
            }
        }

        if (_progress > 3 && _progress < 98.25) {
            setProgressState("reset")
        }

        if (_progress === 100) {
            setProgressState("full")
        } else if (_progress >= 98.25) {
            setProgressState("nearly-full")
        } else if (_progress > 1 && _progress <= 3) {
            setProgressState("nearly-empty")
        } else if (_progress <= 1 && _progress > 0) {
            setProgressState("one-percent")
        } else {
            setProgressState("reset")
        }
    }, [ _progress ])

    return (
        <div className="X-ProgressBar" title={`Progress: ${_progress}%`}>
            <span className="progress" ref={progressTrackRef} style={{ width: `${_progress}%` }}></span>
        </div>
    )
}