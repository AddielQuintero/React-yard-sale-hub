import { Col, Container, Row } from 'react-bootstrap'
import { InfoProps } from '@types'
import { Rating } from '@components'

export const ProductInfo = (props: InfoProps) => {
  const { description, rate, reviews, condition, refund, weight, store, availability } = props

  return (
    <Container className=" d-flex flex-column justify-content-between">
      <p className="text-900 ">{description}</p>
      <Rating className="pt-2" rate={rate} reviews={reviews} text='Reviews' />
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
          <span className="fw-semibold">Product of</span>
          <br />
          <span>{store}</span>
        </Col>
      </Row>
    </Container>
  )
}
