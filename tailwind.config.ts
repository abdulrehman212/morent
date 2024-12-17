import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', '"Helvetica Neue"', 'Arial', 'sans-serif'],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          dark: {
            900: '#0A196F',
            800: '#102587',
            700: '#1A37A7',
            600: '#264BC8',
          },
          default: '#3563E9',
          light: {
            400: '#658DF1',
            300: '#85A8F8',
            200: '#AEC8FC',
            100: '#D6E4FD',
          },
          white: '#FFFFFF',
        },
        success: {
          dark: {
            900: '#3B6506',
            800: '#4C7A0B',
            700: '#659711',
            600: '#7FB519',
          },
          default: '#9CD323',
          light: {
            400: '#BCE455',
            300: '#D3F178',
            200: '#E8FAA6',
            100: '#F5FCD2',
          },
        },
        error: {
          dark: {
            900: '#7A0619',
            800: '#930B16',
            700: '#B71112',
            600: '#DB2719',
          },
          default: '#FF4423',
          light: {
            400: '#FF7F59',
            300: '#FFA37A',
            200: '#FFC8A6',
            100: '#FFE7D3',
          },
        },
        warning: {
          dark: {
            900: '#7A4D0B',
            800: '#936312',
            700: '#B7821D',
            600: '#DBA32A',
          },
          default: '#FFC73A',
          light: {
            400: '#FFD96B',
            300: '#FFE488',
            200: '#FFEFB0',
            100: '#FFF8D7',
          },
        },
        info: {
          dark: {
            900: '#102E7A',
            800: '#1A4393',
            700: '#2A60B7',
            600: '#3D81DB',
          },
          default: '#54A6FF',
          light: {
            400: '#7EC2FF',
            300: '#98D3FF',
            200: '#BAE5FF',
            100: '#DCF3FF',
          },
        },
        secondary: {
          dark: {
            900: '#040815',
            800: '#080C19',
            700: '#0D121F',
            600: '#131825',
          },
          default: '#1A202C',
          light: {
            400: '#596780',
            300: '#90A3BF',
            200: '#C3D4E9',
            100: '#E0E9F4',
          },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
