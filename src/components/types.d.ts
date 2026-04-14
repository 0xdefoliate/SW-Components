/*
 * Copyright (c) 2026 Axel "Foley" Karlsson and contributors.
 *
 * Use of this source code is governed by the MIT License, which you may
 * view in its entirety in the LICENSE file, found in the project's root directory.
 */

export interface FormControlProps<TValue, TChangeNewValue> {
    label: string
    value?: TValue
    change?: (newValue: TChangeNewValue) => void
    disabled?: boolean
}
