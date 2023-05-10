import { useParams } from 'react-router-dom'

export const OrdersDetail = () => {
  const { slug } = useParams()

  console.log(slug)
  return (
    <>
      <div>OrdersDetail</div>
      <div>{slug}</div>
    </>
  )
}
