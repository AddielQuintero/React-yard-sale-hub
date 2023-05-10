import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'
// import { CustomButton } from './'

export const CustomCard = (props: any) => {
  return (
    <Card className={props.className}>
      <Card.Header className={props.classHeader}>{props.header}</Card.Header>
      <Card.Img className={props.classImg} variant={props.variant} src={props.src} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <hr />
        {props.children}
        <Card.Text>{props.text}</Card.Text>
        <Card.Link as={Link} to="/" className={props.classLink}>
          {props.link}
        </Card.Link>
      </Card.Body>
      <Card.Footer className={props.classFooter}>{props.footer}</Card.Footer>
    </Card>
  )
}
