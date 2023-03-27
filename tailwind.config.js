/** @type {import('tailwindcss').Config} */
module.exports = {
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#8646b0",
          secondary: "#429ef5",
          accent: "#37cdbe",
          neutral: "#3d4451",
          "base-100": "#ffffff",

       
        },
      },
    ],
  },

  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      'sm': '340px',

      'md': '768px',

      'lg': '1024px',

      'xl': '1280px',

      '2xl': '1536px',
    }
  },
  plugins: [require("daisyui")],
}