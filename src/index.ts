/*
 * Copyright (c) 2026 Axel "Foley" Karlsson and contributors.
 *
 * Use of this source code is governed by the MIT License, which you may
 * view in its entirety in the LICENSE file, found in the project's root directory.
 */

export type { RefObject } from "react"

export { Button } from "./components/Button/Button"
export { Checkbox } from "./components/Checkbox/Checkbox"
export { Container } from "./components/Container/Container"
export { Dropdown } from "./components/Dropdown/components/Dropdown/Dropdown"
export { Option } from "./components/Dropdown/components/Option/Option"
export { Navbar } from "./components/Navbar/components/Navbar/Navbar"
export { NavItem } from "./components/Navbar/components/NavItem/NavItem"
export { ProgressBar } from "./components/ProgressBar/ProgressBar"
export { Radio } from "./components/Radio/components/Radio/Radio"
export { RadioGroup } from "./components/Radio/components/RadioGroup/RadioGroup"
export { Slider } from "./components/Slider/Slider"
export { Spacer } from "./components/Spacer/Spacer"
export { TextBox } from "./components/TextBox/TextBox"
export { Group } from "./components/Group/Group"
export { Appearance } from "./components/Appearance/Appearance"

export type * from "./components/types"

export const _componentPrefix = import.meta.env.VITE_COMPONENT_PREFIX

import "./index.sass"
