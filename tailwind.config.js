/** @type {import('tailwindcss').Config} */
module.exports = {
content: [
"./src/**/*.{js,jsx,ts,tsx}",
],
theme: {
extend: {},
},
plugins: [import('@tailwindcss/aspect-ratio'),
    import('@tailwindcss/forms')

],

};