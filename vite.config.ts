
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    sourcemap: false,
    minify: 'terser',
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'lucide-react'],
          ai: ['@google/genai']
        }
      }
    }
  },
  // Vercel will inject process.env.API_KEY during the build
  define: {
    'process.env.API_KEY': JSON.stringify(process.env.API_KEY)
  }
});
