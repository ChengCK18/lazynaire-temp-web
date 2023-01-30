/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                anton: ["Anton", "sans-serif"],
                neueHaas: ["Neue Haas Grotesk Display Pro", "sans-serif"],
            },
            colors: {
                "custom-theme-purple": "#47003C",
            },

            backgroundImage: {
                'my_bg_image': "url('../public/images/merged/Desktop_Front_01.png')",
            },
            transitionProperty: {
                'width': 'width'
            },
        },

        screens: {
            mobile: "200px",
            // => @media (min-width: 640px) { ... }

            tablet: "820px",
            // => @media (min-width: 640px) { ... }

            laptop: "1024px",
            // => @media (min-width: 1024px) { ... }

            desktop: "1280px",
            // => @media (min-width: 1280px) { ... }
        },
    },
    plugins: [
        plugin(function ({ addUtilities }) {
            addUtilities({
                ".scrollbar-hide": {
                    /* IE and Edge */
                    "-ms-overflow-style": "none",

                    /* Firefox */
                    "scrollbar-width": "none",

                    /* Safari and Chrome */
                    "&::-webkit-scrollbar": {
                        display: "none",
                    },
                },
            });
        }),
    ],
};
