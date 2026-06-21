import type { Config } from 'tailwindcss';
const config: Config = {
  content: ['./app/**/*.{ts,tsx}','./components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ivory: { DEFAULT:'#FAF6EE', dark:'#F1E9D8' },
        ink: { DEFAULT:'#1C1410', soft:'#4A3F38' },
        terracotta: { DEFAULT:'#B6452C', light:'#F3DDD3', dark:'#8C3220' },
        jewel: { DEFAULT:'#2F5D50', light:'#E2EBE6', dark:'#203F37' },
        turmeric: { DEFAULT:'#C99A3B', light:'#F6E9CB' },
        stone: { DEFAULT:'#E8E1D3', dark:'#D8CDB8' },
        // legacy aliases (migrating off these gradually)
        rose: { DEFAULT:'#B6452C', light:'#F3DDD3', dark:'#8C3220' },
        cream: '#FAF6EE',
        slate: { DEFAULT:'#1C1410', 600:'#4A3F38', 700:'#1C1410' },
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
