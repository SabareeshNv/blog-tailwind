/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            fontFamily: {
                "sans": ["'Alegreya Sans'", ...defaultTheme.fontFamily.sans],
                "serif": ["Alegreya", ...defaultTheme.fontFamily.serif],
            },
            spacing: {
                'fluid': 'clamp(2rem, 3vw, 4rem)',
            },
            lineHeight: {
                'heading': '1.2',
            },
            typography: {
                DEFAULT: {
                    css: {
                        // 'blockquote p:first-of-type::before': false,
                        // 'blockquote p:first-of-type::after': false,
                        maxWidth: '75ch',
                    }
                }
            }
        }
    },
    plugins: [
        require('@tailwindcss/typography'),
    ],
};