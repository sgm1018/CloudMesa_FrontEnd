/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        logo: 'var(--logo)',
        bgBackground: 'var(--bg-background)',
        text: 'var(--text)',
        bgPrimary: {
          100: 'var(--bg-primary-100)',
          200: 'var(--bg-primary-200)',
          300: 'var(--bg-primary-300)',
          400: 'var(--bg-primary-400)',
          500: 'var(--bg-primary-500)',
          600: 'var(--bg-primary-600)',
          700: 'var(--bg-primary-700)',
          800: 'var(--bg-primary-800)',
          900: 'var(--bg-primary-900)',
        },
        bgSecondary: {
          100: 'var(--bg-secondary-100)',
          200: 'var(--bg-secondary-200)',
          300: 'var(--bg-secondary-300)',
          400: 'var(--bg-secondary-400)',
          500: 'var(--bg-secondary-500)',
          600: 'var(--bg-secondary-600)',
          700: 'var(--bg-secondary-700)',
          800: 'var(--bg-secondary-800)',
          900: 'var(--bg-secondary-900)',
        },
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

