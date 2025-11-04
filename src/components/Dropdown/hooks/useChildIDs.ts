/*
 * Copyright (c) 2025 Axel "Foley" Karlsson and contributors.
 *
 * Use of this source code is governed by the MIT License, which you may
 * view in its entirety in the LICENSE file, found in the project's root directory.
 */

import { Children, type ReactNode, useEffect, useState } from "react"

export function useChildIDs(children: ReactNode): Array<string> {

    const [ childIDs, setChildIDs ] = useState<Array<string>>([])

    const generateID = (): string => {
        return `${Date.now()}${Math.random()}`
            .replaceAll(/\./g, "")
    }

    useEffect(() => {
        const ids: Array<string> = []

        Children.forEach(children, () => {
            ids.push(generateID())
        })

        setChildIDs(ids)
    }, [ children ])

    return childIDs
}