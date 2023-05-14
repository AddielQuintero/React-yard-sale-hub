import { CartListProps } from '@types'
import { CartItem } from '..'

export const CartList = ({ cart, className, handleClose }: CartListProps) => {
  return (
    <div className={`order ${className}`}>
      <ul className="order__container">
        {cart.map((product, index) => (
          <CartItem product={product} handleClose={handleClose} key={`${product.id}-${index}`} />
        ))}
      </ul>
    </div>
  )
}
