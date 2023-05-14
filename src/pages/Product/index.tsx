import { Col, Container, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { ProductDetail } from '@components'

export const Product = () => {
  const navigate = useNavigate()

  return (
    <Container>
      <Row>
        <Col>
          <div className="d-flex align-items-center gap-3">
            <span className="cursor-pointer" onClick={() => navigate(-1)}>
              <i className="bi bi-arrow-left-short fs-2"></i>
            </span>
            <h5 className="py-3 mb-0">OrdersDetail</h5>
          </div>
          <ProductDetail />
        </Col>
      </Row>
    </Container>
  )
}
