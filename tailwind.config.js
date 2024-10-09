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

        'logo': 'var(--logo)',
        'bg-primary': 'var(--bg-primary)',
        'bg-secondary': 'var(--bg-secondary)',
        'bg-third': 'var(--bg-third)',


      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

