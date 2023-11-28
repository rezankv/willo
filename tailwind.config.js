/** @type {import('tailwindcss').Config} */

export default {
  content: [],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: "var(--background-default)",
          paper: "var(--background-paper)",
        },
        primary: {
          DEFAULT: "var(--primary-default)",
        },
        text: {
          DEFAULT: "var(--text-default)",
          mutated: "var(--text-mutated)",
        },
        error: {
          DEFAULT: "var(--error-default)",
        },
        purple: {
          DEFAULT: "var(--purple)",
          light: "var(--purple-light)",
        },
        green: {
          DEFAULT: "var(--green)",
          light: "var(--green-light)",
        },
        orange: {
          DEFAULT: "var(--orange)",
          light: "var(--orange-light)",
        },
        cyan: {
          DEFAULT: "var(--cyan)",
          light: "var(--cyan-light)",
        },
      },
    },
  },
  plugins: [],
};
