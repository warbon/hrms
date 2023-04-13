import gqlUser from '~/graphql/user.gql'
import { ref, computed } from 'vue'

// const query = gql`
//   $gqlUser (
//     $email: String!
//     $password: String!
//     $deviceId: String!
//   ) {
//     loginUser (
//       email: $email
//       password: $password
//       deviceId: $deviceId
//     ) {
//       token
//       user {
//         id
//         name
//         email
//       }
//     }
//   }
// `

const variables = ref({
  email: '',
  password: ''
})

export const useSigninUserMutation = () => {
  const $q = useQuasar()
  const platform = $q.platform.is

  const { mutate, onDone, onError, loading, error } = useMutation(
    gql`${gqlUser.loginUser}`,
    () => ({
      variables: {
        email: variables.value.email,
        password: variables.value.password,
        deviceId: `${platform.platform}.${platform.name}.${platform.version}`
      }
    })
  )

  const validationErrors = computed(() => ({
    email: error?.value?.graphQLErrors[0]?.extensions?.validation ?? '',
    password: error?.value?.graphQLErrors[0]?.extensions?.validation ?? ''
  }))

  onError(() => {
    const gqlError = error?.value?.graphQLErrors[0]
    if ((gqlError?.extensions?.reason ?? null) === 'credentials' && gqlError?.message.length) {
      $q.notify({
        message: gqlError.message,
        icon: 'fa-solid fa-key',
        color: 'negative'
      })
    }
  })

  return {
    mutate,
    onDone,
    onError,
    loading,
    error,
    variables,
    validationErrors
  }
}
