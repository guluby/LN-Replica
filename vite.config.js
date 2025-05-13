import { defineConfig } from 'vite'
    import react from '@vitejs/plugin-react'
    export default defineConfig({
      server: {
        host: "0.0.0.0",    
        port: 8080,
        allowedHosts: ['livenation-front-end.ashymeadow-4ce473cb.westus2.azurecontainerapps.io'],
      },
      preview: {
        port: 4173
      },
      plugins: [react()],
    });
