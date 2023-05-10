import React, { useEffect, useState } from 'react'
import { ICalendar } from './calendar.interface'
import styles from './Calendar.module.css'
import Image from 'next/image'
import Modal from '../Modal/Modal'
import { ImageContainer } from '../image/ImageContainer'

export const Calendar = ({ images, daysOfMonth, imagesByDate, handleImageClick, setIsOpenModal, isOpenModal }: ICalendar) => {
  const [windowWidth, setWindowWidth] = useState<number>(0)
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }

    // Registra un event listener para detectar cambios de tamaño de ventana
    window.addEventListener('resize', handleResize)

    // Establece el ancho inicial de la ventana
    setWindowWidth(window.innerWidth)

    // Limpia el event listener cuando el componente se desmonta
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])
  return (
    <>
      {images.length > 0
        ? (
          <div className={styles.calendar}>
            <div className={styles.header}>February 2023</div>
            <div className={styles['days-of-week-container']}>
              <div className={styles['day-of-week']}>Sun</div>
              <div className={styles['day-of-week']}>Mon</div>
              <div className={styles['day-of-week']}>Tue</div>
              <div className={styles['day-of-week']}>Wed</div>
              <div className={styles['day-of-week']}>Thu</div>
              <div className={styles['day-of-week']}>Fri</div>
              <div className={styles['day-of-week']}>Sat</div>
            </div>
            <div className={styles['days-of-month']}>
              {daysOfMonth.map((day) => {
                const image = imagesByDate[day?.toISOString().split('T')[0]]
                const imageWidth = windowWidth < 800 ? 70 : windowWidth < 450 ? 30 : 100

                return (
                  <div
                    key={day?.toISOString()}
                    className={`${styles.day} ${day?.getMonth() === 1 ? '' : styles.blank} ${
                    image ? styles.selected : ''
                  }`}
                    onClick={() => handleImageClick(image, day)}
                  >
                    <p className={styles.dayImage}>{day?.getDate()}</p>
                    {image && (
                      <Image src={image.url} alt={image.title} width={imageWidth} height={100} />
                    )}
                  </div>
                )
              })}
            </div>
          </div>
          )
        : null}
      {isOpenModal && (
        <Modal onClose={() => setIsOpenModal()}>
          <ImageContainer />
        </Modal>
      )}
    </>
  )
}
