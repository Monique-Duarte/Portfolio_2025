module.exports = {
  content: [
    "./src/**/*.{html,js,jsx}", // Caminho dos arquivos que contêm classes Tailwind
  ],
  theme: {
    extend: {
      fontFamily: {
        'winky': ['"Winky Sans"', 'sans-serif'],
        'roboto': ['Roboto', 'sans-serif'],
      }
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