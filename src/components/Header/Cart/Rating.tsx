import { RatingProps } from '@types'

export const Rating = ({ rating, reviews, text, className }: RatingProps) => {
  return (
    <div className={`${className} text-yellow-500`}>
      {Array.from({ length: 5 }, (_, index) => (
        <i
          key={index}
          className={
            rating >= index + 1 || rating >= 4.7
              ? 'bi bi-star-fill'
              : rating >= index + 0.5
              ? 'bi bi-star-half'
              : 'bi bi-star'
          }
        ></i>
      ))}
      <span className="text-600">
        {' '}
        {reviews} {text}
      </span>
    </div>
  )
}
