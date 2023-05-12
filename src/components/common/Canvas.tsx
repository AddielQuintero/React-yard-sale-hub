// import Button from 'react-bootstrap/Button'
import { useEffect, useRef } from 'react'
import { CustomButton } from '.'

export const CustomCanvas = (props: any) => {
  const { show, handleClose, title, children } = props
  // console.log(show)

  const canvasRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // console.log('im here')
    let handler = (e: MouseEvent) => {
      if (!canvasRef.current?.contains(e.target as Node) && show) {
        handleClose()
        // console.log('making handleClose')
        console.log(canvasRef.current)
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
      <div ref={canvasRef} className={`custom__canvas end shadow ${show && 'show'}`}>
        <div className="custom__canvas-header">
          <div className="custom__canvas-title">{title}</div>
          <CustomButton onClick={handleClose} className="custom__canvas-button btn" />
        </div>
        <div className="custom__canvas-body">{children}</div>
      </div>
    </>
  )
}
