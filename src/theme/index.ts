// src/theme/index.ts
import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react"
import { colors } from './colors'
import { semanticTokens } from './colorsSemantic'

const config = defineConfig({
    theme: {
        tokens: {
            colors
        },
        semanticTokens
    }
})

export default createSystem(defaultConfig, config)