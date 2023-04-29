/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./public/*.html"
    ],
    theme: {
        screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
    },
        extend: {
            colors: {
                primary: '#7c3aed',
                primarylight: '#ede9fe',
                primarydark: '#6d28d9',
                dark: '#0f172a',
                secondary: '#64748b',
                deepdark: '#242D52',
            }
        },
    },
    plugins: [],
}

