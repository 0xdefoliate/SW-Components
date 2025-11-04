/*
 * Copyright (c) 2025 Axel "Foley" Karlsson and contributors.
 *
 * Use of this source code is governed by the MIT License, which you may
 * view in its entirety in the LICENSE file, found in the project's root directory.
 */

export function getClassName(arg: {
    base: string
    appendConditionally?: Record<string, string | number | boolean | null | undefined>
} | string): string {

    let base: string | undefined
    let conditions: Record<string, string | number | boolean | null | undefined> | undefined

    if (typeof arg === "string") {
        base = arg
    } else {
        base = arg.base
        conditions = arg.appendConditionally
    }

    let className = `X-${base}`

    if (!conditions) {
        return className
    }

    for (const [ key, value ] of Object.entries(conditions)) {
        if (!value) {
            continue
        }

        className += ` ${key}`
    }

    return className
}