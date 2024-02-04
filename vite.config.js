import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
   server: {
      proxy: {
         '/api': { // Targets all requests starting with '/api'
            target: 'https://www.swiggy.com/dapi/restaurants/list/v5?lat=20.2563462&lng=85.794416&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING',
            changeOrigin: true, 
            rewrite: (path) => path.replace(/^\/api/, ''), // Removes '/api' prefix
         },         
         '/menuApi': {
            target: "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=20.2563462&lng=85.794416&restaurantId=",
            changeOrigin: true, 
            rewrite: (path) => path.replace(/^\/menuApi/, ''),
         },
         
      },
   },
  plugins: [react()],
})
