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
          <ProductImage src={product.thumbnail} alt={product.title} />
        </Col>
        <Col md={4} lg={6} className="mb-4">
          <ProductInfo
            title={product.title}
            description={product.description}
            rating={product.rating}
            reviews={product.reviews}
            condition={product.condition}
            refund={product.refund}
            weight={product.weight}
            brand={product.brand}
            availability={product.availability}
          />
        </Col>
        <Col md={4} lg={3} className="mb-4">
          <Row>
            <Col xs={12}>
              <ProductOptions stock={product.stock} price={product.price} handleAdd={handleAdd} />
            </Col>
            <Col xs={12}>
              <ProductPayment />
            </Col>
          </Row>
        </Col>

        <CustomToast
          className="bg-800"
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
