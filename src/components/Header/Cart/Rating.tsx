import { RatingProps } from '@types'

export const Rating = ({ rate, reviews, text, className }: RatingProps) => {
  return (
    <div className={`${className} text-yellow-500`}>
      {Array.from({ length: 5 }, (_, index) => (
        <i
          key={index}
          className={
            rate >= index + 1 
            ? 'bi bi-star-fill' 
            : rate >= index + 0.5 
            ? 'bi bi-star-half' 
            : 'bi bi-star'
          }
        ></i>
      ))}
      <span className="text-600">
      {' '} {reviews} {text}
      </span>
    </div>
  )
}
