/*
 * Copyright (c) 2025 Axel "Foley" Karlsson and contributors.
 *
 * Use of this source code is governed by the MIT License, which you may
 * view in its entirety in the LICENSE file, found in the project's root directory.
 */

"use strict"

import type { RefObject } from "react"

import { Button } from "./components/Button/Button"
import { Checkbox } from "./components/Checkbox/Checkbox"
import { Container } from "./components/Container/Container"
import { Dropdown } from "./components/Dropdown/Dropdown"
import { Navbar } from "./components/Navbar/Navbar/Navbar"
import { ProgressBar } from "./components/ProgressBar/ProgressBar"
import { Radio } from "./components/Radio/Radio"
import { Slider } from "./components/Slider/Slider"
import { Spacer } from "./components/Spacer/Spacer"
import { TextBox } from "./components/TextBox/TextBox"

import "./index.css"

export interface BaseProps<T> {
    ref?: RefObject<T | null>
    label?: string
}

export {
    Button,
    Checkbox,
    Container,
    Dropdown,
    ProgressBar,
    Radio,
    Slider,
    Spacer,
    TextBox,
    Navbar
}
