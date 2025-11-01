/*
 * Copyright (c) 2025 Axel "Foley" Karlsson and contributors.
 *
 * Use of this source code is governed by the MIT License, which you may
 * view in its entirety in the LICENSE file, found in the project's root directory.
 */

import { type RefObject, useEffect } from "react"

export const useOnClickOutside = <TRefButton extends HTMLElement, TRefOptions extends HTMLElement>(
    dropdownButtonRef: RefObject<TRefButton | null>,
    dropdownOptionsRef: RefObject<TRefOptions | null>,
    callback: () => void
) => {
    useEffect(() => {
        const onClickOutside = (event: MouseEvent) => {
            if (!dropdownButtonRef.current?.contains(event.target as HTMLElement) &&
                !dropdownOptionsRef.current?.contains(event.target as HTMLElement)) {
                callback()
            }
        }

        document.addEventListener("click", onClickOutside)

        return () => document.removeEventListener("click", onClickOutside)
    }, [ callback, dropdownOptionsRef, dropdownButtonRef ])
}