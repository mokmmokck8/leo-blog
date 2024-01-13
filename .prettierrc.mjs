/** @type {import("prettier").Config} */
export default {
    plugins: ['prettier-plugin-astro', 'prettier-plugin-tailwindcss'],
    overrides: [
        {
            files: '*.astro',
            options: {
                parser: 'astro',
            },
        },
    ],
    trailingComma: 'all',
    singleQuote: true,
    tabWidth: 4,
    printWidth: 100,
    arrowParens: 'avoid',
    semi: false,
}
