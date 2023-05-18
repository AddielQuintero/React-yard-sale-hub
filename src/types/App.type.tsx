// import { DefaultAuthConfigItem, TAuthConfigItem } from './Auth.type'
import { TCart } from '@types'
import { DefaultFilters, TFilters, TProduct } from './Product.type'
// import { DefaultPermissions, TPermissions, TUser } from './User.type'

export interface AppChildrenProps {
  children: React.ReactNode
}

export interface TAppContext {
  // user: TUser | null
  // permissions: TPermissions
  // AuthConfigItem: TAuthConfigItem
  cart: TCart[]
  countCartItems: number
  cartPrice: number
  taxes: number
  totalPrice: number
  products: TProduct[]
  filters: TFilters
  productFiltered: TProduct[]
  setFilters: (value: React.SetStateAction<TFilters>) => void
  addCart: (prevState: TProduct) => void
  deleteCart: (productId: number) => void
  // login: (userName: string) => void
  // logout: () => void
}

export const DefaultContext = {
  // user: null,
  // permissions: DefaultPermissions,
  // AuthConfigItem: DefaultAuthConfigItem,
  cart: [],
  countCartItems: 0,
  cartPrice: 0.0,
  taxes: 0.0,
  totalPrice: 0.0,
  products: [],
  productFiltered: [],
  filters: DefaultFilters,
  setFilters: () => {},
  addCart: () => {},
  deleteCart: () => {},
  // login: () => {},
  // logout: () => {},
}
