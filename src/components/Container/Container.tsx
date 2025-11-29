/*
 * Copyright (c) 2025 Axel "Foley" Karlsson and contributors.
 *
 * Use of this source code is governed by the MIT License, which you may
 * view in its entirety in the LICENSE file, found in the project's root directory.
 */

import { type CSSProperties, type JSX, type ReactNode } from "react"

import "./Container.sass"
import { getClassName } from "@/internal/hooks/getClassName"

export interface ContainerProps {
    children: ReactNode
    vertical?: boolean
    centre?: boolean
    center?: boolean
    gap?: number
    paddingTop?: number
    paddingRight?: number
    paddingBottom?: number
    paddingLeft?: number
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
    paddingTop,
    paddingRight,
    paddingBottom,
    paddingLeft,
    padding,
    inline,
    width,
    minWidth,
    maxWidth,
    flex
}: ContainerProps): JSX.Element {

    const className = getClassName({
        base: "Container",
        appendConditionally: {
            vertical,
            // Order matters here. Don't change this to the bottom, even if it's tempting
            centre: centre || center,
            inline
        }
    })

    const style: CSSProperties = {
        gap: gap && `${gap}px`,
        paddingTop: paddingTop && `${paddingTop}px`,
        paddingRight: paddingRight && `${paddingRight}px`,
        paddingBottom: paddingBottom && `${paddingBottom}px`,
        paddingLeft: paddingLeft && `${paddingLeft}px`,
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