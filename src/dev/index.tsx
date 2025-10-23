/*
 * Copyright (c) 2025 Axel "Foley" Karlsson and contributors.
 *
 * Use of this source code is governed by the MIT License, which you may
 * view in its entirety in the LICENSE file, found in the project's root directory.
 */

// This file is a playground for testing components.

"use strict"

import { createRoot } from "react-dom/client"
import { Button } from "../components/Button/Button.js"

import "../index.css"
import { Dropdown } from "../components/Dropdown/Dropdown.js"

function App() {
    return (
        <>
            <Button>
                Hello, world
            </Button>

            <Dropdown label="Choose a value" items={[
                { text: "Foo", value: "foo" },
                { text: "Bar", value: "bar" },
                { text: "Baz", value: "baz" }
            ]} />
        </>
    )
}

createRoot(document.getElementById("root")!)
    .render(
        <App />
    )