import { PriceProps } from '@types'

export const Price = ({ className, classPrice, price }: PriceProps) => {
  return (
    <div className={className}>
      U$S <span className={classPrice}>{price}</span>
    </div>
  )
}
