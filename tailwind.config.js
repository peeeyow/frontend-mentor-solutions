/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        outfit: ["Outfit", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        "red-hat-display": ["Red Hat Display", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        fraunces: ["Fraunces", "serif"],
        "league-spartan": ["League Spartan", "sans-serif"],
      },
      colors: {
        sps: {
          "very-dark-magenta": "hsl(300, 43%, 22%)",
          "soft-pink": "hsl(333, 80%, 67%)",
          "dark-grayish-magenta": "hsl(303, 10%, 53%)",
          "light-grayish-magenta": "hsl(300, 24%, 96%)",
          white: "hsl(0, 0%, 100%)",
        },
        ppcc: {
          "darker-cyan": "hsl(158, 36%, 20%)",
          "dark-cyan": "hsl(158, 36%, 37%)",
          cream: "hsl(30, 38%, 92%)",
          "very-dark-blue": "hsl(212, 21%, 14%)",
          "dark-grayish-blue": "hsl(228, 12%, 48%)",
          white: "hsl(0, 0%, 100%)",
        },
        osc: {
          "pale-blue": "hsl(225, 100%, 94%)",
          "bright-blue": "hsl(245, 75%, 52%)",
          "desaturated-bright-blue": "hsl(245, 50%, 65%)",
          "very-pale-blue": "hsl(225, 100%, 98%)",
          "desaturated-blue": "hsl(224, 23%, 55%)",
          "dark-blue": "hsl(223, 47%, 23%)",
        },
        qrcc: {
          white: "hsl(0, 0%, 100%)",
          "light-gray": "hsl(212, 45%, 89%)",
          "grayish-blue": "hsl(220, 15%, 55%)",
          "dark-blue": "hsl(218, 44%, 22%)",
        },
        home: {
          white: "#c8ccd4",
          black: "#282c34",
          "light-gray": "#abb2bf",
          yellow: "#e5c07b",
          "dark-gray": "#353b45",
          blue: "#61afef",
          green: "#98c379",
          red: "#be5046",
          orange: "#d19a66",
        },
      },
    },
  },
  plugins: [],
};
