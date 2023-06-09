/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./public/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
      padding:'16px',
    },
    extend: {
      colors: {
        primary: "#51B1A6",
        secondary: "#64748b",
        dark: "#24243F",
        grey: "#94a3b8",
        navDark: "rgba(15, 23, 42, 0.5)",
        navWhite: "rgba(255, 255, 255, 0.5)",
        cardSlide: "rgba(81, 165, 151, 0.914)",
      },
      boxShadow: {
        'cardshadow': "0 0 10px 0 rgba(0, 0, 0, 0.1)",
      },
      screen: {
        '2xl': '1320px',
      },
    },
  },
  plugins: {
    tailwindcss: {},
    ...(process.env.NODE_ENV === 'production' ? { cssnano: {} } : {}),
  }
}

