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
  taxes: number
  totalPrice: number
  products: TProduct[]
  addCart: (newProduct: TProduct) => void
  deleteCart: (productId: number) => void
  // login: (userName: string) => void
  // logout: () => void
}

export const DefaultContext = {
  // user: null,
  // permissions: DefaultPermissions,
  // AuthConfigItem: DefaultAuthConfigItem,
  cart: [],
  cartPrice: 0.0,
  taxes: 0.0,
  totalPrice: 0.0,
  products: [],
  addCart: () => {},
  deleteCart: () => {},
  // login: () => {},
  // logout: () => {},
}
