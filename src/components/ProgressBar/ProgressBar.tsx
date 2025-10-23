/*
 * Copyright (c) 2025 Axel "Foley" Karlsson and contributors.
 *
 * Use of this source code is governed by the MIT License, which you may
 * view in its entirety in the LICENSE file, found in the project's root directory.
 */

"use strict"

export function ProgressBar({ progress }: { progress: number }) {

    // Prevent overflow of the progress bar.
    const _progress = progress > 100 ? 100 : progress

    return (
        <div className="X-ProgressBar">
            <span className="progress" style={{ width: `${_progress}%` }}></span>
        </div>
    )
}