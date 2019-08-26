import ru from 'vuetify/es5/locale/ru'
import prodEnv from './env'
import devEnv from './dev-env'

process.env.NODE_ENV = process.env.NODE_ENV || 'production'

const env = process.env.NODE_ENV === 'production' ? prodEnv : devEnv

export default {
  env,
  mode: 'universal',
  /*
   ** Router
   */
  router: {
    scrollBehavior (to, from, savedPosition) {
      if (to.hash) {
        return { selector: to.hash }
      } else if (savedPosition) {
        return savedPosition
      } else {
        return { x: 0, y: 0 }
      }
    }
  },
  /*
   ** Headers of the page
   */
  head: {
    titleTemplate: '%s - ' + process.env.npm_package_name,
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }],
    noscript: [
      {
        innerHTML:
          '<img src="https://vk.com/rtrg?p=VK-RTRG-393005-7wBtY" style="position:fixed; left:-999px;" alt=""/>'
      },
      {
        innerHTML:
          '<div><img src="https://mc.yandex.ru/watch/54209695" style="position:absolute; left:-9999px;" alt="" /></div>'
      }
    ],
    script: [{ src: '/vk.js' }, { src: '/yametrika.js' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins and directives and filters to load before mounting the App
   */
  plugins: [
    '~/plugins/directives_filters.js',
    { src: '~/plugins/ya_metrika.js', ssr: false }
  ],
  /*
   ** Nuxt.js dev-modules
   */
  devModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    '@nuxtjs/vuetify'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios'
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    iconfont: 'mdi',
    lang: {
      locales: { ru },
      current: 'ru'
    },
    theme: {
      primary: '#5699FF',
      accent: '#ef4d37',
      secondary: '#343e55',
      info: '#5699FF',
      warning: '#b69768',
      error: '#EF4D37',
      success: '#85CA86',
      gold: '#b69768'
    }
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend (config, ctx) {}
  }
}
