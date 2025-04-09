/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                textGray: '#DBDBDB',
                textCategory: '#ABABAB',
                textGolden: '#DBCC93',
            },
            backgroundColor: {
                bgWhite: '#FEFEFE',
                bgBlack: '#18181a',
            },

            borderColor: {
                borderGray: '#B8B8B8',
                borderGolden: '#E7DDB7',
            },
        },
    },
    plugins: [],
};
