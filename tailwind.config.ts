import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    container: {
      center: true,
    },
    // spacing: {
    //   "0": "0",
    //   "1": "5px",
    //   "2": "10px",
    //   "3": "15px",
    //   "4": "20px",
    //   "5": "30px",
    //   "6": "40px",
    //   "7": "80px",
    //   "8": "100px",
    //   "9": "130px",
    //   "10": "160px",
    // },
    extend: {
      zIndex: {
        'sidebar-backDrop': '100',
        sidebar: '110',
        'dialog-backdrop': '120',
        dialog: '130',
      },
      boxShadow: {
        navbar: '0 4px 24px 0 rgba(34,41,47,.1)',
      },
      colors: {
        background: {
          DEFAULT: 'var(--background)',
          100: 'var(--background-100)',
          200: 'var(--background-200)',
          300: 'var(--background-300)',
          400: 'var(--background-400)',
          500: 'var(--background-500)',
          600: 'var(--background-600)',
          700: 'var(--background-700)',
          800: 'var(--background-800)',
          900: 'var(--background-900)',
          950: 'var(--background-950)',
        },
        'background-paper': {
          DEFAULT: 'var(--background-paper)',
        },
        primary: {
          DEFAULT: 'var(--primary)',
          100: 'var(--primary-100)',
          200: 'var(--primary-200)',
          300: 'var(--primary-300)',
          400: 'var(--primary-400)',
          500: 'var(--primary-500)',
          600: 'var(--primary-600)',
          700: 'var(--primary-700)',
          800: 'var(--primary-800)',
          900: 'var(--primary-900)',
          950: 'var(--primary-950)',
        },
        text: {
          DEFAULT: 'var(--text)',
          100: 'var(--text-100)',
          200: 'var(--text-200)',
          300: 'var(--text-300)',
          400: 'var(--text-400)',
          500: 'var(--text-500)',
          600: 'var(--text-600)',
          700: 'var(--text-700)',
          800: 'var(--text-800)',
          900: 'var(--text-900)',
          950: 'var(--text-950)',
        },
        error: {
          DEFAULT: 'var(--error)',
          100: 'var(--error-100)',
          200: 'var(--error-200)',
          300: 'var(--error-300)',
          400: 'var(--error-400)',
          500: 'var(--error-500)',
          600: 'var(--error-600)',
          700: 'var(--error-700)',
          800: 'var(--error-800)',
          900: 'var(--error-900)',
          950: 'var(--error-950)',
        },
      },
      animation: {
        pulse:
          'inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]',
      },
    },
  },
  plugins: [],
};
export default config;
