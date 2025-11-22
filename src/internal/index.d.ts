/*
 * Copyright (c) 2025 Axel "Foley" Karlsson and contributors.
 *
 * Use of this source code is governed by the MIT License, which you may
 * view in its entirety in the LICENSE file, found in the project's root directory.
 */

export type UseClassNameBasicOverload = string

export type UseClassNameBooleanish = string | number | boolean | null | undefined

export interface UseClassNameComplexOverload {
    base: string
    appendConditionally?: Record<string, UseClassNameBooleanish>
    extensions?: Record<string, UseClassNameBooleanish>
}
