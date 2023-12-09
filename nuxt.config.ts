// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/google-fonts',
    '@nuxt/ui',
    '@element-plus/nuxt',
    '@vueuse/nuxt',
    '@unocss/nuxt'
  ],
  googleFonts: {
    families: {
      // a simple name
      Nunito: true,
      Lexend: true,
      'Dela+Gothic+One': true,
      'Nunito+Sans': true
    }
  },
  components: [
    {
      path: '~/components', // will get any components nested in let's say /components/nested
      pathPrefix: false,
    },
  ],
  css: [
    'bootstrap-icons/font/bootstrap-icons.css',
  ],
})
