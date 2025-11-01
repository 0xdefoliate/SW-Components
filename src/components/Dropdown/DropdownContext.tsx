/*
 * Copyright (c) 2025 Axel "Foley" Karlsson and contributors.
 *
 * Use of this source code is governed by the MIT License, which you may
 * view in its entirety in the LICENSE file, found in the project's root directory.
 */

import { createContext, type RefObject } from "react"

export type TDropdownContext = {
    handleOptionSelected: (ref: RefObject<HTMLLIElement | null>, selectedByDefault?: boolean) => void
    isSelected: (id: string) => boolean
}

export const DropdownContext = createContext<TDropdownContext | null>(null)
