// https://nuxt.com/docs/api/configuration/nuxt-config
import wasm from "vite-plugin-wasm";

export default defineNuxtConfig({
    devtools: {
        enabled: true,

        timeline: {
            enabled: true,
        },
    },
    modules: [
        "@nuxtjs/tailwindcss",
        "@pinia/nuxt",
        "nuxt-lodash"
    ],
    tailwindcss: {
        cssPath: '~/assets/css/tailwind.css',
        configPath: 'tailwind.config',
        exposeConfig: false,
        exposeLevel: 2,
        config: {},
        injectPosition: 'first',
        viewer: true,
    },
    vite: {
        plugins: [wasm()]
    },
    lodash: {
        prefix: "_",
        prefixSkip: ["string"],
        upperAfterPrefix: false,
        exclude: ["map"],
        alias: [
            ["camelCase", "stringToCamelCase"], // => stringToCamelCase
            ["kebabCase", "stringToKebab"], // => stringToKebab
            ["isDate", "isLodashDate"], // => _isLodashDate
        ],
    }
})