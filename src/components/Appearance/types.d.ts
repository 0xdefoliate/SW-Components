/*
 * Copyright (c) 2025 Axel "Foley" Karlsson and contributors.
 *
 * Use of this source code is governed by the MIT License, which you may
 * view in its entirety in the LICENSE file, found in the project's root directory.
 */

export type AppearanceTheme = "aquatic" | "flat" | "native"
export type AppearanceMode = "light" | "dark" | "auto"
export type AppearanceOS = "Android" | "iOS" | "macOS" | "Windows" | "Web"

// Source: https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Sec-CH-UA-Platform#platform
export type DO_NOT_USE_UA_DATA_PLATFORM = "Android" | "Chrome OS" | "Chromium OS" | "iOS" | "macOS" | "Linux" | "Windows" | "Unknown"