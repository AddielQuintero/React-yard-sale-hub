import { Col, Container, Row } from 'react-bootstrap'

export const ProductInfo = ({ name }: any) => {
  return (
    <Container className=" d-flex flex-column justify-content-between">
      <p className="text-900 ">{name}</p>
      <Row className="pt-5">
        <Col xs={6} className="pb-2 small">
          <span className="fw-semibold">Availability</span>
          <br />
          <span>In stock</span>
        </Col>
        <Col xs={6} className="pb-2 small">
          <span className="fw-semibold">Weight with packaging</span>
          <br />
          <span>0.11 kg</span>
        </Col>
        <Col xs={6} className="pb-2 small">
          <span className="fw-semibold">Return</span>
          <br />
          <span>Yes</span>
        </Col>
        <Col xs={6} className="pb-2 small">
          <span className="fw-semibold">Condition</span>
          <br />
          <span>New</span>
        </Col>
        <Col xs={6} className="pb-2 small">
          <span className="fw-semibold">Product of</span>
          <br />
          <span>Amazon</span>
        </Col>
      </Row>
    </Container>
  )
}
