import { Col, Container, Row, Form } from 'react-bootstrap'
import { useId, ChangeEventHandler, useState } from 'react'
import { useApp } from '@context'
import { Categories } from '@types'

export const Filter = () => {
  const { filters, setFilters } = useApp()
  const [select, setSelect] = useState<string>(filters.category)

  const minPriceFilterId = useId()
  const categoryFilterId = useId()

  const handleChangeRange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setFilters((prevState) => ({ ...prevState, minPrice: +event.target.value }))
  }

  const handleChangeSelect: ChangeEventHandler<HTMLSelectElement> = (event) => {
    setFilters((prevState) => ({ ...prevState, category: event.target.value }))

    setSelect(event.target.value)
    // setSelect(filters.category)
  }

  return (
    <Container className="mb-4">
      <Row>
        <Col xs={6} className="range">
          <Form.Label htmlFor={minPriceFilterId}>Price ${filters.minPrice}</Form.Label>
          <Form.Range
            id={minPriceFilterId}
            min="0"
            max="1200"
            value={filters.minPrice}
            onChange={handleChangeRange}
          />
        </Col>

        <Col xs={6} className="select">
          <Form.Label htmlFor={categoryFilterId}>Categories</Form.Label>
          <Form.Select
            id={categoryFilterId}
            aria-label="Categories"
            onChange={handleChangeSelect}
            value={select}
          >
            {Categories.map((item) => (
              <option key={item.id} value={item.name}>
                {item.name}
              </option>
            ))}
          </Form.Select>
        </Col>
      </Row>
    </Container>
  )
}
