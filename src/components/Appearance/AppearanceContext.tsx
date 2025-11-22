/*
 * Copyright (c) 2025 Axel "Foley" Karlsson and contributors.
 *
 * Use of this source code is governed by the MIT License, which you may
 * view in its entirety in the LICENSE file, found in the project's root directory.
 */

import { createContext } from "react"
import type { AppearanceMode, AppearanceOS, AppearanceTheme } from "./types"

export const AppearanceContext = createContext<{
    theme: AppearanceTheme
    mode: AppearanceMode
    setTheme: (theme: AppearanceTheme) => void
    setMode: (mode: AppearanceMode) => void
    _actualMode?: "light" | "dark"
    os: AppearanceOS
}>({
    theme: "aquatic",
    mode: "auto",

    setTheme: (): void => {
        throw Error("Not implemented")
    },

    setMode: (): void => {
        throw Error("Not implemented")
    },

    os: "Web"
})