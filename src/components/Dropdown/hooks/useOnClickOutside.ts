/*
 * Copyright (c) 2026 Axel "Foley" Karlsson and contributors.
 *
 * Use of this source code is governed by the MIT License, which you may
 * view in its entirety in the LICENSE file, found in the project's root directory.
 */

import { type RefObject, useEffect } from "react"

export function useOnClickOutside<TRefButton extends HTMLElement, TRefOptions extends HTMLElement>(
    dropdownButtonRef: RefObject<TRefButton | null>,
    dropdownOptionsRef: RefObject<TRefOptions | null>,
    callback: () => void
): void {
    useEffect(() => {
        const onClickOutside = (event: MouseEvent): void => {
            if (!dropdownButtonRef.current?.contains(event.target as HTMLElement) &&
                !dropdownOptionsRef.current?.contains(event.target as HTMLElement)) {
                callback()
            }
        }

        document.addEventListener("click", onClickOutside)

        return (): void => {
            document.removeEventListener("click", onClickOutside)
        }
    }, [ callback, dropdownOptionsRef, dropdownButtonRef ])
}