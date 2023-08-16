module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        gray: {
          100: "#f0f5f9",
          300: "#dce2e5",
          400: "#bec2c5",
          "100_7f": "#f2f5f67f",
        },
        blue_gray: {
          100: "#d7dadc",
          500: "#6b8592",
          600: "#5a707b",
          700: "#4a5c65",
          800: "#39474e",
          "600_01": "#5a6a75",
          "800_01": "#3d484e",
          "700_01": "#49565f",
        },
        black: { "900_0c": "#0000000c" },
        light_blue: { A700: "#0084ff" },
        white: { A700: "#ffffff" },
      },
      fontFamily: { opensans: "Open Sans" },
      boxShadow: { bs: "0px 10px  17px 0px #0000000c" },
      backgroundImage: {
        gradient: "linear-gradient(312deg ,#3d484e,#49565f,#5a6a75)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
