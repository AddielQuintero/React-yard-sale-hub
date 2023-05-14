// import { DefaultAuthConfigItem, TAuthConfigItem } from './Auth.type'
import { TProduct } from './Product.type'
// import { DefaultPermissions, TPermissions, TUser } from './User.type'

export interface AppChildrenProps {
  children: React.ReactNode
}

export interface TAppContext {
  // user: TUser | null
  // permissions: TPermissions
  // AuthConfigItem: TAuthConfigItem
  cart: TProduct[]
  cartPrice: number
  products: TProduct[]
  addCart: (newProduct: TProduct) => void
  // login: (userName: string) => void
  // logout: () => void
}

export const DefaultContext = {
  // user: null,
  cart: [],
  cartPrice: 0.00,
  products: [],
  // permissions: DefaultPermissions,
  // AuthConfigItem: DefaultAuthConfigItem,
  // login: () => {},
  // logout: () => {},
  addCart: () => {},
}
