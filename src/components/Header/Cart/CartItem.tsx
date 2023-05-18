import { useNavigate } from 'react-router-dom'
import { LazyImage, Price } from '@components'
import { CartItemProps } from '@types'
import { useApp } from '@context'

export const CartItem = ({ product, handleClose, showAddCart }: CartItemProps) => {
  const { addCart, deleteCart } = useApp()
  const navigate = useNavigate()

  const handle = () => {
    handleClose && handleClose()
    navigate(`/product/${product.slug}`)
  }

  return (
    <>
      <li className="cart__item">
        <figure>
          <LazyImage src={product.images[0]} alt={product.title} />
        </figure>

        <div className=" d-flex flex-column justify-content-between">
          <span onClick={handle} className="text-900 text-underline-hover cursor-pointer text-clamp">
            {product.description}
          </span>
          <div className="pt-2">
            <span className="pt-2 fw-semibold">{product.quantity}x</span>
            {showAddCart && (
              <span className="ms-3 px-2 border border-success rounded-1 cursor-pointer">
                <i className="bi bi-plus text-green-500 fw-bold" onClick={() => addCart(product)}></i>
              </span>
            )}
          </div>
        </div>

        <div className=" d-flex flex-column justify-content-between align-items-end">
          <span className="cursor-pointer" onClick={() => deleteCart(product.id)}>
            <i className="bi bi-trash fs-5 text-red-400"></i>
          </span>
          <Price className="text-600" price={product.price} />
        </div>
      </li>
    </>
  )
}
