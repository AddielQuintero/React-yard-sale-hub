import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { NavLink } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Offcanvas from 'react-bootstrap/Offcanvas'
import logo from '@assets/logo_yard_sale.svg'
import { Cart, LinkList, Menu } from '..'
import { NavigateProps } from '@types'

export const NavBar = ({ navigation }: { navigation: NavigateProps }) => {
  return (
    <div>
      <Navbar collapseOnSelect bg="light" expand="md" className="custom--nav mb-3 border-md-bottom  ">
        <Container fluid>
          <Navbar.Toggle aria-controls="canvasNavbar" className="border-0 focus-ring focus-ring-light py-0" />

          <NavLink to="/">
            <img src={logo} alt="logo" className="" />
          </NavLink>
          <Navbar.Offcanvas id="canvasNavbar" placement="start" aria-labelledby="canvasNavbar">
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="canvasNavbar">
                <Nav.Link as={NavLink} to="/" eventKey="1">
                  <img src={logo} alt="logo" className="" />
                </Nav.Link>
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-start align-items-md-center flex-grow-1 px-md-5">
                <LinkList navigation={navigation} className="link__list text-600" />
              </Nav>
              <div className="border-top d-md-none my-md-0 my-5"></div>
              <Menu />
            </Offcanvas.Body>
          </Navbar.Offcanvas>

          <Cart />
        </Container>
      </Navbar>
    </div>
  )
}
