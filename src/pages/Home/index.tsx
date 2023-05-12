import { ProductList } from '@components'
import { Container, Row } from 'react-bootstrap'

export const Home = () => {
  return (
    <Container className="home">
      <Row>
        <ProductList />
      </Row>
    </Container>
  )
}
