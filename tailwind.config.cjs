/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
const plugin = require('tailwindcss/plugin')

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
            colors: {
                'brand': '#40500e',
                'accent-1': '#e5ebb5',
                'accent-2': '#ced7ab'
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
        plugin(function({ addVariant }) {
            addVariant('hocus', ['&:hover', '&:focus'])
          }),
    ],
};