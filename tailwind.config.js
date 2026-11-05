/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: [
          '"JetBrains Mono"',
          '"Fira Code"',
          '"SFMono-Regular"',
          'Consolas',
          '"Liberation Mono"',
          'Menlo',
          'monospace',
        ],
        sans: [
          '"Inter"',
          'system-ui',
          '-apple-system',
          'sans-serif',
        ],
      },
      colors: {
        lab: {
          bg: '#090a0d',
          panel: '#111318',
          card: '#161920',
          border: '#252934',
          borderBright: '#363c4d',
          text: '#e6e8ee',
          muted: '#8b92a5',
          emerald: '#10b981',
          amber: '#f59e0b',
          cyan: '#06b6d4',
          rose: '#f43f5e',
        }
      }
    },
  },
  plugins: [],
};
