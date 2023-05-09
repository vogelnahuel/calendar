import React from 'react'
import { ICalendar } from './calendar.interface'
import styles from './Calendar.module.css'
import Image from 'next/image'
import Modal from '../Modal/Modal'
import { ImageContainer } from '../image/ImageContainer'

export const Calendar = ({ images, daysOfMonth, imagesByDate, handleImageClick, setIsOpenModal, isOpenModal }: ICalendar) => {
  return (
    <>
      {images.length > 0
        ? (
          <div className={styles.calendar}>
            <div className={styles.header}>February 2023</div>
            <div className={styles['days-of-week']}>
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
                      <Image src={image.url} alt={image.title} width={100} height={100} />
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
