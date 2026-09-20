import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // Deployment base path; GitHub Pages project sites serve from /<repo-name>/.
  // Set via BASE_PATH in the deploy workflow ('/' locally and in dev).
  base: process.env.BASE_PATH ?? '/',
  plugins: [react()],
})
