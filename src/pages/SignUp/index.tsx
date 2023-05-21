import { FormEventHandler } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { CustomButton, CustomForm, CustomInput } from '@components'
import logo from '@assets/logo_yard_sale.svg'

export const SignUp = () => {
  const navigate = useNavigate()
  // const location = useLocation()

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event: any) => {
    event.preventDefault()
    // await app.login(userName)
    // console.log()
    navigate('/')
  }

  return (
    <Container className="signUp">
      <Row>
        <Col className="w-24">
          <CustomForm action="#" method="POST" onSubmit={handleSubmit}>
            <div className="d-flex justify-content-center mb-5">
              <img src={logo} alt="logo" className=" " width={150} />
            </div>
            <div className="text-center mb-3">
              <h5 className="title">Create a new account</h5>
            </div>
            <div className="mb-3">
              <CustomInput
                labelText="Name"
                labelClassName="fw-semibold small"
                type="text"
                className="form-control bg-200 border-0 focus-ring focus-ring-light py-3"
                placeholder="Name"
              />
            </div>
            <div className="mb-3">
              <CustomInput
                labelText="Email address"
                labelClassName="fw-semibold small"
                type="email"
                className="form-control bg-200 border-0 focus-ring focus-ring-light py-3"
                placeholder="Enter email"
              />
            </div>
            <div className="mb-3">
              <CustomInput
                labelText="Password"
                labelClassName="fw-semibold small"
                type="password"
                className="form-control bg-200 border-0 focus-ring focus-ring-light py-3"
                placeholder="Enter password"
              />
            </div>

            <div className="d-grid mt-5 mb-3">
              <CustomButton type="submit" className="btn border-none text-light fw-bolder bg-green-500 py-3">
                Create
              </CustomButton>
            </div>
          </CustomForm>
        </Col>
      </Row>
    </Container>
  )
}
