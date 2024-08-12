/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'black': 'var(--black)',
        'oxford-blue': 'var(--oxford-blue)',
        'orange-web': 'var(--orange-web)',
        'blue': 'var(--blue)',
        'white': 'var(--white)',
        'gray': 'var(--gray)',

        'background-main': 'var(--background-main)',
        'background-sidebar': 'var(--background-sidebar)',
        'background-card': 'var(--background-card)',

        'text-main': 'var(--text-main)',
        'text-secondary': 'var(--text-secondary)',
        'text-sidebar': 'var(--text-sidebar)',
        'text-link': 'var(--text-link)',

        'button-primary-bg': 'var(--button-primary-bg)',
        'button-primary-text': 'var(--button-primary-text)',
        'button-secondary-bg': 'var(--button-secondary-bg)',
        'button-secondary-text': 'var(--button-secondary-text)',

        'menu-background': 'var(--menu-background)',
        'menu-text': 'var(--menu-text)',
        'menu-text-active': 'var(--menu-text-active)',

        'submenu-background': 'var(--submenu-background)',
        'submenu-text': 'var(--submenu-text)',

        'chart-new': 'var(--chart-new)',
        'chart-renewals': 'var(--chart-renewals)',
        'chart-others': 'var(--chart-others)',

        'support-ticket-open': 'var(--support-ticket-open)',
        'support-ticket-pending': 'var(--support-ticket-pending)',
        'support-ticket-closed': 'var(--support-ticket-closed)',

        'map-active': 'var(--map-active)',
        'map-inactive': 'var(--map-inactive)',
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

