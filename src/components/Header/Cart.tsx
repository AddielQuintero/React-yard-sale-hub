import { useNavigate } from 'react-router-dom'
import { CustomButton, CustomCanvas, OrdersCart } from '..'
import { useCanvas } from '../../hooks'

export const Cart = () => {
  const { show, handleShow, handleClose } = useCanvas()
  const navigate = useNavigate()

  const handler = () => {
    handleClose()
    navigate('/orders')
  }

  return (
    <div className="cart">
      <div
        onClick={handleShow}
        className="cart__shopping d-flex justify-content-center align-items-center cursor-pointer ms-3"
      >
        <i className="bi bi-cart2 fs-5 d-flex"></i>
        <div className="cart__shopping-count small bg-green-500">2</div>
      </div>

      <CustomCanvas show={show} handleClose={handleClose} title="My Orders">
        <OrdersCart handleClose={handleClose} />
        <div className="cart__subtotal">
          <div className='cart__subtotal-wrapper'>
            <span>Subtotal products</span>
            <span className="fw-semibold text-800">U$S 560.00</span>
          </div>
          <CustomButton className="btn btn-success text-light fw-bolder py-3" onClick={handler}>
            Checkout
          </CustomButton>
        </div>
      </CustomCanvas>
    </div>
  )
}
