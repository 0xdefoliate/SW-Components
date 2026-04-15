/*
 * Copyright (c) 2026 Axel "Foley" Karlsson and contributors.
 *
 * Use of this source code is governed by the MIT License, which you may
 * view in its entirety in the LICENSE file, found in the project's root directory.
 */

import { _componentPrefix } from "@/index"
import { type JSX, useContext, useEffect, useRef, useState } from "react"
import { getClassName } from "@/internal/hooks/getClassName"
import { DropdownContext } from "../../DropdownContext"

import "./Option.sass"

export function Option({ text, value, id }: {
    text: string
    value?: string
    //selected?: ((value?: string) => boolean) | boolean
    id?: string
}): JSX.Element {
    const context = useContext(DropdownContext)

    const [ hasToldParentOptionIsSelected, setHasToldParentOptionIsSelected ] = useState<boolean>(false)

    if (!context) {
        throw Error("Value `context` needs to be defined")
    }

    const ref = useRef<HTMLLIElement>(null)

    const { handleOptionSelected, isSelected, chosen } = context

    useEffect(() => {
        // Choose this dropdown `Option` if the consumer wants this to be selected by default.
        if (!hasToldParentOptionIsSelected && id && chosen(value ?? "")) {
            handleOptionSelected(ref, true)

            // This prevents a bug which occurs when the following occurs:
            //
            // 1) An `Option` has the `selected` prop set to `true`.
            // 2) The user tries to select something which is not the default
            //
            // The solution is to keep track of whether this effect has been run, and
            // block it from re-running.
            setHasToldParentOptionIsSelected(true)
        }
    }, [ handleOptionSelected, isSelected, hasToldParentOptionIsSelected, chosen, id, value ])

    // This variable is different from the one without underscore
    // since this variable's value is a response from the parent
    // whether this `Option` currently is selected, and not that
    // the library consumer intends to have this as default.
    //
    // (I should probably change the name of the `isSelected` function, but oh well)
    const _selected = isSelected(id ?? "")

    const classNames = {
        option: getClassName("Dropdown-Option"),
        checkIndicator: getClassName("Dropdown-Option-Check-Indicator"),
    }

    return (
        <li className={classNames.option}
            id={id}
            ref={ref}
            onClick={() => {
                handleOptionSelected(ref)
            }}
            onKeyDown={e => {
                if (e.key === "Enter") {
                    handleOptionSelected(ref)
                }
            }}
            role="option"
            aria-selected={_selected}
            data-value={value}
            tabIndex={-1}>
            <span className={classNames.checkIndicator} aria-hidden="true" data-checked={_selected}></span>
            {text}
        </li>
    )
}