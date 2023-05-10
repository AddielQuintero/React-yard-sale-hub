import { useState } from 'react'
// import UserService from './User.service'
import { TAuthConfig, TAuthConfigItem, TPermissions, TUser, DefaultPermissions, verifyPermission} from '../types'

export const AuthService = () => {
  const [user, setUser] = useState<TUser | null>(null)
  const [permissions, setPermissions] = useState<TPermissions>(DefaultPermissions)

  const login = () => {
    console.log('login')
  }

  const logout = () => {
    console.log('logout')
  }

  const AuthConfig: TAuthConfig = {
    loggedIn: {
      to: '/login',
      linkText: 'Log in',
      handleClick: undefined,
      icon: <span aria-hidden="true">&rarr;</span>,
    },

    loggedOut: {
      to: '/login',
      linkText: 'Log out',
      handleClick: logout,
      icon: <i className="bi bi-arrow-right"></i>,
    },
  }

  const AuthConfigItem: TAuthConfigItem = !user ? AuthConfig.loggedIn : AuthConfig.loggedOut

  // const auth: Auth = {
  //   user,
  //   permissions,
  //   AuthConfigItem,
  //   login,
  //   logout,
  // }

  // console.log(auth)
  // return auth
  return { user, permissions, AuthConfigItem, login, logout }
}
