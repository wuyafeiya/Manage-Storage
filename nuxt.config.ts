import { _none } from "#tailwind-config/theme/animation";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxt/ui', '@nuxtjs/tailwindcss', '@pinia/nuxt'],
  colorMode:{
    preference: 'light',
    fallback: 'light',
  },
  imports:{
    presets:[
      {
        from :"shikiji",
        imports: ['codeToHtml']
      }
    ]
  }
})
