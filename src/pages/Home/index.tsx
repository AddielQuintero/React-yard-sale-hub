import { ProductList } from '@components'
import { Col, Container, Row } from 'react-bootstrap'

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

export const Home = () => {
  return (
    <Container className='home'>
      <Row>
        {items.map((item: any) => (
          <Col md={3} lg={2} key={item.slug}>
            <ProductList item={item} />
          </Col>
        ))}
      </Row>
    </Container>
  )
}
