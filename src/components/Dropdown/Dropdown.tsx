/*
 * Copyright (c) 2025 Axel "Foley" Karlsson and contributors.
 *
 * Use of this source code is governed by the MIT License, which you may
 * view in its entirety in the LICENSE file, found in the project's root directory.
 */

"use strict"

import { type ReactNode, useEffect, useId, useRef, useState } from "react"
import type { BaseProps } from "../../index.js"
import { Container } from "../Container/Container.js"

import "./Dropdown.css"

interface DropdownItem {
    text: string
    value: string
}

function DropdownOption({ children, onClick }: { children: ReactNode, onClick?: () => void }) {
    return (
        <div className="X-Dropdown-Option"
             tabIndex={0}
             onClick={() => onClick && onClick()}
             onKeyDown={e => e.key == "Enter" && onClick && onClick && onClick()}>
            {children}
        </div>
    )
}

export interface DropdownProps extends BaseProps<HTMLDivElement> {
    items: DropdownItem[],
}

export function Dropdown({ label, items }: DropdownProps) {

    const [ active, setActive ] = useState<boolean>(false)
    const [ selectedItem, setSelectedItem ] = useState<DropdownItem>(items[0] as DropdownItem)

    const dropdownButtonRef = useRef<HTMLDivElement>(null)
    const dropdownOptionsRef = useRef<HTMLUListElement>(null)

    useEffect(() => {
        const onClickOutside = (event: MouseEvent) => {
            if (dropdownButtonRef.current &&
                !dropdownButtonRef.current.contains(event.target as HTMLElement) &&
                !dropdownOptionsRef.current?.contains(event.target as HTMLElement)) {
                setActive(false)
            }
        }

        document.addEventListener("click", onClickOutside)

        return () => document.removeEventListener("click", onClickOutside)
    }, [])

    const labelId = useId()
    const dropdownId = useId()

    return (
        <Container vertical gap={0}>
            <label
                id={labelId}
                htmlFor={dropdownId}>
                {label}
            </label>

            <div className="X-Dropdown"
                 id={dropdownId}
                 tabIndex={0}
                 onKeyDown={e => e.key === "Enter" && setActive(!active)}
                 aria-label={label}
                 aria-labelledby={labelId}>

                <div ref={dropdownButtonRef} onClick={() => setActive(!active)}>
                    <span className="text">
                        {selectedItem.text}
                    </span>

                    <span className="chevron-icon">
                        &#x25BE;
                    </span>
                </div>

                {active && (
                    <ul className="X-Dropdown-Options" ref={dropdownOptionsRef}>
                        {items.map((item, index) => (
                            <li key={index}>
                                <DropdownOption onClick={() => {
                                    setSelectedItem(item)
                                    setActive(false)
                                }}>
                                    {item.text}
                                </DropdownOption>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </Container>
    )
}