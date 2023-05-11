import { Col, Container, Row } from 'react-bootstrap'
import { useLocation, useNavigate } from 'react-router-dom'
import { Product } from '@components'

export const OrdersDetail = () => {
  const { state } = useLocation()
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
          <Product className="" state={state} />
        </Col>
      </Row>
    </Container>
  )
}
