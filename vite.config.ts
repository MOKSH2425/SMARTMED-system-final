import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // Allow this ngrok host so the dev server accepts proxied requests
    allowedHosts: [
      'karri-unripe-christeen.ngrok-free.dev',
    ],
  },
})
