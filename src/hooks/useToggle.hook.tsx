import { useState } from 'react'

export const useToggle = () => {
  const [show, setShow] = useState<boolean>(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return { show, handleShow, handleClose }
}
