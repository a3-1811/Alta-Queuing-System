module.exports = {
  content: ['./src/**/*.{html,js,ts,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        circle: '0 0 10px 5px rgba(99, 183, 177,1)',
      },
      colors: {
        primary: '#ff7506',
        secondary: '#A9A9B0',
        'primary-50': '#FFF2E7',
        'primary-300': '#FFAC6A',
        'primary-300': '#FFAC6A',
        'primary-400': '#FF9138',
        'primary-500': '#FF7506',
        'primary-blue' : "#4680FF",
        'primary-red' : "#FF5252",
        'primary-pink' : "#F976B9",
        'primary-organe' : "#FF9A48",
        'primary-light-green':"#92CD4F",
        'primary-purple' : "#8E90F8",
      },
    },
    screens:{
      '2xl': {'max': '1440px'},
      // => @media (max-width: 1535px) { ... }

      'xl': {'max': '1279px'},
      // => @media (max-width: 1279px) { ... }

      'lg': {'max': '1023px'},
      // => @media (max-width: 1023px) { ... }

      'md': {'max': '767px'},
      // => @media (max-width: 767px) { ... }

      'sm': {'max': '639px'},
      // => @media (max-width: 639px) { ... }
    }
  },
  plugins: [
  ],
};
