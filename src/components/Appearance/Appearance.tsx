/*
 * Copyright (c) 2025 Axel "Foley" Karlsson and contributors.
 *
 * Use of this source code is governed by the MIT License, which you may
 * view in its entirety in the LICENSE file, found in the project's root directory.
 */

import { type JSX, type ReactNode, useContext, useEffect, useRef, useState } from "react"
import { AppearanceContext } from "./AppearanceContext"
import { getOS } from "./helpers/getOS"
import type { AppearanceMode, AppearanceOS, AppearanceTheme } from "./types"

export interface AppearanceProps {
    children: ReactNode
    options?: {
        theme?: AppearanceTheme
        mode?: AppearanceMode,
        os?: AppearanceOS
    }
}

export function Appearance({ children, options }: AppearanceProps): JSX.Element {

    const isDarkMediaQueryRef = useRef(matchMedia("(prefers-color-scheme: dark)"))

    const osRef = useRef<AppearanceOS>(options?.os ?? getOS())

    const context = useContext(AppearanceContext)

    const initialMode = options?.mode ?? context.mode

    const [ theme, setTheme ] = useState<AppearanceTheme>(options?.theme ?? context.theme)

    const [ mode, setMode ] = useState<AppearanceMode>(initialMode)
    const [ internalMode, setInternalMode ] = useState<"light" | "dark">(
        (initialMode === "auto" && isDarkMediaQueryRef.current)
            ? (isDarkMediaQueryRef.current.matches && "dark") || "light"
            : "light"
    )

    useEffect(() => {
        for (const [key, value] of Object.entries({ theme, os: osRef.current ?? "Web", mode: internalMode })) {
            document.body.dataset[key as string] = value as string
            document.documentElement.dataset[key as string] = value as string
        }
    }, [ theme, internalMode ])

    useEffect(() => {

        if (!isDarkMediaQueryRef.current) {
            return
        }

        if (mode !== "auto") {
            setInternalMode(mode)
            return
        }

        const isDarkMediaQuery = isDarkMediaQueryRef.current

        // Immediately synchronise the actual mode without waiting for the system to change.
        setInternalMode(isDarkMediaQuery.matches ? "dark" : "light")

        const handleIsDark = (e: MediaQueryListEvent): void => {
            if (e.matches) {
                setInternalMode("dark")
                return
            }

            setInternalMode("light")
        }

        isDarkMediaQuery.addEventListener("change", handleIsDark)

        return (): void => {
            isDarkMediaQuery.removeEventListener("change", handleIsDark)
        }
    }, [ mode ])

    return (
        <AppearanceContext value={{ theme, mode, setTheme, setMode, _actualMode: internalMode, os: osRef.current ?? "Web" }}>
            {children}
        </AppearanceContext>
    )
}