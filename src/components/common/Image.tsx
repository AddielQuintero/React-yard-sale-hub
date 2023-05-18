import { ImgProps } from '@types'

export const CustomImage = ({ imgRef, ...imgProps }: ImgProps): JSX.Element => {
  return <img ref={imgRef} {...imgProps} />
}
