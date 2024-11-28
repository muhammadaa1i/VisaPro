/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'p1920':'1920px',
      'p1475':'1475px',
      'p1320':'1320px',
      'p1220': '1220px',
      'p1160':'1160px',
      'p1024': '1024px',
      'p992':'992px',
      'p900':'900px',
      'p830':'830px',
      'p768':'768px',
      'p700':'700px',
      'p660':'660px',
      'p640': '640px', 
      'p560':'560px',
      'p500':'500px',
      'p470': '470px',
      'p456':'456px',
      'p360':'360px'
    },
    extend: {},
  },
  plugins: [],
}

