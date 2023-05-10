import { NavLink } from 'react-router-dom'
import { AuthService } from '../../services'
// import { TAuthButton } from '../../types'
// import { useApp } from '../../context'
import Nav from 'react-bootstrap/Nav'

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
