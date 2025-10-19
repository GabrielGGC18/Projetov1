module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        // variáveis extras usadas no projeto (ajuste se quiser)
        muted: {
          DEFAULT: '#6b7280'
        }
      }
    }
  },
  plugins: []
};