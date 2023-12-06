/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./src/components/**/*.{tsx,jsx,ts,js}",
    "./src/pages/**/*.{tsx,jsx,ts,js}",
    "./src/**/*.{tsx,jsx,html,js}",
  ],
  theme: {
    extend: {
      boxShadow: {
        navbar: "0 4px 24px 0 rgba(34,41,47,.1)",
      },
      colors: {
        background: {
          DEFAULT: "var(--background-default)",
          paper: "var(--background-paper)",
        },
        primary: {
          DEFAULT: "var(--primary-default)",
          "contrast-text": "var(--primary-contrast-text)",
          light: "var(--primary-light)",
        },
        text: {
          DEFAULT: "var(--text-default)",
          mutated: "var(--text-mutated)",
          light: "var(--text-light)",
        },
        error: {
          DEFAULT: "var(--error-default)",
          "contrast-text": "var(--error-contrast-text)",
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
      animation: {
        pulse:
          "inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]",
      },
    },
  },
  plugins: [],
};
