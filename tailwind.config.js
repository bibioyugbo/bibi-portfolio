/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";
import typography from "@tailwindcss/typography";
import forms from "@tailwindcss/forms";

export default {
    darkMode: ["class"],
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                // 'manage-preview-app-image': "url('@/assets/images/manage-preview-app-bg.png')",
                'user-modal-gradient': 'linear-gradient(to bottom, rgba(120, 197, 82, 1), rgba(100, 187, 255, 1))',
            },
            transitionProperty: {
                'left': 'left'
            },
            fontFamily: {
                sans: ['montserrat', ...defaultTheme.fontFamily.sans],
                'poppins': 'poppins',
                'montserrat': 'montserrat',
                'spacegrotest': 'spacegrotest',
                'switzer': 'switzer'
            },

            colors: {
                "primary-color": "var(--primary-color)",
                "primary-opacity-01-color": "var(--primary-opacity-01-color)",
                "base-red-color": "var(--base-red-color)",
                "secondary-color": "var(--secondary-color)",
                "dark-opacity-003-color": "var(--dark-opacity-003-color)",
                "blue-color": "var(--blue-color)",
                "dark-opacity-005-color": "var(--dark-opacity-005-color)",
                "black-opacity-013-color": "var(--black-opacity-013-color)",
                "dark-red-color": "var(--dark-red-color)",
                "base-red-opacity-015-color": "var(--base-red-opacity-015-color)",
                "black-nav-color": "var(--black-nav-color)",
                "white-opacity-032-color": "var(--white-opacity-032-color)",
                "white-opacity-005-color": "var(--white-opacity-005-color)",
                "white-opacity-002-color": "var(--white-opacity-002-color)",
                "pure-red-color": "var(--pure-red-color)"

            }
        },
        plugins: [typography, forms({strategy: 'class'}), require("tailgrids/plugin"), require("tailwindcss-animate")],
    }
}
