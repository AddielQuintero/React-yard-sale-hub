import { FormEventHandler } from 'react'
import { Container, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { CustomButton, CustomForm, CustomInput } from '@components'
import logo from '@assets/logo_yard_sale.svg'

export const ResetPassword = () => {
  const navigate = useNavigate()
  // const location = useLocation()

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event: any) => {
    event.preventDefault()
    // await app.login(userName)
    // console.log()
    navigate('/')
  }

  return (
    <Container className="login">
      <Row>
        <CustomForm action="#" method="POST" onSubmit={handleSubmit} className="w-24">
          <div className="d-flex justify-content-center mb-5">
            <img src={logo} alt="logo" className=" " width={150} />
          </div>
          <div className="text-center mb-3">
            <h5 className="title">Create a new password</h5>
            <p className="subtitle text-400">Enter a new passwrd for yue account</p>
          </div>
          <div className="mb-3">
            <CustomInput
              labelText="Password"
              labelClassName="fw-semibold small"
              type="password"
              className="form-control bg-200 border-0 focus-ring focus-ring-light py-3"
              placeholder="************"
            />
          </div>
          <div className="mb-3">
            <CustomInput
              labelText="Password"
              labelClassName="fw-semibold small"
              type="password"
              className="form-control bg-200 border-0 focus-ring focus-ring-light py-3"
              placeholder="************"
            />
          </div>

          <div className="d-grid mt-5 mb-3">
            <CustomButton type="submit" className="btn border-none text-light fw-bolder bg-green-500 py-3">
              Confirm
            </CustomButton>
          </div>
        </CustomForm>
      </Row>
    </Container>
  )
}
