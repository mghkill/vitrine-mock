import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'html-transform',
      transformIndexHtml(html) {
        return html.replace(/<title>.*<\/title>/, '<title>Loja Vitrine</title>');
      },
    },
    viteStaticCopy({
      targets: [
        {
          src: '_redirects', // arquivo de redirecionamento na raiz
          dest: '.',         // será copiado para a raiz de `dist`
        },
      ],
    }),
  ],
  optimizeDeps: {
    exclude: ['lucide-react'],
    include: ["react-slick"]
  },
  build: {
    outDir: 'dist',
  },
});
