import { NavLink } from 'react-router-dom'
import Nav from 'react-bootstrap/Nav'
import { AuthService } from '@services'

export const AuthButton = () => {
  const { to, linkText, handleClick, icon } = AuthService().AuthConfigItem

  const handleMenu = () => {
    handleClick?.()
    // handleClose?.()
  }

  return (
    <>
      <div className="d-flex ">
        <Nav.Link
          as={NavLink}
          to={to}
          eventKey="1"
          className="btn bg-transparent btn-light border-0 d-flex justify-content-center align-items-center gap-1"
          onClick={handleMenu}
        >
          {linkText} {icon}
        </Nav.Link>
      </div>
    </>
  )
}
