import { FormEventHandler } from 'react'
import { Container, Row } from 'react-bootstrap'
import { useNavigate, useLocation, NavLink } from 'react-router-dom'
import { CustomButton, CustomForm, CustomInput } from '../../components'
import logo from '../../assets/logo_yard_sale.svg'

export const Login = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event: any) => {
    event.preventDefault()
    // await app.login(userName)
    // console.log()
    navigate(location.state?.prevUrl ?? -1)
  }
  return (
    <Container className="login">
      <Row>
        <CustomForm action="#" method="POST" onSubmit={handleSubmit} className="w-24">
          <div className="d-flex justify-content-center mb-5">
            <img src={logo} alt="logo" className=" " width={150} />
          </div>
          <div className="text-center mb-3">
            <h5 className="title">Enter your credentials</h5>
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
            <CustomButton type="submit" className="btn btn-success border-none text-light fw-bolder py-3">
              Log in
            </CustomButton>
          </div>

          <p className="forgot-password text-right">
            <NavLink to="/resetPassword" className="text-green-400 text-decoration-none">
              Forgot password?
            </NavLink>
          </p>
          <div className="d-grid mt-5 mb-3">
            <NavLink to="/signUp" className="btn border-success  text-green-500 py-3">
              Sign up
            </NavLink>
          </div>
        </CustomForm>
      </Row>
    </Container>
  )
}
