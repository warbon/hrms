
export default defineNuxtPlugin((nuxtApp) => {
    // Access the authentication token stored in localStorage
    //const token = localStorage.getItem('auth_token')
  
    // Set the authentication token on every request made by the Apollo Client
    nuxtApp.hook('apollo:auth', ({ token }) => {
      token.value = '' //  token
    })
  })