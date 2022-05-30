module.exports = {
  content: ["./dist/**/*.{html,js}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          blue: "#022855",
          gray: "#e7f1f7",
          "gray-100": "#d0dce6",
          dark_body: "#04153F",
        },

        screens: {
          'sm': '640px',
          // => @media (min-width: 640px) { ... }

          'md': '768px',
          // => @media (min-width: 768px) { ... }

          'mdd': '925px',

          'lg': '1024px',
          // => @media (min-width: 1024px) { ... }

          'xl': '1280px',
          // => @media (min-width: 1280px) { ... }

          '2xl': '1536px',
          // => @media (min-width: 1536px) { ... }
        },

      },

      fontFamily: {
        mont: ["Mont"],
      },
      animation: {
        marquee: "marquee 25s linear infinite",
        line: "line 1s cubic-bezier(0.61, 1, 0.88, 1) 1s 1 normal backwards",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        line: {
          "0%": {
            opacity: " 0",
            transform: "translateX(-250px)",
          },

          "100%": {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
      },
    },
    plugins: [],
  },
};
