export interface TNavigate {
  name: string
  to: string
  private: boolean
}

export interface NavigateProps extends Array<TNavigate> {}

export interface TLink {
  children?: React.ReactNode
  className?: string
  navigation: NavigateProps
}
