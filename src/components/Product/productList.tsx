import { CustomCard } from '@components'
import { useNavigate } from 'react-router-dom'

export const ProductList = ({ item }: any) => {
  const navigate = useNavigate()

  const handle = () => {
    navigate(`/orders/${item.slug}`, { state: { item } })
  }
  return (
    <CustomCard
      className="rounded-1 mb-4"
      classHeader="d-none"
      classImg="imagen object-fit-contain ratio-1 p-2"
      classText="text-green-800 bg-teal-100 d-inline-block text-xs"
      classFooter="d-none"
      src={item.img}
      text='FREE SHIPPING'
    >
      <p className="text-900 text-underline-hover text-clamp text-xs pt-3 cursor-pointer" onClick={handle}>
        {item.name}
      </p>

      <div className="pt-3 text-600">
        <span className="text-xs">U$S </span>
        <span>{item.price}</span>
      </div>
    </CustomCard>
  )
}
