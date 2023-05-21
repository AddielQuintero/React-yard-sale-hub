import { useEffect, useRef, useState } from 'react'
import { LazyImageProps } from '@types'
import { CustomImage } from '@components'

export const LazyImage = ({ src, className, alt }: LazyImageProps): JSX.Element => {
  const imgRef = useRef<HTMLImageElement>(null)
  const [isLazyLoaded, setIsLazyLoaded] = useState(false)
  const [currentSrc, setCurrentSrc] = useState<string | undefined>(
    'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjMyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4='
  )
  useEffect(() => {
    if (isLazyLoaded) {
      return
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // console.log(' I see you')
          setCurrentSrc(src)
          observer.disconnect()
          setIsLazyLoaded(true)
        }
      })
    })
    // console.log(src)
    // console.log('effect')

    imgRef.current && observer.observe(imgRef.current)

    return () => {
      observer.disconnect()
    }
  }, [src, isLazyLoaded])

  return <CustomImage className={`${className} bg-100`} alt={alt} src={currentSrc} imgRef={imgRef} />
}
