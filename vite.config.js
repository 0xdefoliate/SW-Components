/*
 * Copyright (c) 2025 Axel "Foley" Karlsson and contributors.
 *
 * Use of this source code is governed by the MIT License, which you may
 * view in its entirety in the LICENSE file, found in the project's root directory.
 */

import { dirname, resolve } from "node:path"
import { fileURLToPath } from "node:url"
import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

const __dirname = dirname(fileURLToPath(import.meta.url))

export default defineConfig({

    plugins: [
        react({
            babel: {
                plugins: [ "babel-plugin-react-compiler" ]
            }
        })
    ],

    build: {
        // We do not want vite to clear the generated d.ts files.
        emptyOutDir: false,

        lib: {
            entry: resolve(__dirname, "./src/index.ts"),
            name: "SolidWeather-Components",
            cssFileName: "index"
        },

        rollupOptions: {
            external: [ "react", "react-dom" ],
            output: {
                globals: {
                    "react": "React"
                }
            }
        }
    },
    server: {
        // Required for the dev server to be accessible outside the Docker container.
        host: "0.0.0.0",

        watch: {
            usePolling: true
        }
    }
})