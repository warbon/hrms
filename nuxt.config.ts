// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
      'nuxt-quasar-ui',
      '@nuxtjs/apollo',
      '@pinia/nuxt', 
      '@pinia-orm/nuxt'
    ],

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
          font: 'roboto-font',
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
