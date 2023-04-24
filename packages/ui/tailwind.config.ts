import type { Config } from 'tailwindcss'

import { COLORS } from './src/constatnts/colors'

export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: COLORS,
      width: {
        892: '892px',
        'sidbar-col': '78px',
        'sidebar-full': '260px',
      },
      height: {
        892: '892px',
        content: 'calc(100% - 96px)',
        calender: '84vh',
      },
      borderRadius:{
        default: '10px'
      }
    },
    
  },
  plugins: [],
  // eslint-disable-next-line 
} satisfies Config;  // eslint-disable-line


