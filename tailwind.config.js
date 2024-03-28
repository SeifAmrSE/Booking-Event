/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      backgroundImage: {
        home: "url('/src/images/all drop.png')",
        pinkpatt: "url('/src/images/pink pattern.png')"
      },
      fontFamily: {
        minicheffont: 'Mini chef font',
      }
  },
  plugins: [],
}

}

