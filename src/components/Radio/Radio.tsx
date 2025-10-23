/*
 * Copyright (c) 2025 Axel "Foley" Karlsson and contributors.
 *
 * Use of this source code is governed by the MIT License, which you may
 * view in its entirety in the LICENSE file, found in the project's root directory.
 */

"use strict"

import { useId } from "react"
import { Container } from "../Container/Container.js"

export function Radio({ label, name, value }: { label: string, name: string; value: string }) {

    const radioId = useId()
    const labelId = useId()

    return (
        <Container centre gap={4}>
            <input className="X-Radio"
                   type="radio"
                   name={name}
                   value={value}
                   id={radioId}
                   aria-label={label}
                   aria-labelledby={labelId}
            />

            <label htmlFor={radioId} id={labelId}>
                {label}
            </label>
        </Container>
    )
}