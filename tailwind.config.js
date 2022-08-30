/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'gold': {
                    400: '#e2b339',
                },
                // ...
            },
        },
    },
    plugins: [],
}
