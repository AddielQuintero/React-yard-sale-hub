import { TSelectCategory } from '@types'
import { Ref, ChangeEventHandler } from 'react'

// Canvas
export interface CanvasProps {
  show: boolean
  handleClose: () => void
  title: string
  children: React.ReactNode
}

export interface CardLinkProps {
  to: string
  label: string
  classLink: string
}

// Card
export interface CardProps {
  className?: string
  classHeader?: string
  classTitle?: string
  classBody?: string
  classImg?: string
  classText?: string
  classFooter?: string
  links?: CardLinkProps[]
  children?: React.ReactNode
  variant?: string
  header?: string
  title?: string
  text?: string
  footer?: string
  src?: string
  alt?: string
  hr?: boolean
}

// Input
export type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  labelText?: string
  labelClassName?: string
}

// Button
export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>

//Toast
export interface ToastProps {
  className: string
  counter: number
  setCounter: (value: number) => void
  show: boolean
  handleClose: (value: boolean) => void
  text: string
}

// Img
export type ImgProps = React.ImgHTMLAttributes<HTMLImageElement> & {
  imgRef: Ref<HTMLImageElement>
}

// LazyImage
export interface LazyImageProps {
  src?: string
  className?: string
  alt?: string
}

// Range
export interface RangeProps {
  id: string
  price: number
  min: number
  max: number
  variant?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'dark' | 'light'
  tooltip?: 'auto' | 'on' | 'off'
  onChange: ChangeEventHandler<HTMLInputElement>
}

// Select
export interface SelectProps {
  id: string
  value?: TSelectCategory
  options: TSelectCategory[]
  label: string
  onChange?: any
}
