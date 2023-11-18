/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "light-theme-primary-primary": "#5D87FF",
        "light-theme-action-light-light-info": "#EBF3FE",
        "light-theme-gray-md-new-grey": "#5A6A85",
        "light-theme-gray-dark-blue-grey": "#2A3547",
        "light-theme-action-light-light-success": "#E6FFFA",
        "light-theme-action-success": "#13DEB9",
        "light-theme-action-warning": "#FFAE1F",
        "light-theme-action-light-light-warning": "#FEF5E5",
        "light-theme-action-info": "#539BFF",
        "light-theme-action-error": "#FA896B",
        "light-theme-action-light-light-error": "#FBF2EF",
        "light-theme-gray-medium-blue-grey": "#7C8FAC",
        "light-theme-gray-light-grey": "#DFE5EF",
        "light-theme-primary-light-primary": "#ECF2FF",
        "light-theme-secondary-secondary-color": "#49BEFF",
        "border": "#EAEFF4",
      },
      spacing: {
        '100': '36.3125rem',
        '120': '28.375rem',
      },
      fontFamily: {
        jakarta: ["Plus Jakarta Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
}