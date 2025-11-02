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
import { Dropdown } from "./components/Dropdown/components/Dropdown/Dropdown"
import { Option } from "./components/Dropdown/components/Option/Option"
import { Navbar } from "./components/Navbar/Navbar/Navbar"
import { NavItem } from "./components/Navbar/NavItem/NavItem"
import { ProgressBar } from "./components/ProgressBar/ProgressBar"
import { Radio } from "./components/Radio/Radio/Radio"
import { RadioGroup } from "./components/Radio/RadioGroup/RadioGroup"
import { Slider } from "./components/Slider/Slider"
import { Spacer } from "./components/Spacer/Spacer"
import { TextBox } from "./components/TextBox/TextBox"

import "./index.scss"

export interface BaseProps<T> {
    ref?: RefObject<T | null>
}

export interface FormControlProps<TElement, TValue, TChangeNewValue> extends BaseProps<TElement> {
    label: string
    value?: TValue
    change?: (newValue: TChangeNewValue) => void
    disabled?: boolean
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
    Navbar,
    NavItem,
    Option,
    RadioGroup
}
