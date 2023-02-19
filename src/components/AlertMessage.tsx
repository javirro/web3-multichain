import { ErrorMessages } from '../utils/types'
import '../styles/alertMessage.css'

interface AlertMessageProps {
  errorType: ErrorMessages
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
}
const AlertMessage = ({ errorType, isOpen, setIsOpen }: AlertMessageProps) => {
  let errorText: string = ''
  if (errorType === 'BigBlockNumber')
    errorText = 'The block number introduced is higher than the last one'

  return (
    <div className="modal-alert-container">
      <div className="modal-alert-content">
        <header>There is a problem!</header>
        <span>{errorText}</span>
        <footer>
          <button onClick={ () => setIsOpen(!isOpen)}>Close Modal</button>
        </footer>
      </div>
    </div>
  )
}

export default AlertMessage
