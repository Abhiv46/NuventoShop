import type { Config } from 'tailwindcss';
const config: Config = {
  content: ['./app/**/*.{ts,tsx}','./components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        rose: { DEFAULT:'#E8466A', light:'#FCE4EC', dark:'#C2185B' },
        cream: '#FFF8F5',
        slate: { DEFAULT:'#3D2C35', 600:'#6B5762', 700:'#2D1F28' },
      },
    },
  },
  plugins: [],
};
export default config;
