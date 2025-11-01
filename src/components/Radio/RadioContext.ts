/*
 * Copyright (c) 2025 Axel "Foley" Karlsson and contributors.
 *
 * Use of this source code is governed by the MIT License, which you may
 * view in its entirety in the LICENSE file, found in the project's root directory.
 */

import { createContext } from "react"

export type TRadioContext = {
    name?: string
    change?: (arg: { key: string, checked: boolean }) => void
}

export const RadioContext = createContext<TRadioContext>({})