/*
 * Copyright (c) 2025 Axel "Foley" Karlsson and contributors.
 *
 * Use of this source code is governed by the MIT License, which you may
 * view in its entirety in the LICENSE file, found in the project's root directory.
 */

"use strict"

import {
    Children,
    cloneElement,
    type HTMLAttributes,
    type ReactElement,
    type ReactNode,
    type RefObject,
    useEffect,
    useId,
    useRef,
    useState
} from "react"

import "./Dropdown.scss"
import { DropdownContext } from "../../DropdownContext"
import { useChildIDs } from "../../hooks/useChildIDs"
import { useOnClickOutside } from "../../hooks/useOnClickOutside"

export interface DropdownProps {
    label: string,
    children: ReactNode,
    disabled?: boolean
}

export function Dropdown({ label, children, disabled }: DropdownProps) {

    const [ active, setActive ] = useState<boolean>(false)
    const [ selectedOption, setSelectedOption ] = useState<HTMLLIElement | null>(null)
    const [ focusedOption, setFocusedOption ] = useState<HTMLLIElement | null>(null)

    const dropdownRef = useRef<HTMLDivElement>(null)
    const dropdownButtonRef = useRef<HTMLDivElement>(null)
    const dropdownOptionsRef = useRef<HTMLUListElement>(null)

    const dropdownPreviewRef = useRef<HTMLSpanElement>(null)

    // Close the dropdown list if the user clicks outside the dropdown
    useOnClickOutside(dropdownButtonRef, dropdownOptionsRef, () => {
        setActive(false)
    })

    const childIDs = useChildIDs(children)

    const labelID = useId()
    const dropdownID = useId()

    const handleOptionSelected = (
        ref: RefObject<HTMLLIElement | null>,
        selectedByDefault?: boolean
    ) => {
        setSelectedOption(ref.current)

        if (dropdownPreviewRef.current && ref.current) {
            dropdownPreviewRef.current.textContent = ref.current.innerText || ""
        }

        // The `selectedByDefault` option indicates that the child (the `Option` component)
        // is calling explicitly calling this function prematurely because the library user
        // has set the `Option.selected` prop on the `Option`, which means it has to reflect
        // that in the parent.
        if (selectedByDefault) {
            return
        }

        setActive(false)
        dropdownRef.current?.focus()
    }

    const handleKeyDown = (key: string, preventDefault: () => void) => {
        if (active) {
            switch (key) {
                case "Escape":
                    setFocusedOption(selectedOption)
                    setActive(false)
                    dropdownRef.current?.focus()
                    return
                case "Tab":
                    return preventDefault()
                case "ArrowUp":
                case "ArrowDown":
                    break
                default:
                    return
            }
        }

        // Activate the Dropdown (i.e. show the dropdown items) when either Arrow Up or Arrow Down
        // is pressed and set the focus to the currently selected option
        if ((key === "ArrowUp" || key === "ArrowDown") && !active) {
            setActive(true)
            setFocusedOption(selectedOption)
            return
        }

        // This is the dropdown option which the user expects will get
        // focused next, depending on the key they pressed.
        let destinationOption: HTMLLIElement | null = null

        switch (key) {
            case "ArrowUp":
                destinationOption = focusedOption?.previousElementSibling as HTMLLIElement
                break
            case "ArrowDown":
                destinationOption = focusedOption?.nextElementSibling as HTMLLIElement
                break
            default:
                return
        }

        // Don't move focus to next or previous options if they don't exist
        // (i.e. if the user is trying to use `ArrowDown` when located at the last dropdown option)
        if (focusedOption) {
            if (key === "ArrowDown" && !focusedOption?.nextElementSibling) {
                return
            }

            if (key === "ArrowUp" && !focusedOption?.previousElementSibling) {
                return
            }
        }

        if (!destinationOption) {
            destinationOption = selectedOption
        }

        setFocusedOption(destinationOption)
    }

    // This effect makes sure that, once the Dropdown is activated, the option which is currently
    // selected (`selectedOption`) is actually focused, which isn't possible to trigger inside the event handler.
    // So instead, we focus it once the `active` stateful variable is changed.
    useEffect(() => {
        selectedOption?.focus()

        // As soon as the dropdown is closed, the focus should automatically be set
        // to the currently selected option.
        //
        // This is done to avoid a bug where, when the focus is at the last option, and the dropdown is then deactivated,
        // and finally the user reactivates the dropdown with the **mouse pointer** and then uses Arrow Down, the dropdown won't
        // navigate to the option below, since it, without this fix, believes it's still at the last option of the dropdown,
        // thus the dropdown thinks it can't move one step down.
        if (!active) {
            setFocusedOption(selectedOption)
        }
    }, [ selectedOption, active ])

    // Ensure that, when the source of truth (focusedOption state) is updated,
    // the actual focus follows suit.
    useEffect(() => {
        focusedOption?.focus()
    }, [ focusedOption ])

    // Select the first option by default if the user hasn't explicitly provided a default
    // option. Also, this effect will set the preview text as well, otherwise it'd be empty!
    useEffect(() => {
        if (!selectedOption && dropdownOptionsRef.current) {

            // Will change this in the future to check the type instead of just assuming...
            const defaultOption = dropdownOptionsRef.current.firstElementChild as HTMLLIElement

            setSelectedOption(defaultOption)

            if (dropdownPreviewRef.current) {
                dropdownPreviewRef.current.textContent = defaultOption.innerText || ""
            }
        }
    }, [ selectedOption ])

    return (
        <div style={{
            display: "flex",
            flexDirection: "column"
        }}>
            <label id={labelID}
                   htmlFor={dropdownID}>
                {label}
            </label>

            <div className="X-Dropdown"
                 id={dropdownID}
                 role="listbox"
                 aria-roledescription="Dropdown"
                 aria-activedescendant={selectedOption?.id}
                 aria-labelledby={labelID}
                 aria-disabled={disabled}
                 ref={dropdownRef}
                // The dropdown should not be tabbable if it's disabled
                 tabIndex={disabled ? undefined : 0}
                 onKeyDown={e => {
                     if (disabled) {
                         return
                     }

                     handleKeyDown(e.key, () => e.preventDefault())
                 }}>

                <div ref={dropdownButtonRef}
                     role="button"
                     aria-label="Toggle Dropdown"
                     onClick={() => !disabled && setActive(!active)}>

                    <span className="text" ref={dropdownPreviewRef}></span>

                    <span className="chevron-icon" aria-hidden="true">
                        &#x25BE;
                    </span>
                </div>

                <ul className="X-Dropdown-Options"
                    {...(!active && { style: { display: "none" } })}
                    ref={dropdownOptionsRef}>
                    <DropdownContext value={{
                        handleOptionSelected,
                        isSelected: (id: string): boolean => selectedOption?.id === id
                    }}>
                        {Children.map(children, (child, index) =>
                            cloneElement(child as ReactElement<HTMLAttributes<HTMLElement>>, {
                                id: childIDs[index]
                            })
                        )}
                    </DropdownContext>
                </ul>
            </div>
        </div>
    )
}