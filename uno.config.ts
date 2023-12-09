// uno.config.ts
import { defineConfig } from 'unocss'
import presetIcons from '@unocss/preset-icons'

export default defineConfig({
    presets: [
        presetIcons({
          collections: {
            svgspinners: () => import('@iconify-json/svg-spinners/icons.json').then(i => i.default),
            ic: () => import('@iconify-json/ic/icons.json').then(i => i.default),
          }
        })
      ]
})
