/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'white-100': '#F3F3F3',
        'white-80': '#F3F3F380',
        'white-60': '#F3F3F360',
        'black-100': '#1C191E',
        'black-80': '#1C191E80',
        'black-60': '#1C191E60',
        'red-100': '#3C0008',
        'red-80': '#3C000880',
        'red-60': '#3C000860',
        'green-100': '#2F3D30',
        'green-80': '#2F3D3080',
        'green-60': '#2F3D3060',
      },
      fontFamily: {
        'blackmango': ['BlackMango', 'sans-serif'],
        'worksans': ['WorkSans', 'sans-serif'],
        'sans': ['WorkSans', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
