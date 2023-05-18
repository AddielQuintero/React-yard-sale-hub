import { Row, Col } from 'react-bootstrap'
import Toast from 'react-bootstrap/Toast'
import ToastContainer from 'react-bootstrap/ToastContainer'
import { ToastProps } from '@types'

export const CustomToast = ({ className, counter, setCounter, show, handleClose, text }: ToastProps) => {
  const onClose = () => {
    handleClose(false)
    setCounter(0)
  }

  return (
    <Row>
      <Col xs={6}>
        <ToastContainer className="p-3 position-fixed" position="top-end">
          {Array.from({ length: counter }, (_, index) => (
            <Toast
              key={index}
              className="w-100 border-0"
              onClose={() => onClose()}
              show={show}
              delay={2000}
              autohide
            >
              <Toast.Header
                closeVariant="white"
                className={`${className} text-white py-3 border-bottom-0 rounded-1`}
              >
                <strong className="me-auto">{text}</strong>
              </Toast.Header>
            </Toast>
          ))}
        </ToastContainer>
      </Col>
    </Row>
  )
}
