import { Col, Container, Row } from 'react-bootstrap'
import { PaymentMethods, ProductImage, ProductInfo, ProductPrice } from '@components'

export const Product = ({ state }: any) => {
  const { item } = state

  return (
    <Container className="product">
      <Row>
        <Col md={4} lg={3} className="mb-4">
          <ProductImage src={item.img} />
        </Col>
        <Col md={4} lg={6} className="mb-4">
          <ProductInfo name={item.name} />
        </Col>
        <Col md={4} lg={3} className="mb-4">
          <Row>
            <Col xs={12}>
              <ProductPrice price={item.price} />
            </Col>
            <Col xs={12}>
              <PaymentMethods />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  )
}
