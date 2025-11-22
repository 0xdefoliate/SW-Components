/*
 * Copyright (c) 2025 Axel "Foley" Karlsson and contributors.
 *
 * Use of this source code is governed by the MIT License, which you may
 * view in its entirety in the LICENSE file, found in the project's root directory.
 */

import "./App.scss"
import { type JSX, useContext, useState } from "react"
import { AppearanceContext } from "../components/Appearance/AppearanceContext"
import type { AppearanceMode, AppearanceTheme } from "../components/Appearance/types"

import { Button } from "../components/Button/Button"
import { Checkbox } from "../components/Checkbox/Checkbox"
import { Container } from "../components/Container/Container"
import { Dropdown } from "../components/Dropdown/components/Dropdown/Dropdown"
import { Option } from "../components/Dropdown/components/Option/Option"
import { Group } from "../components/Group/Group"
import { Navbar } from "../components/Navbar/components/Navbar/Navbar"
import { NavItem } from "../components/Navbar/components/NavItem/NavItem"
import { ProgressBar } from "../components/ProgressBar/ProgressBar"
import { Radio } from "../components/Radio/components/Radio/Radio"
import { RadioGroup } from "../components/Radio/components/RadioGroup/RadioGroup"
import { Slider } from "../components/Slider/Slider"
import { Spacer } from "../components/Spacer/Spacer"
import { TextBox } from "../components/TextBox/TextBox"

export function App(): JSX.Element {

    const [ sliderValue, setSliderValue ] = useState<number>(0)
    const [ animal, setAnimal ] = useState<string>("")

    const { theme, mode, setTheme, setMode } = useContext(AppearanceContext)

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
            <Container padding={4} vertical>
                <Container padding={8}>
                    <div>
                        Current theme: <b>{theme.charAt(0).toUpperCase() + theme.slice(1)}</b> <br />
                        Current era: <b>{mode.charAt(0).toUpperCase() + mode.slice(1)}</b>
                    </div>

                    <Container paddingTop={20}>
                        <Dropdown label="Change theme"
                                  chosen={value => value === theme}
                                  change={(newValue) => {
                                      setTheme(newValue as AppearanceTheme)
                                  }}>
                            <Option text="Aquatic" value="aquatic" />
                            <Option text="Flat" value="flat" />
                            <Option text="Native" value="native" />
                        </Dropdown>

                        <Dropdown label="Change mode"
                                  chosen={value => value === mode}
                                  change={(newValue) => {
                                      setMode(newValue as AppearanceMode)
                                  }}>
                            <Option text="Light" value="light" />
                            <Option text="Dark" value="dark" />
                            <Option text="Auto" value="auto" />
                        </Dropdown>
                    </Container>
                </Container>
                <Container>
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

                            <Container paddingTop={12}>
                                Static (non-fluid) buttons
                                <Button>
                                    Hello, world
                                </Button>
                            </Container>
                        </Group>
                    </Container>

                    <Container width={300}>
                        <Group legend="Sliders">
                            <Slider label="Progress: $progress/$max"
                                    range={[ 0, 100 ]}
                                    value={sliderValue}
                                    change={newValue => { setSliderValue(newValue) }} />
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

                            <Dropdown label="Choose a value" chosen={value => value === "bar"}>
                                <Option text="Foo" />
                                <Option text="Bar" value="bar" />
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
            </Container>
        </>
    )
}