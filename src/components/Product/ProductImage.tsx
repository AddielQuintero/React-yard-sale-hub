import { LazyImage } from '@components'
import { ImageProps } from '@types'

export const ProductImage = ({ src, alt }: ImageProps) => {
  return (
    <figure className="product__figure">
      <LazyImage src={src} alt={alt} />
    </figure>
  )
}
