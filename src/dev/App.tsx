/*
 * Copyright (c) 2025 Axel "Foley" Karlsson and contributors.
 *
 * Use of this source code is governed by the MIT License, which you may
 * view in its entirety in the LICENSE file, found in the project's root directory.
 */

"use strict"

import "./App.scss"
import { useState } from "react"

import { Button } from "../components/Button/Button"
import { Checkbox } from "../components/Checkbox/Checkbox"
import { Container } from "../components/Container/Container"
import { Dropdown } from "../components/Dropdown/components/Dropdown/Dropdown"
import { Option } from "../components/Dropdown/components/Option/Option"
import { Group } from "../components/Group/Group"
import { Navbar } from "../components/Navbar/Navbar/Navbar"
import { NavItem } from "../components/Navbar/NavItem/NavItem"
import { ProgressBar } from "../components/ProgressBar/ProgressBar"
import { Radio } from "../components/Radio/Radio/Radio"
import { RadioGroup } from "../components/Radio/RadioGroup/RadioGroup"
import { Slider } from "../components/Slider/Slider"
import { Spacer } from "../components/Spacer/Spacer"
import { TextBox } from "../components/TextBox/TextBox"

export function App() {

    const [ sliderValue, setSliderValue ] = useState<number>(0)
    const [ animal, setAnimal ] = useState<string>("")

    return (
        <>
            <Navbar brand="Brand:https://example.com">
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
            </Navbar>

            <Spacer />

            <Container padding={4}>
                <Container width={250}>
                    <Group legend="Buttons">
                        <Container>
                            <Button primary fluid>
                                Primary
                            </Button>

                            <Button fluid>
                                Secondary
                            </Button>

                            <Button disabled fluid>
                                Disabled
                            </Button>
                        </Container>

                        <Container>
                            <Checkbox label="Checkbox" />
                            <Checkbox label="Disabled" disabled />
                        </Container>
                    </Group>
                </Container>

                <Container width={300}>
                    <Group legend="Sliders">
                        <Slider label="Progress: $progress/$max"
                                range={[ 0, 100 ]}
                                value={sliderValue}
                                change={newValue => setSliderValue(newValue)} />
                        <Slider label="Progress: $progress/$max" range={[ 1, 2 ]} />

                        <ProgressBar progress={sliderValue} />

                        <Slider label="This slider is disabled" range={[ 0, 10 ]} disabled />
                    </Group>
                </Container>

                <Container minWidth={200} width={"fit-content"}>
                    <Group legend="Dropdown">
                        <Dropdown label="Choose a fruit">
                            <Option text="Apple" />
                            <Option text="Orange" />
                            <Option text="Banana" />
                            <Option text="Pear" />
                            <Option text="Watermelon" />
                        </Dropdown>
                        
                        <Dropdown label="Choose a value">
                            <Option text="Foo" />
                            <Option text="Bar" selected />
                            <Option text="Baz" />
                        </Dropdown>

                        <Dropdown label="Disabled" disabled>
                            <Option text="Disabled Option 1" />
                            <Option text="Disabled Option 2" />
                        </Dropdown>

                        <Button primary>
                            Apply
                        </Button>
                    </Group>
                </Container>

                <Container width={300}>
                    <Group legend="Radios">
                        <span>
                            Your animal is: <b>{animal || "N/A"}</b>
                        </span>
                        <RadioGroup name="Animal" change={radio => {
                            setAnimal(radio.key.slice(0, 1).toUpperCase() + radio.key.slice(1))
                        }}>
                            <Radio label="Cat" value="cat" />
                            <Radio label="Dog" value="dog" />
                            <Radio label="Parrot" value="parrot" />
                            <Radio label="Rabbit" value="rabbit" disabled />
                        </RadioGroup>
                    </Group>
                </Container>

                <Container width={250}>
                    <Group legend="Text boxes">
                        <TextBox label="Enter your name" placeholder="Arthur Dent" />
                        <TextBox label="This text box is disabled"
                                 subType="email"
                                 placeholder="arthurdent@example.com"
                                 disabled />
                    </Group>
                </Container>
            </Container>
        </>
    )
}