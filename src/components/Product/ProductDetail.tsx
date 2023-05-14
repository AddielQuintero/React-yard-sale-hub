import { Col, Container, Row } from 'react-bootstrap'
import { PaymentMethods, ProductImage, ProductInfo, ProductPrice } from '@components'
import { useApp } from '@context'
import { useParams } from 'react-router-dom'
import { NotFound } from '@pages'
// import { TProduct } from '@types'
// import { TProduct } from '@types'

export const ProductDetail = () => {
  const { products, addCart } = useApp()
  const { slug } = useParams()
  // console.log(slug)

  const product = products.find((product) => product.slug === slug)
  // console.log(product)

  if (!product || !slug) return <NotFound />

  // console.log(cart)

  const handleAdd = () => {
    console.log('adding cart')
    addCart(product)
  }

  return (
    <Container className="product">
      <Row>
        <Col md={4} lg={3} className="mb-4">
          <ProductImage src={product.images[0]} />
        </Col>
        <Col md={4} lg={6} className="mb-4">
          <ProductInfo
            description={product.description}
            condition={product.condition}
            refund={product.refund}
            weight={product.weight}
            store={product.store}
            availability={product.availability}
          />
        </Col>
        <Col md={4} lg={3} className="mb-4">
          <Row>
            <Col xs={12}>
              <ProductPrice price={product.price} handleAdd={handleAdd} />
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
