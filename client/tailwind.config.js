const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{jsx,js}"],
  theme: {
    extend: {
      colors: {
        "nl-darkblue": "#1F2833",
        "nl-lightblue": "#CFF6FD",
        "nl-grey": "#DDDDDD",
        "nl-lightgrey": "#FCFCFC",
        "nl-navblue": "#094288",
        "nl-textgrey": "#4F4F4F",
      },
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
      height: {
        '73': '73px'
      },
      transformOrigin: {
        0: "0%",
      },
    },
  },
  plugins: [],
};
