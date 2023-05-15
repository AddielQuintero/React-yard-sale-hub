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

//Toast
export interface ToastProps {
  counter: number
  setCounter: (value: number) => void
  show: boolean
  handleClose: (value: boolean) => void
  text: string
}
