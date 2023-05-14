import { Col, Container, Row } from 'react-bootstrap'
import { CustomButton, CustomCard, CustomInput, CartList } from '@components'
import { useApp } from '@context'

export const Orders = () => {
  const { cart, cartPrice } = useApp()
  // console.log(cart)


  return (
    <Container className="">
      <Row>
        <Col md={8}>
          <h5 className="py-3">Orders</h5>
          <CartList className="bg-100 rounded-1 p-4" cart={cart} />
        </Col>
        <Col md={4}>
          <CustomCard
            className="rounded-1 mt-4 mt-md-7"
            classHeader="d-none"
            classFooter="d-none"
            title="Total Purchase Summary:"
            hr={true}
            links={[
              {
                to: '',
                label: 'Buy Now',
                classLink: 'btn btn-success d-flex justify-content-center text-light ',
              },
            ]}
          >
            <ul className="purchase-summary-list">
              <li className="d-flex justify-content-end gap-5">
                <label>Products:</label> <span>U${cartPrice} </span>
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

          <CustomCard className="rounded-1 my-4" classHeader="d-none" classFooter="d-none" title="Promotion:">
            <div className="d-flex gap-2 mb-2">
              <CustomInput
                labelClassName="d-none"
                className="form-control bg-100 border focus-ring focus-ring-light py-1"
                type="text"
              />

              <CustomButton className="btn border-success  text-green-500">Apply</CustomButton>
            </div>

            <div className="bg-white border-top-0 d-flex justify-content-end gap-5">
              <strong>Total Discount:</strong> <strong>U$S 0.00 </strong>
            </div>
          </CustomCard>
        </Col>
      </Row>
    </Container>
  )
}
