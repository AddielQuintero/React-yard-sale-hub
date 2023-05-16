import { ImageProps } from '@types'

export const ProductImage = ({ src }: ImageProps) => {
  return (
    <figure className='product__figure'>
      <img src={src} alt="" />
    </figure>
  )
}
