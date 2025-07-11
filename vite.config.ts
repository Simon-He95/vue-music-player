import tailwindcss from '@tailwindcss/vite'
/// <reference types="vitest" />

import Vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import UnpluginClassExtractor from 'unplugin-class-extractor/vite'
import Components from 'unplugin-vue-components/vite'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import Pages from 'vite-plugin-pages'
import { name } from './package.json'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const base = '/'
  let plugins = [
    tailwindcss(),
    Vue(),
    AutoImport({
      imports: ['vue', 'vue-router'],
      dts: true,
    }),
    Pages(),
    Components(),
  ]

  let build: Record<string, any> = {
    target: 'es2015',
    cssTarget: 'chrome61',
  }

  if (mode === 'npm') {
    plugins = [
      tailwindcss(), // 添加 tailwindcss 插件以确保图标样式被正确处理
      Vue(),
      AutoImport({
        imports: ['vue', 'vue-router'],
        dts: true,
      }),
      Pages(),
      Components(),
      dts({
        outDir: 'dist/types',
        include: ['src/components/**/*'],
      }),
      UnpluginClassExtractor({
        output: 'dist/tailwind.ts',
        include: [
          /\/src\/components\/(?:[^/]+\/)*[^/]+\.vue(\?.*)?$/,
        ],
      }) as any,
    ]
    build = {
      target: 'es2015',
      cssTarget: 'chrome61',
      copyPublicDir: false,
      cssCodeSplit: false,
      lib: {
        entry: './src/components/exports.ts',
        formats: ['cjs', 'es'],
        name,
        fileName: 'index',
      },
      rollupOptions: {
        external: ['vue'],
        output: {
          assetFileNames: 'index.css',
          globals: {
            vue: 'Vue',
          },
          exports: 'named',
        },
      },
    }
  }

  return {
    base,
    plugins,
    build,
    resolve: {
      alias: {
        '@': '/src',
      },
    },
  }
})
