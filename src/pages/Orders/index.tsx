import { Col, Container, Row } from 'react-bootstrap'
import { CustomButton, CustomCard, CustomInput, OrdersCart } from '../../components'

export const Orders = () => {
  return (
    <Container className="">
      <Row>
        <Col md={8}>
          <h5 className="py-3">Orders</h5>
          <OrdersCart className="bg-100 rounded-1 p-4" />
        </Col>
        <Col md={4}>
          <CustomCard
            className="rounded-1 mt-4 mt-md-7"
            classLink="buy-now-button btn btn-success d-flex justify-content-center text-light "
            classHeader="d-none"
            classFooter="d-none"
            title="Total Purchase Summary:"
            link="Buy Now"
          >
            <ul className="purchase-summary-list">
              <li className="d-flex justify-content-end gap-5">
                <label>Products:</label> <span>U$S 0.00 </span>
              </li>
              <li className="d-flex justify-content-end gap-5">
                <label>Delivery:</label> <span>U$S 0.00 </span>
              </li>
              <li className="d-flex justify-content-end gap-5">
                <label>Discount:</label> <span>U$S 0.00 </span>
              </li>
              <li className="d-flex justify-content-end gap-5">
                <label>Taxes:</label> <span>U$S 0.00 </span>
              </li>
              <hr />
              <li className="d-flex justify-content-end gap-5 pb-5">
                <strong>Total:</strong> <strong>U$S 0.00 </strong>
              </li>
            </ul>
          </CustomCard>

          <CustomCard className="rounded-1 my-4" classHeader="d-none" classFooter="d-none" title="Promoción:">
            <div className="d-flex gap-2 mb-2">
              <CustomInput
                labelClassName="d-none"
                className="form-control bg-100 border focus-ring focus-ring-light py-1"
                type="text"
              />

              <CustomButton className="btn border-success  text-green-500">Apply</CustomButton>
            </div>

            <div className="bg-white border-top-0 d-flex justify-content-end gap-5">
              <strong>Total de Descuento:</strong> <strong>U$S 0.00 </strong>
            </div>
          </CustomCard>
        </Col>
      </Row>
    </Container>
  )
}
