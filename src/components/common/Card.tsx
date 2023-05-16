import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import { CardLinkProps, CardProps } from '@types'

export const CustomCard = (props: CardProps) => {
  return (
    <Card className={props.className}>
      <Card.Header className={props.classHeader}>{props.header}</Card.Header>

      <Card.Img className={props.classImg} variant={props.variant} src={props.src} alt={props.alt} />

      <Card.Body className={props.classBody}>
        <Card.Title className={props.classTitle}>{props.title}</Card.Title>

        {props.hr && <hr />}

        <Card.Text className={props.classText}>{props.text}</Card.Text>

        {props.children}

        {props.links &&
          props.links.map((item: CardLinkProps) => (
            <Card.Link as={Link} to={item.to} className={item.classLink} key={item.label}>
              {item.label}
            </Card.Link>
          ))}
      </Card.Body>
      <Card.Footer className={props.classFooter}>{props.footer}</Card.Footer>
    </Card>
  )
}
