/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      crimson: {
        100: "hsla(0, 63%, 54%, 1)",
        50: "hsla(0, 63%, 54%, 0.5)",
        25: "hsla(0, 63%, 54%, 0.25);"
      },
      magenta: {
        100: "hsla(227,47%,53%, 1)",
        50: "hsla(227,47%,53%, 0.5)",
        25: "hsla(227,47%,53%, 0.25)"
      },
      charcoal: {
        100: "hsla(225, 14%, 6%, 0.78)",
        50: "hsla(225, 14%, 6%, 0.50)",
        25: "hsla(225, 14%, 6%, 0.25)"
      },
      whiteish: "hsl(0,0%,98%)",
    },
    spacing: {
      xxs: "6px",
      xs:"10px",
      sm: "18px",
      md: "27px",
      lg: "38px",
      xl: "50px",
      xxl: "74px",
      "3xl":"102px",
    },
    fontSize: {
      xs: ["12px", "16px"],
      sm: ["14px", "24px"],
      md: ["16px", "24px"],
      lg: ["18px", "24px"],
      xl: ["20px", "32px"],
      "2xl": ["32px", "40px"],
      "3xl": ["48px", "56px"],
      "4xl": ["56px", "64px"],
      "5xl": ["72px", "76px"]
    },
    fontWeight: {
      bold: 600,
      light: 300
    },
    fontFamily: {
      grotesk: "var(--grotesk)"
    },
    extend: {},
  },
  plugins: [],
}
