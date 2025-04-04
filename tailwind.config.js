module.exports = {
  content: [
    "./src/**/*.{html,js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkBlue: '#000916',
        ocenBlue: '#006992',
        indigoBlue: '#27476E',
        oxfordBlue: '#001D4A',
        salmon: '#FE5F55',
      },
      fontFamily: {
        winky: ['Winky Sans', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
      rotate: {
        'y-180': 'rotateY(180deg)', // Corrige a rotação no eixo Y
      },
    },
    screens: {
      xs: '576px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    plugins: [],
  }
}
