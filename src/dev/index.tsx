/*
 * Copyright (c) 2025 Axel "Foley" Karlsson and contributors.
 *
 * Use of this source code is governed by the MIT License, which you may
 * view in its entirety in the LICENSE file, found in the project's root directory.
 */

// This file is a playground for testing components.

import { createRoot } from "react-dom/client"
import { Appearance } from "../components/Appearance/Appearance"

import { App } from "./App"

createRoot(document.getElementById("root") as HTMLElement)
    .render(
        <Appearance>
            <App />
        </Appearance>
    )