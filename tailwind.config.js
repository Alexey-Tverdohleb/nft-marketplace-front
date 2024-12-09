module.exports = {
  mode: 'jit',
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      container: {
        center: true,
      },
      colors: {
        primary: '#194185',
        link: '#038AE4',
        'link-dark': '#28A3F5',
        'primary-900': '#013EA6',
        'light-red': '#FFF5F5',
        'red-400': '#F24463',
        'red-800': '#F21E44',
        'dark-red': '#7D2D2D',
        'light-gray': '#D3D5D9',
        'light-gray-1': '#D0D5DD',
        'light-gray-50': '#FAFAFA',
        'light-gray-400': '#667085',
        'light-gray-2': '#cccccc',
        'dark-gray-400': '#606367',
        'black-400': '#101828',
        'black-800': '#2A2A32',
        'black-900': '#141416',
        'light-violet': '#F5F6FF',
        'light-blue': '#F8FFF5',
        'light-green': '#4F8439',
        'red-100': '#E26262',

      },
      boxShadow: {
        card: '0px 16px 32px rgba(25, 65, 133, 0.1);',
      },
      width: {
        'card-base': '302px',
        'card-lg': '411px',
        'card-md': '251px',
        'card-sm': '196px',
        'card-xs': '120px',

      },
    },
  },
  plugins: [],
};
