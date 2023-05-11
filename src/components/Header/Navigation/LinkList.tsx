import { NavLink } from 'react-router-dom'
import Nav from 'react-bootstrap/Nav'
import { TLink } from '@types'
// import { useApp } from '../../context'

export const LinkList = ({ navigation, className }: TLink) => {
  // const app = useApp()
  // console.log(auth?.user)

  return (
    <>
      {navigation.map((link) => {
        // if (link.private && !app?.user) return null
        // if (link.private) return null
        return (
          <Nav.Link as={NavLink} key={link.name} to={link.to} eventKey={link.name} className={className}>
            {link.name}
          </Nav.Link>
        )
      })}
    </>
  )
}
