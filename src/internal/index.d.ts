/*
 * Copyright (c) 2025 Axel "Foley" Karlsson and contributors.
 *
 * Use of this source code is governed by the MIT License, which you may
 * view in its entirety in the LICENSE file, found in the project's root directory.
 */

export type UseClassNameBasicOverload = string

export interface UseClassNameComplexOverload {
    base: string
    appendConditionally?: Record<string, string | number | boolean | null | undefined>
}