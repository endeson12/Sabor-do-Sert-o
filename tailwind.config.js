/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-primary': '#F8F8F8',
        'text-primary': '#333333',
        'accent-warm': '#E57717', // Laranja vibrante
        'accent-cool': '#007BFF', // Azul para botões principais
        'accent-green': '#2E8B57', // Verde para detalhes
        'accent-gold': '#FFD700', // Amarelo ouro
        'accent-red': '#DC143C', // Vermelho vibrante
        'neutral': '#8B6F47',
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      },
      fontWeight: {
        'regular': '400',
        'semibold': '600',
        'bold': '700',
      },
      maxWidth: {
        'container': '1200px',
      },
      spacing: {
        '16': '16px',
        '24': '24px',
      },
      aspectRatio: {
        '16/9': '16 / 9',
      },
    },
  },
  plugins: [],
}
