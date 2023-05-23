import { TProduct } from '@types'

export interface State {
  cart: TCart[]
  cartPrice: number
}

export type AddToCartAction = { type: 'ADD_TO_CART'; payload: TProduct }
export type SetCartAction = { type: 'SET_CART'; payload: TCart[] }
export type DeleteCartAction = { type: 'DELETE_CART'; payload: number }

export type Action = AddToCartAction | SetCartAction | DeleteCartAction

export interface TCart {
  id: number
  title: string
  price: number
  discountPercentage: number
  description: string
  thumbnail: string
  images?: string[]
  category: string
  slug: string
  condition: string
  refund: string
  weight: number
  brand: string
  availability: string
  rating: number
  reviews: number
  quantity: number
  stock: number
}

// CartList
export interface CartListProps {
  cart: TCart[]
  className?: string
  handleClose?: () => void
  showAddCart: boolean
}

export interface CartItemProps {
  product: TCart
  handleClose?: () => void
  showAddCart: boolean
}

export interface RatingProps {
  rating: number
  reviews: number
  text?: string
  className?: string
}
