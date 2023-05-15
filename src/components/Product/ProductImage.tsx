import { ImageProps } from '@types'

export const ProductImage = ({ src }: ImageProps) => {
  return (
    <figure>
      <img src={src} alt="" />
    </figure>
  )
}
