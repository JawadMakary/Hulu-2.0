module.exports = {
 // purge allow tailwind css to remove all css that we are not using
//  jit:just in time compiler
purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    // to add our own custom breakpoints
    extend: {
      // for 4k screen (big monitor screens)
      screens:{
        "3xl":"2000px"
      }
    },
  },
  variants: {
    extend: {
      textColor: ['responsive','active', 'hover', 'focus', 'group-hover'],
      animation: ['group-hover'],
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
}
