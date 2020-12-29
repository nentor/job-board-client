import Cookies from 'js-cookie'
import { useQuery } from 'react-query'

export const useAuthenticated = () => {
  return useQuery('is-authenticated', () => {
    const token = Cookies.get('token')
    return token ? true : false
  })
}
