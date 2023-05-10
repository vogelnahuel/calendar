import React, { useEffect } from 'react'
import styles from './modal.module.css'

interface ModalProps {
  onClose: () => void;
  // eslint-disable-next-line no-undef
  children: JSX.Element;
  isOpen: boolean;
}

// patron Higher-Order Components
const Modal: React.FC<ModalProps> = ({ onClose, children, isOpen }) => {
  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    document.addEventListener('keydown', handleEscapeKey)

    return () => {
      document.removeEventListener('keydown', handleEscapeKey)
    }
  }, [onClose])
  return (
    <div className={`${styles.modal} ${isOpen ? styles.modalOpen : ''}`}>
      <div className={styles.modalContent}>
        <span className={styles.close} onClick={onClose}>
          &times;
        </span>
        {children}
      </div>
    </div>
  )
}

export default Modal
