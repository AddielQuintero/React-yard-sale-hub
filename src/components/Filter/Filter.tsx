import { Col, Container, Row } from 'react-bootstrap'
import { useId, ChangeEventHandler, useState } from 'react'
import { useApp } from '@context'
import { TSelectCategory, Category } from '@types'
import { CustomRange, CustomSelect } from '@components'

export const Filter = () => {
  const { filters, setFilters } = useApp()
  const [selectOption, setSelectOption] = useState<TSelectCategory>({
    label: filters.category,
    value: filters.category,
  })
  const minPriceFilterId = useId()
  const categoryFilterId = useId()

  const handleChangeRange: ChangeEventHandler<HTMLInputElement> = ({ target: { value } }) => {
    if (!isNaN(+value)) {
      setFilters((prevState) => ({ ...prevState, minPrice: +value }))
    }
  }

  const handleChangeSelect = (selectOption: TSelectCategory) => {
    setFilters((prevState) => ({ ...prevState, category: selectOption.value }))
    setSelectOption(selectOption)
  }

  return (
    <Container className="mb-4">
      <Row>
        <Col xs={6} className="range">
          <CustomRange
            variant="success"
            tooltip="off"
            id={minPriceFilterId}
            price={filters.minPrice}
            min={0}
            max={1000}
            onChange={handleChangeRange}
          />
        </Col>

        <Col xs={6} className="">
          <CustomSelect
            label="Categories"
            id={categoryFilterId}
            value={selectOption}
            onChange={handleChangeSelect}
            options={Category}
          />
        </Col>
      </Row>
    </Container>
  )
}
