import { Container, Row, Col } from 'react-bootstrap'
import { CustomButton, CustomCard, CustomInput, CartList } from '@components'
import { useApp } from '@context'

export const Orders = () => {
  const { cart, cartPrice, taxes, totalPrice } = useApp()
  // console.log(cart)

  return (
    <Container className="orders">
      <Row>
        <Col md={8}>
          <h5 className="py-3">Orders</h5>
          <CartList className="bg-100 rounded-1 p-4" cart={cart} />
        </Col>
        <Col md={4}>
          <CustomCard
            className="border-0 shadow mt-4 mt-md-7"
            classHeader="d-none"
            classFooter="d-none"
            title="Promotion:"
          >
            <div className="d-flex gap-2 mb-2">
              <CustomInput
                labelClassName="d-none"
                className="form-control bg-200 border-0 focus-ring focus-ring-light py-1"
                type="text"
              />

              <CustomButton className="btn border-success  text-green-500">Apply</CustomButton>
            </div>

            <div className="bg-white border-top-0 d-flex justify-content-end gap-5">
              <strong>Total Discount:</strong> <strong className="w-40 text-end">U$S 0.00 </strong>
            </div>
          </CustomCard>

          <CustomCard
            className="border-0 shadow my-4"
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
            <ul className="orders__summary">
              <li className="d-flex justify-content-end gap-5">
                <label>Products:</label> <span className="text-end">U$S {cartPrice.toFixed(2)} </span>
              </li>
              <li className="d-flex justify-content-end gap-5">
                <label>Delivery:</label> <span className="text-end">U$S 0.00 </span>
              </li>
              <li className="d-flex justify-content-end gap-5">
                <label>Discount:</label> <span className="text-end">U$S 0.00 </span>
              </li>
              <li className="d-flex justify-content-end gap-5">
                <label>Taxes:</label> <span className="text-end">U$S {taxes.toFixed(2)} </span>
              </li>
              <hr />
              <li className="d-flex justify-content-end gap-5 pb-5">
                <strong>Total:</strong> <strong className="text-end">U$S {totalPrice.toFixed(2)} </strong>
              </li>
            </ul>
          </CustomCard>
        </Col>
      </Row>
    </Container>
  )
}
