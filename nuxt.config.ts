// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-16',
      title: 'HRMS',
      meta: [
        { name: 'description', content: 'HR Management Solutions' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }
      ],
      link: [
        {
          rel: 'stylesheet',
          href:
            'https://fonts.googleapis.com/css?family=Open+Sans:400,600,700&display=swap',
        },
      ],
      // bodyAttrs: {
      //   class: 'leading-normal tracking-normal text-white gradient'
      // },
      htmlAttrs: {
        lang: 'en',
       // class: 'scroll-smooth'
      },
      script: [
        // { src: '~/assets/js/main.js', type: 'text/javascript' },
       //{ src: 'https://cdn.tailwindcss.com' },
      ],
      
    }
},

css: ['~/assets/css/main.css'],

    modules: [
      'nuxt-quasar-ui',
      '@nuxtjs/apollo',
      '@pinia/nuxt', 
      '@pinia-orm/nuxt'
    ],
    typescript: {
      strict: true
    },

    // define Quasar related config here...
    quasar: {
        plugins: [
          'BottomSheet',
          'Dialog',
          'Loading',
          'LoadingBar',
          'Notify',
          'Dark',
        ],
        extras: {
          //font: 'roboto-font',
          fontIcons: ['material-icons', 'material-icons-outlined'],
          
        },
    },
    
    // define Nuxt Apollo related config here...
    apollo: {
      clients: {
        default: {
          httpEndpoint: 'http://api.acware.test/graphql',
          typeDefs: [
            '~/graphql/**/*.gql', // Load all .gql files in the graphql directory and its subdirectories
          ],
        }
      },
    },
    

    // define Pinia ORM related config here...
    // piniaOrm: {
    //   autoImports: [
    //     // automatically imports `useRepo`
    //     'useRepo', // import { useRepo } from 'pinia-orm'
    //     ['useRepo', 'usePinaRepo'], // import { useRepo as usePinaRepo } from 'pinia-orm'
    //   ],
    // },

  });
