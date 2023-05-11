import { Price } from '@components'
import { useNavigate } from 'react-router-dom'

export const Item = (props: any) => {
  const { item, handleClose } = props
  const navigate = useNavigate()

  const handle = () => {
    handleClose && handleClose()
    navigate(`/orders/${item.slug}`, { state: { item } })
  }

  return (
    <>
      <li className="order__container-item">
        <figure>
          <img src={item.img} alt="" />
        </figure>

        <div className=" d-flex flex-column justify-content-between">
          <span onClick={handle} className="text-900 text-underline-hover cursor-pointer text-clamp">
            {item.name}
          </span>
          <span className="fw-semibold">1x</span>
        </div>

        <div className=" d-flex flex-column justify-content-between align-items-end">
          <span className="cursor-pointer">
            <i className="bi bi-trash fs-5 "></i>
          </span>
          <Price className="text-600" price={item.price} />
        </div>
      </li>
    </>
  )
}
