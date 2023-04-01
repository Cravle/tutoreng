import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'
import tsconfigPaths from 'vite-tsconfig-paths'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr(), tsconfigPaths()],

  server: {
    port: 8000,
  },
  optimizeDeps: {
    include: ['@tutoreng/db', '@tutoreng/shared'],
  },
})
