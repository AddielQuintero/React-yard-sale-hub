import { Container, Row, Col } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import { CustomToast, ProductPayment, ProductImage, ProductInfo, ProductOptions } from '@components'
import { NotFound } from '@pages'
import { useApp } from '@context'
import { useToggle } from '@hooks'

export const ProductDetail = () => {
  const { products, addCart } = useApp()
  const { show, handleShow, handleClose } = useToggle()
  const [counter, setCounter] = useState(0)
  const { slug } = useParams()
  const product = products.find((product) => product.slug === slug)

  if (!product || !slug) return <NotFound />

  const handleAdd = () => {
    // console.log('adding cart')
    addCart(product)
    handleShow()
    setCounter(counter + 1)
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
              <ProductOptions price={product.price} handleAdd={handleAdd} />
            </Col>
            <Col xs={12}>
              <ProductPayment />
            </Col>
          </Row>
        </Col>

        <CustomToast
          counter={counter}
          setCounter={setCounter}
          show={show}
          handleClose={handleClose}
          text="Product added to cart"
        />
      </Row>
    </Container>
  )
}
