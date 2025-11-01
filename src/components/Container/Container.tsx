/*
 * Copyright (c) 2025 Axel "Foley" Karlsson and contributors.
 *
 * Use of this source code is governed by the MIT License, which you may
 * view in its entirety in the LICENSE file, found in the project's root directory.
 */

"use strict"

import { type CSSProperties, type ReactNode } from "react"

import "./Container.scss"

export interface ContainerProps {
    children: ReactNode
    vertical?: boolean
    centre?: boolean
    center?: boolean
    gap?: number
    padding?: number
    inline?: boolean
    width?: number | string
    minWidth?: number | string
    maxWidth?: number | string
    flex?: number | string
}

export function Container({
    children,
    vertical,
    centre,
    center,
    gap,
    padding,
    inline,
    width,
    minWidth,
    maxWidth,
    flex
}: ContainerProps) {

    let className = "X-Container"

    if (vertical) {
        className += " vertical"
    }

    if (centre || center) {
        className += " centre"
    }

    if (inline) {
        className += " inline"
    }

    const style: CSSProperties = {
        gap: gap && `${gap}px`,
        padding: padding && `${padding}px`,
        width: "100%", // <-- Default value
        minWidth,
        maxWidth,
        flex
    }

    if (width) {
        style.width = typeof width === "number" ? `${width}px` : width.toString()
    }

    if (!maxWidth) {
        style.maxWidth = style.width
    }

    return (
        <div className={className} {...({ style })}>
            {children}
        </div>
    )
}