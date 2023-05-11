export interface TLinks {
  to: string
  label: string
  classLink: string
}

export interface CradProps {
  className?: string
  classHeader?: string
  classTitle?: string
  classImg?: string
  classText?: string
  classFooter?: string
  links?: TLinks[]
  children?: React.ReactNode
  variant?: string
  header?: string
  title?: string
  text?: string
  footer?: string
  src?: string
  hr?: boolean
}
