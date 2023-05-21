import { RangeProps } from '@types'
import { Col, Row, Form } from 'react-bootstrap'
import RangeSlider from 'react-bootstrap-range-slider'

export const CustomRange = ({ id, price, min, max, variant, tooltip, onChange, ...props }: RangeProps) => {
  return (
    <Form>
      <Form.Group as={Row}>
        <Col xs={12} md={9}>
          <Form.Label htmlFor={id}>Price <span className='text-600'>${price}</span></Form.Label>
          <RangeSlider
            id={id}
            min={min}
            max={max}
            value={price}
            variant={variant}
            tooltip={tooltip}
            onChange={onChange}
            {...props}
          />
        </Col>
        <Col xs={0} md={3} className="d-none d-md-flex align-items-end">
          <Form.Control
            className="border focus-ring focus-ring-light"
            value={price}
            onChange={onChange}
          />
        </Col>
      </Form.Group>
    </Form>
  )
}
