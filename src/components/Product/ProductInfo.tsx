import { Col, Container, Row } from 'react-bootstrap'
import { InfoProps } from '@types'
import { Rating } from '@components'

export const ProductInfo = (props: InfoProps) => {
  const { title, description, rating, reviews, condition, refund, weight, brand, availability } = props

  return (
    <Container className=" d-flex flex-column justify-content-between">
      <h3 className="text-800 ">{title}</h3>
      <p className="text-700 ">{description}</p>
      <Rating className="pt-2" rating={rating} reviews={reviews} text='Reviews' />
      <Row className="pt-5">
        <Col xs={6} className="pb-2 small">
          <span className="fw-semibold">Availability</span>
          <br />
          <span>{availability}</span>
        </Col>
        <Col xs={6} className="pb-2 small">
          <span className="fw-semibold">Weight with packaging</span>
          <br />
          <span>{weight} kg</span>
        </Col>
        <Col xs={6} className="pb-2 small">
          <span className="fw-semibold">Return</span>
          <br />
          <span>{refund}</span>
        </Col>
        <Col xs={6} className="pb-2 small">
          <span className="fw-semibold">Condition</span>
          <br />
          <span>{condition}</span>
        </Col>
        <Col xs={6} className="pb-2 small">
          <span className="fw-semibold">Brand</span>
          <br />
          <span>{brand}</span>
        </Col>
      </Row>
    </Container>
  )
}
