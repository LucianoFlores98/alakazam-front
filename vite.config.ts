import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  preview: {
   port: 3000,
   strictPort: true,
  },
  server: {
   port: 3000,
   strictPort: true,
   host: true,
   watch:{
    usePolling: true
   }
  },
  build: { 
    // Para resolver la advertencia del chunking al buildear
    chunkSizeWarningLimit: 1600, 
    rollupOptions: {
    output:{
        manualChunks(id) {
            if (id.includes('node_modules')) {
                return id.toString().split('node_modules/')[1].split('/')[0].toString();
            }
        }
    }
} }
})
