import { CustomCard, Price } from '@components'
// import { useNavigate } from 'react-router-dom'
import { Col } from 'react-bootstrap'

const items = [
  {
    id: 1,
    name: 'ARCTIC MX-4 (incluye espátula, 4 g) - Pasta térmica de alto rendimiento para todos los procesadores (CPU, GPU - PC, PS4, XBOX), conductividad térmica muy alta, larga duración, aplicación segura, no conductora',
    slug: 'ARCTIC-MX-4-(incluye espátula,-4-g)',
    price: 10.32,
    img: 'https://m.media-amazon.com/images/I/61fpmJ4k5aL._AC_SL1500_.jpg',
  },
  {
    id: 2,
    name: 'Reloj inteligente KALINCO, rastreador de actividad física con monitor de frecuencia cardíaca, presión arterial y oxígeno en sangre, reloj inteligente con pantalla táctil de 1,4 pulgadas para mujeres y hombres, compatible con Android, iPhone e iOS',
    slug: 'Reloj-inteligente-KALINCO',
    price: 30.47,
    img: 'https://m.media-amazon.com/images/I/61zRr8F0u9L._AC_SL1500_.jpg',
  },
]

export const ProductList = () => {
  // const navigate = useNavigate()

  const handle = () => {
    //   navigate(`/orders/${item.slug}`, { state: { item } })
  }

  return (
    <>
      {items.map((item: any) => (
        <Col md={3} lg={2} key={item.slug}>
          <CustomCard
            className="rounded-1 mb-4"
            classImg="object-fit-contain ratio-1 p-2"
            classText="text-green-800 bg-teal-100 d-inline-block text-xs"
            classHeader="d-none"
            classTitle="d-none"
            classFooter="d-none"
            src={item.img}
            text="FREE SHIPPING"
          >
            <p
              className="text-900 text-underline-hover text-clamp text-xs pt-3 cursor-pointer"
              onClick={handle}
            >
              {item.name}
            </p>
            <div className="pt-3 text-600">
              <Price className="text-xs" classPrice="fs-6" price={item.price} />
            </div>
          </CustomCard>
        </Col>
      ))}
    </>
  )
}
