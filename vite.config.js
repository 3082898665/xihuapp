import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import mkcert from 'vite-plugin-mkcert'
import { visualizer } from 'rollup-plugin-visualizer'
import externalGlobals from 'rollup-plugin-external-globals';
const globals = externalGlobals({
  'echarts': 'echarts',
  'agora-rtc-sdk-ng': 'agora-rtc-sdk-ng'
});
// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      server: {
        https: true
      },
      external: ['echarts', 'agora-rtc-sdk-ng'],
      plugins: [globals],
      output: {
        manualChunks(id) {
          if (id.includes('src')) {
            return '__vender_libs'
          }

        }
      }

    }
  },
  plugins: [react(), mkcert(), visualizer()],

})
