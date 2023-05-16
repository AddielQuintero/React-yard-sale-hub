// import Button from 'react-bootstrap/Button'
import { useEffect, useRef } from 'react'
import { CustomButton } from '.'
import { CanvasProps } from '@types'

export const CustomCanvas = ({ show, handleClose, title, children }: CanvasProps) => {
  // console.log(show)

  const canvasRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // console.log('im here')
    let handler = (e: MouseEvent) => {
      if (!canvasRef.current?.contains(e.target as Node) && show) {
        handleClose()
        // console.log('making handleClose')
        // console.log(canvasRef.current)
      }
    }

    if (show) {
      // console.log('listening')
      document.addEventListener('mousedown', handler)
    }

    return () => {
      document.removeEventListener('mousedown', handler)
    }
  }, [show])

  return (
    <>
      <div ref={canvasRef} className={`canvas end shadow ${show && 'show'}`}>
        <div className="canvas__header">
          <div className="canvas__title">{title}</div>
          <CustomButton onClick={handleClose} className="canvas__button btn" />
        </div>
        <div className="canvas__body">{children}</div>
      </div>
    </>
  )
}
