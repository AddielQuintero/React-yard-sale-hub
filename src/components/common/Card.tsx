import { CradProps } from '@types'
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'

export const CustomCard = (props: CradProps) => {
  return (
    <Card className={props.className}>
      <Card.Header className={props.classHeader}>{props.header}</Card.Header>
      <Card.Img className={props.classImg} variant={props.variant} src={props.src} />
      <Card.Body>
        <Card.Title className={props.classTitle}>{props.title}</Card.Title>
        {props.hr && <hr />}
         {/* <hr /> */}
        {props.children}
        <Card.Text className={props.classText}>{props.text}</Card.Text>

        {props.links &&
          props.links.map((item: any) => (
            <Card.Link as={Link} to={item.to} className={item.classLink} key={item.label}>
              {item.label}
            </Card.Link>
          ))}
      </Card.Body>
      <Card.Footer className={props.classFooter}>{props.footer}</Card.Footer>
    </Card>
  )
}
