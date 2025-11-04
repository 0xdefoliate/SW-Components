/*
 * Copyright (c) 2025 Axel "Foley" Karlsson and contributors.
 *
 * Use of this source code is governed by the MIT License, which you may
 * view in its entirety in the LICENSE file, found in the project's root directory.
 */

import { type JSX, type ReactNode, useContext, useEffect, useState } from "react"
import { AppearanceContext } from "./AppearanceContext"
import type { AppearanceMode, AppearanceTheme } from "./types"

export interface AppearanceProps {
    children: ReactNode
    options?: {
        theme?: AppearanceTheme
        mode?: AppearanceMode
    }
}

export function Appearance({ children, options }: AppearanceProps): JSX.Element {

    const context = useContext(AppearanceContext)

    const [ theme, setTheme ] = useState<AppearanceTheme>(options?.theme ?? context.theme)
    const [ mode, setMode ] = useState<AppearanceMode>(options?.mode ?? context.mode)

    useEffect(() => {
        document.documentElement.dataset.theme = theme
    }, [ theme ])

    useEffect(() => {
        document.documentElement.dataset.mode = mode
    }, [ mode ])

    return (
        <AppearanceContext value={{ theme, mode, setTheme, setMode }}>
            {children}
        </AppearanceContext>
    )
}