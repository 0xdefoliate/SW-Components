/*
 * Copyright (c) 2025 Axel "Foley" Karlsson and contributors.
 *
 * Use of this source code is governed by the MIT License, which you may
 * view in its entirety in the LICENSE file, found in the project's root directory.
 */

// This file is a playground for testing components.

"use strict"

import { createRoot } from "react-dom/client"

import "../index.css"
import { Button } from "../components/Button/Button"
import { Container } from "../components/Container/Container"
import { Navbar } from "../components/Navbar/Navbar/Navbar"
import { NavItem } from "../components/Navbar/NavItem/NavItem"
import { Spacer } from "../components/Spacer/Spacer"

function App() {
    return (
        <>
            <Navbar brand="Brand:https://example.com" final={<Button>Hello, World!</Button>}>
                <NavItem>
                    <Button>
                        Item 1
                    </Button>
                </NavItem>

                <NavItem>
                    <Button>
                        Item 2
                    </Button>
                </NavItem>

                <NavItem>
                    <a href="https://example.com" tabIndex={0}>
                        Item 3
                    </a>
                </NavItem>
            </Navbar>

            <Spacer />

            <Container vertical>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </Container>
        </>
    )
}

createRoot(document.getElementById("root")!)
    .render(
        <App />
    )