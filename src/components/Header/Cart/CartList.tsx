import { CartListProps } from '@types'
import { CartItem } from '..'

export const CartList = ({ cart, className, handleClose }: CartListProps) => {
  // console.log(!cart.length)
  return (
    <div className={`cart__list ${className}`}>
      <ul className="cart__container">
        {!cart.length && <li className='fs-3 text-500 text-center'>You don't have any products in your cart.</li>}
        {cart.map((product, index) => (
          <CartItem product={product} handleClose={handleClose} key={`${product.id}-${index}`} />
        ))}
      </ul>
    </div>
  )
}
