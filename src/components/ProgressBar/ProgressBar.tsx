/*
 * Copyright (c) 2025 Axel "Foley" Karlsson and contributors.
 *
 * Use of this source code is governed by the MIT License, which you may
 * view in its entirety in the LICENSE file, found in the project's root directory.
 */

import "./ProgressBar.sass"
import { type JSX, useEffect, useRef } from "react"
import { getClassName } from "../../internal/hooks/getClassName"

export function ProgressBar({ progress }: { progress: number }): JSX.Element {

    const progressTrackRef = useRef<HTMLSpanElement>(null)

    // Prevent overflow of the progress bar.
    const _progress = progress > 100 ? 100 : progress

    // TODO: Remove this redundant effect
    useEffect(() => {
        if (!progressTrackRef.current) {
            return
        }

        type ProgressState = "nearly-empty" | "nearly-full" | "full" | "reset" | "one-percent"

        const setProgressState = (state: ProgressState): void => {

            if (!progressTrackRef.current) {
                return
            }

            const classNames: Array<ProgressState> = [ "one-percent", "nearly-empty", "nearly-full", "full", "one-percent" ]

            progressTrackRef.current.classList.remove(...classNames)

            if (state !== "reset") {
                progressTrackRef.current.classList.add(state)
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

    const className = getClassName("ProgressBar")

    return (
        <div className={className} title={`Progress: ${_progress}%`}>
            <span className="progress" ref={progressTrackRef} style={{ width: `${_progress}%` }}></span>
        </div>
    )
}