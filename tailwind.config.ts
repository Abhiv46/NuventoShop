import type { Config } from 'tailwindcss';
const config: Config = {
  content: ['./app/**/*.{ts,tsx}','./components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ivory: { DEFAULT:'#FFF6F2', dark:'#F5E6DE' },
        ink: { DEFAULT:'#2B1420', soft:'#6B5560' },
        terracotta: { DEFAULT:'#B3164C', light:'#FFD9E8', dark:'#7E0E37' },
        jewel: { DEFAULT:'#0F5C56', light:'#E4F1EF', dark:'#0A413D' },
        turmeric: { DEFAULT:'#E8A33D', light:'#FDEBD2' },
        stone: { DEFAULT:'#EAD3C8', dark:'#E0C4B8' },
        // legacy aliases (migrating off these gradually)
        rose: { DEFAULT:'#B3164C', light:'#FFD9E8', dark:'#7E0E37' },
        cream: '#FFF6F2',
        slate: { DEFAULT:'#2B1420', 600:'#6B5560', 700:'#2B1420' },
      },
      fontFamily: {
        display: ['Fraunces', 'serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
};
export default config;
