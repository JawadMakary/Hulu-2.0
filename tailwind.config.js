module.exports = {
 // purge allow tailwind css to remove all css that we are not using
//  jit:just in time compiler
purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      animation: ['group-hover'],
    },
  },
  plugins: [],
}
