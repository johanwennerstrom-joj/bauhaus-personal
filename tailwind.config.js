const plugin = require('tailwindcss/plugin')

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
      navy: "hsl(227, 30%, 37%)",
      mustard: "hsla(43, 78%, 61%, 1)",
      black: "hsla(0, 0%, 0%, 1)",
      khaki: "hsla(18, 10%, 81%, 1)"
    },
    spacing: {
      xxxs: '2px',
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
      "5xl": ["72px", "76px"],
      "6xl": ["200px", "208px"]
    },
    borderWidth: {
      sm: "2px",
      md: "4px",
      lg: "8px",
      xl: "12px",
      "2xl": "18px",
      "3xl": "24px"
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
  plugins: [
    plugin(({ addComponents, theme }) => {
      addComponents({
        '.mega': {
          fontSize: theme('fontSize.6xl'),
          fontFamily: theme('fontFamily.grotesk')
        },
        '.h1': {
          fontSize: theme('fontSize.5xl'),
          fontFamily: theme('fontFamily.grotesk')
        },
        '.h2': {
          fontSize: theme('fontSize.4xl'),
          fontFamily: theme('fontFamily.grotesk')
        },
        '.h3': {
          fontSize: theme('fontSize.3xl'),
          fontFamily: theme('fontFamily.grotesk')
        },
        '.h4': {
          fontSize: theme('fontSize.2xl'),
          fontFamily: theme('fontFamily.grotesk')
        },
        '.h5': {
          fontSize: theme('fontSize.xl'),
          fontFamily: theme('fontFamily.grotesk')
        },
        '.h6': {
          fontSize: theme('fontSize.lg'),
          fontFamily: theme('fontFamily.grotesk')
        },
        '.body': {
          fontSize: theme("fontSize.md"),
          fontFamily: theme('fontFamily.grotesk')
        },
        '.body-sm': {
          fontSize: theme("fontSize.sm"),
          fontFamily: theme('fontFamily.grotesk')
        },
        '.body-xs': {
          fontSize: theme("fontSize.xs"),
          fontFamily: theme('fontFamily.grotesk')
        },
        '.body-xxs': {
          fontSize: theme("fontSize.xxs"),
          fontFamily: theme('fontFamily.grotesk')
        },
        '.base-grid': {
          display: 'grid',
          gridTemplateColumns: 'repeat(12,1fr)',
          gap: theme("spacing.sm")
        },
        '.width-transition': {
          transition: 'width 0.4s var(--cubic-ease)',
        }
      })})
  ],
}
