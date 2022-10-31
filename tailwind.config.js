/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    mode: 'jit',
    theme: {
        colors: {
            'accent': '#28253D',
            'bg': '#1F2034',
            'teal': '#53BAFA',
            'purple': '#A45AE5',
            'pink': '#F741C4',
            'red': '#F44268',
            'row-hover': '#2F2C46',
        },
        extend: {},
    },
    purge: [
        './public/**/*.html',
        './src/**/*.{js,jsx,ts,tsx,vue}',
    ],
    plugins: [
        require('@tailwindcss/line-clamp'),
    ],
}
