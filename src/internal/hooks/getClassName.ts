/*
 * Copyright (c) 2026 Axel "Foley" Karlsson and contributors.
 *
 * Use of this source code is governed by the MIT License, which you may
 * view in its entirety in the LICENSE file, found in the project's root directory.
 */

import { useContext } from "react"
import { AppearanceContext } from "@/components/Appearance/AppearanceContext"
import { _componentPrefix } from "@/index"
import type { UseClassNameBasicOverload, UseClassNameBooleanish, UseClassNameComplexOverload } from ".."

export function getClassName(options: UseClassNameComplexOverload): string
export function getClassName(className: UseClassNameBasicOverload): string
export function getClassName(arg: UseClassNameComplexOverload | UseClassNameBasicOverload): string {

    let base: string | undefined
    let conditions: Record<string, UseClassNameBooleanish> | undefined
    let extensions: Record<string, UseClassNameBooleanish> | undefined

    if (typeof arg === "string") {
        base = arg
    } else {
        base = arg.base
        conditions = arg.appendConditionally
        extensions = arg.extensions
    }

    let className = `${_componentPrefix}-${base}`

    if (extensions) {
        for (const [ key, value ] of Object.entries(extensions) ) {
            if (!value) {
                continue
            }

            className += `--${key}`
        }
    } 

    if (conditions) {
        for (const [ key, value ] of Object.entries(conditions)) {
            if (!value) {
                continue
            }

            className += ` ${key}`
        }
    }

    return className
}