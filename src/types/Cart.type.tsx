import { TCategory } from '.'

export interface TCart {
  id: number
  title: string
  price: number
  description: string
  images: string[]
  category: TCategory
  creationAt: Date
  updatedAt?: Date
  author: string
  slug: string
  condition: string
  refund: string
  weight: number
  store: string
  availability: string
  rate: number
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
  rate: number
  reviews: number
  text?: string
  className?: string
}
