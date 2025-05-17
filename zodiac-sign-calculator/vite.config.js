import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  root: './', // Ensure the root is set correctly
  publicDir: 'public', // Ensure the public directory is correctly referenced
});