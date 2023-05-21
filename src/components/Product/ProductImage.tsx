import { LazyImage } from '@components'
import { ImageProps } from '@types'

export const ProductImage = ({ src, alt }: ImageProps) => {
  return (
    <figure className="product__figure">
      <LazyImage className='object-fit-contain' src={src} alt={alt} />
    </figure>
  )
}
