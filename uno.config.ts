// uno.config.ts
import { defineConfig, presetAttributify, presetUno, presetIcons ,presetWebFonts   } from 'unocss'


export default defineConfig({
    theme: {
        colors: {
          'neutral': '#140F0A',
          'primary': '#BF9D7D',
        },
      },
      shortcuts: {
        'form-control': 'outline-hidden'
      },
      presets: [presetUno(), presetAttributify(), presetIcons({scale: 1.2, warn: true}),presetWebFonts({
        provider: 'google',
        fonts: {
          sans: 'Noto Serif TC',
        },
      }) ],
})