import { NavLink } from 'react-router-dom'
import { AuthService } from '../../../services'
import Nav from 'react-bootstrap/Nav'
import { useState } from 'react'
import NavDropdown from 'react-bootstrap/NavDropdown'

const menu = [
  { name: 'My account', to: '/profile', private: true },
  { name: 'My orders', to: '/orders', private: true },
]

export const Menu = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const { to, linkText, handleClick, icon } = AuthService().AuthConfigItem

  const handleMenu = () => {
    handleClick?.()
    // handleClose?.()
    setIsAuthenticated(!isAuthenticated)
  }

  return (
    <div className="menu  d-flex flex-column justify-content-center">
      {!isAuthenticated ? (
        <Nav>
          <NavDropdown
            id="down-centered"
            title="platzi@example.com"
            drop="down-centered"
            menuVariant="light"
            className="NavDropdown"
          >
            {menu.map((link) => (
              <NavDropdown.Item
                as={NavLink}
                key={link.name}
                to={link.to}
                eventKey={link.name}
                className="text-md-end px-0 px-md-4"
              >
                {link.name}
              </NavDropdown.Item>
            ))}
            <NavDropdown.Divider className='mx-md-4'/>
            <NavDropdown.Item
              as={NavLink}
              to={to}
              eventKey="1"
              className="btn bg-transparent btn-light border-0 d-flex justify-content-md-end align-items-center gap-1 px-0 px-md-4"
              onClick={handleMenu}
            >
              {linkText} {icon}
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      ) : (
        <Nav.Link
          as={NavLink}
          to={to}
          eventKey="1"
          className="btn bg-transparent btn-light border-0 d-flex justify-content-center align-items-center gap-1"
          onClick={handleMenu}
        >
          {linkText} {icon}
        </Nav.Link>
      )}
    </div>
  )
}
