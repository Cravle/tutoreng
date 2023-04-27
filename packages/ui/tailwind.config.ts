import type { Config } from 'tailwindcss'

import { COLORS } from './src/constatnts/colors'

export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: COLORS,
      padding: {
       '4_5': '1.125rem', // 18px
      },
      margin:{
        '18px': '18px',
      },
      width: {
        892: '892px',
        'sidbar-col': '78px',
        'sidebar-full': '260px',
        480: '480px',
      },
      height: {
        892: '892px',
        500: '500px',
        content: 'calc(100% - 96px)',
        calender: '81vh',
      },
      borderRadius:{
        default: '10px',
        '25px': '25px'
      },
      boxShadow: {
        'default': '0px 4px 4px rgba(0, 0, 0, 0.25)',
      }
    },
    
  },
  plugins: [],
  // eslint-disable-next-line 
} satisfies Config;  // eslint-disable-line


