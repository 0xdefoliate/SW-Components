/*
 * Copyright (c) 2025 Axel "Foley" Karlsson and contributors.
 *
 * Use of this source code is governed by the MIT License, which you may
 * view in its entirety in the LICENSE file, found in the project's root directory.
 */

/// <reference types="user-agent-data-types" />

import type { AppearanceOS, DO_NOT_USE_UA_DATA_PLATFORM } from "../types"

export function getOS(): AppearanceOS {
    const sniffUA = (): AppearanceOS => {

        // Captures the first two tokens (Platform in the UA "comment" section.
        const uaComment = /(?<=Mozilla\/5.0 \()([^;]*);([^);0-9]*)/.exec(navigator.userAgent)

        const platform = [ uaComment?.[1]?.trim() ?? "Web", uaComment?.[2]?.trim() ?? "Web" ]

        if (platform[0]?.startsWith("Windows NT")) {
            return "Windows"
        }

        if (platform[0] === "Macintosh" || platform[1]?.startsWith("Intel Mac OS X")) {
            return "macOS"
        }

        // Yes, technically the iPhone's and iPad's OSes are different, but for our purposes, they're similar enough.
        if (platform[0] === "iPhone" || platform[0] === "iPad") {
            return "iOS"
        }

        if (platform[0] === "Linux" && platform[1]?.startsWith("Android")) {
            return "Android"
        }

        return "Web"
    }

    const sniffUAData = (): AppearanceOS | false => {

        if (!("userAgentData" in navigator)) {
            return false
        }

        // I know, it's not good to assert that the `userAgentData.platform` always returns those OSes,
        // but in this case MDN says it's one of the strings present `DO_NOT_USE_UA_DATA_PLATFORM`.
        const platform = navigator.userAgentData.platform as DO_NOT_USE_UA_DATA_PLATFORM

        switch (platform) {
            // ChromeOS and friends are "Web OSes", not actual OSes.
            //
            // Regarding the inclusion of "Linux", yes, GNU/Linux is not really a "Web OS" like ChromeOS,
            // but it's hard to give native styles to GNU/Linux visitors since there are A LOT of different
            // desktop environments and similar, so we might as well put them in the generic category.
            case "Chrome OS":
            case "Chromium OS":
            case "Linux":
            case "Unknown":
                return "Web"
            default:
                return platform
        }
    }

    return sniffUAData() || sniffUA()
}