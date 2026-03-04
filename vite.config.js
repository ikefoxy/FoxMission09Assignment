import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Vite config for this React assignment project.
export default defineConfig({
  // Enables React JSX transform and fast refresh during development.
  plugins: [react()],
  // Add future build/dev settings here if the assignment grows.
})
