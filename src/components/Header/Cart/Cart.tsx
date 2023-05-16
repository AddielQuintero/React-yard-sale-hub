import { useNavigate } from 'react-router-dom'
import { CustomButton, CustomCanvas, CartList, Price } from '@components'
import { useToggle } from '@hooks'
import { useApp } from '@context'

export const Cart = () => {
  const { show, handleShow, handleClose } = useToggle()
  const { cart, cartPrice } = useApp()
  const navigate = useNavigate()

  const handlerCanvas = () => {
    handleClose()
    navigate('/orders')
  }

  // console.log(`Cart: ${cartPrice}`)

  return (
    <div className="cart">
      <div
        onClick={handleShow}
        className="cart__shopping d-flex justify-content-center align-items-center cursor-pointer ms-3"
      >
        <i className="bi bi-cart2 fs-5 d-flex"></i>
        <div className="cart__count text-xs bg-green-500">{cart.length}</div>
      </div>

      <CustomCanvas show={show} handleClose={handleClose} title="My Orders">
        <CartList cart={cart} handleClose={handleClose} />
        <div className="cart__subtotal">
          <div className="cart__subtotal-wrapper">
            <span>Subtotal products</span>
            <Price className="fw-semibold text-800" price={cartPrice} />
          </div>
          <CustomButton className="btn btn-success text-light fw-bolder py-3" onClick={handlerCanvas}>
            Checkout
          </CustomButton>
        </div>
      </CustomCanvas>
    </div>
  )
}
