import { useNavigate } from 'react-router-dom'
import { Price } from '@components'
import { CartItemProps } from '@types'

export const CartItem = ({ product, handleClose }: CartItemProps) => {
  const navigate = useNavigate()

  const handle = () => {
    handleClose && handleClose()
    navigate(`/product/${product.slug}`)
  }

  return (
    <>
      <li className="order__container-item">
        <figure>
          <img src={product.images[0]} alt="" />
        </figure>

        <div className=" d-flex flex-column justify-content-between">
          <span onClick={handle} className="text-900 text-underline-hover cursor-pointer text-clamp">
            {product.description}
          </span>
          <span className="fw-semibold">1x</span>
        </div>

        <div className=" d-flex flex-column justify-content-between align-items-end">
          <span className="cursor-pointer">
            <i className="bi bi-trash fs-5 "></i>
          </span>
          <Price className="text-600" price={product.price} />
        </div>
      </li>
    </>
  )
}
