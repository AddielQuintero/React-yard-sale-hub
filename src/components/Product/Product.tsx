import { CustomCard } from '@components'
import { Col, Container, Row } from 'react-bootstrap'
import visa from '@assets/c-visa.svg'
import amex from '@assets/c-amex.svg'
import masterc from '@assets/c-masterc.svg'
import paypal from '@assets/c-paypal.svg'
import discover from '@assets/discover-logo.svg'
import dinersclub from '@assets/c-dinersclub.svg'

export const Product = ({ state }: any) => {
  const { item } = state

  return (
    <Container className="product">
      <Row>
        <Col md={4} lg={3} className="mb-4">
          <figure>
            <img src={item.img} alt="" />
          </figure>
        </Col>
        <Col md={4} lg={6} className="mb-4">
          <Container className=" d-flex flex-column justify-content-between">
            <p className="text-900">{item.name}</p>
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
        </Col>
        <Col md={4} lg={3} className="mb-4">
          <Row>
            <Col xs={12}>
              <CustomCard
                className="rounded-1 mb-4"
                classHeader="d-none"
                classFooter="d-none"
                classTitle="text-green-700 bg-teal-100 d-inline-block text-xs"
                title="FREE SHIPPING"
                hr={true}
                links={[
                  {
                    to: '/',
                    label: 'Buy Now',
                    classLink: 'btn btn-success d-flex justify-content-center text-light ',
                  },
                  {
                    to: '/',
                    label: 'Add to Cart',
                    classLink: 'btn border-success d-flex justify-content-center text-green-500 mt-3 ms-0',
                  },
                ]}
              >
                <span className="text-600">U$S {item.price}</span>
                <div className="d-flex align-items-center gap-3 pt-3 pb-4">
                  <span>Amount</span>
                  <span className="fw-semibold border rounded-1 px-4 py-1">1</span>
                </div>
              </CustomCard>
            </Col>
            <Col xs={12}>
              <CustomCard classHeader="d-none" classFooter="d-none" title="Payment methods">
                <span className="text-500 small">Credit and debit cards or via PayPal.</span>
                <div className="cards__types pt-2">
                  <div className="cards__types-container">
                    <img src={visa} alt="" />
                  </div>
                  <div className="cards__types-container">
                    <img src={paypal} alt="" />
                  </div>
                  <div className="cards__types-container">
                    <img src={masterc} alt="" />
                  </div>
                  <div className="cards__types-container">
                    <img src={amex} alt="" />
                  </div>
                  <div className="cards__types-container">
                    <img src={dinersclub} alt="" />
                  </div>
                  <div className="cards__types-container">
                    <img src={discover} alt="" />
                  </div>
                </div>
              </CustomCard>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  )
}
