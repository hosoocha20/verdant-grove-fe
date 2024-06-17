import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(() => {
  const config = {
    base: `/verdant-grove-fe/`,
    plugins: [react()],
  };

  return config;
});
