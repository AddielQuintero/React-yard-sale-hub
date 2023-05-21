import { CustomButton } from '@components'
import { Col, Container, Row } from 'react-bootstrap'

export const Profile = () => {
  return (
    <Container className="login">
      <Row>
        <Col className="w-16">
          <div className=" mb-5">
            <h5 className="title">My account</h5>
          </div>
          <div className="mb-5">
            <label className="fw-semibold small" htmlFor="first-name(s)">
              First name(s)
            </label>
            <p className="subtitle text-400">John</p>
          </div>

          <div className="mb-5">
            <label className="fw-semibold small" htmlFor="first-name(s)">
              Last name(s)
            </label>
            <p className="subtitle text-400">Doe</p>
          </div>

          <div className="mb-5">
            <label className="fw-semibold small" htmlFor="first-name(s)">
              Email
            </label>
            <p className="subtitle text-400">John@gmail.com</p>
          </div>

          <div className="mb-5">
            <label className="fw-semibold small" htmlFor="first-name(s)">
              Password
            </label>
            <p className="subtitle text-400">******</p>
          </div>
          <div className="d-grid mt-5 mb-3">
            <CustomButton type="submit" className="btn border-success  text-green-500 py-3 fw-bolder">
              Edit
            </CustomButton>
          </div>
        </Col>
      </Row>
    </Container>
  )
}
