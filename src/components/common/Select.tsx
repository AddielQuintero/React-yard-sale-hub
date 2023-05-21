import { Form } from 'react-bootstrap'
import classNames from 'classnames'
import Select, { ClassNamesConfig } from 'react-select'
import { SelectProps } from '@types'

export const CustomSelect  = ({ id, value, onChange, options, label }: SelectProps) => {
  const ClassNames: ClassNamesConfig = {
    control: ({ isFocused }) => classNames(isFocused && 'shadow-none border-success '),
    singleValue: (isFocused) => classNames(isFocused && 'text-600 fw-medium'),
    menu: (isFocused) => classNames(isFocused && 'p-2 border-0 shadow '),
    option: ({ isFocused, isSelected }) =>
      classNames(isSelected && 'bg-green-500 rounded-1', !isSelected && isFocused && 'bg-200 rounded-1'),
  }

  return (
    <>
      <Form.Label htmlFor={id}>{label}</Form.Label>
      <Select id={id} value={value} onChange={onChange} options={options} classNames={ClassNames}  />
    </>
  )
}
