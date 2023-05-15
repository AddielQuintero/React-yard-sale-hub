import { TProduct } from '.'

// CartList
export interface CartListProps {
  cart: TProduct[]
  className?: string
  handleClose?: () => void
}

export interface CartItemProps {
  product: TProduct
  handleClose?: () => void
}
