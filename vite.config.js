import { defineConfig } from 'vite'
import React from "@vitejs/plugin-react"

// https://vitejs.dev/config/
export default defineConfig({
  base: '/todo-list/',
  plugins: [React()],
  
});


// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react-swc'

// // https://vitejs.dev/config/
// export default defineConfig({
//   base: '/portfolio/',
//   plugins: [react()],
// })
