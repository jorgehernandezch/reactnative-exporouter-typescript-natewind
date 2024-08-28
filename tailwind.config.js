/** @type {import('tailwindcss').Config} */
import { colors } from './src/constants/colors'
import { fontFamily } from './src/constants/fonts'

module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./src/**/*.{ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: colors,
      fontFamily: fontFamily
    },
  },
  plugins: [],
}