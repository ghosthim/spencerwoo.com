import { defineConfig } from 'windicss/helpers'

export default defineConfig({
    extract: {
        include: ['**/*.{jsx,tsx,css}'],
        exclude: ['node_modules', '.git', '.next'],
    },
    theme: {
        extend: {
            fontFamily: {
                sans: ['Overpass'],
                serif: ['"Old Standard TT"'],
                mono: ['"Overpass Mono"'],
            }
        },
    },
    attributify: true,
})