// import Button from 'react-bootstrap/Button'
import { useEffect, useRef } from 'react'
import { CustomButton } from './'

export const CustomCanvas = (props: any) => {
  const { show, handleClose, title, children } = props
  // console.log(show)

  const canvaRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // console.log('toy aqui')
    let handler = (e: MouseEvent) => {
      if (!canvaRef.current?.contains(e.target as Node) && show) {
        handleClose()
        // console.log('hacindo handleclose')
        console.log(canvaRef.current)
      }
    }

    if (show) {
      // console.log('esuchando')
      document.addEventListener('mousedown', handler)
    }

    return () => {
      document.removeEventListener('mousedown', handler)
    }
  }, [show])

  return (
    <>
      <div ref={canvaRef} className={`custom__canva end shadow ${show && 'show'}`}>
        <div className="custom__canva-header">
          <div className="custom__canva-title">{title}</div>
          <CustomButton onClick={handleClose} className="custom__canva-button btn" />
        </div>
        <div className="custom__canva-body">{children}</div>
      </div>
    </>
  )
}
