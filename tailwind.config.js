/** @type {import('tailwindcss').Config} */
module.exports = {
content: [
"./src/**/*.{js,jsx,ts,tsx}",
],
theme: {
extend: {gridTemplateRows: {
          '[auto,auto,1fr]': 'auto auto 1fr',
        }},
},
plugins: [import('@tailwindcss/aspect-ratio'),
    import('@tailwindcss/forms')

],

};