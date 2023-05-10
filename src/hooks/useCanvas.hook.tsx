import { useState } from 'react'

export const useCanvas = () => {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return { show, handleShow, handleClose }
}
