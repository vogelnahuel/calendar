/* eslint-disable react/jsx-indent */
import React from 'react'
import { ICalendar, IAxiosCalendar } from './calendar.interface'
import styles from './Calendar.module.css'
import Image from 'next/image'
import { decrement } from '@/redux/features/dashboardSlice'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'

const getImagesByDate = (images: IAxiosCalendar[]) => {
  const imagesByDate: { [key: string]: IAxiosCalendar } = {}

  for (const image of images) {
    imagesByDate[image.date] = image
  }

  return imagesByDate
}

export const Calendar = ({ images }: ICalendar) => {
  const count = useAppSelector((state) => state.dashboardReducer.value)
  const dispatch = useAppDispatch()

  const firstDate = new Date('2023-02-01T00:00:00')
  const blankDays = firstDate.getDay() - 6

  const daysOfMonth = [...Array(31)].map((_, i) => {
    const day = new Date(firstDate)
    day.setDate(firstDate.getDate() + i + blankDays)
    return day
  })

  const imagesByDate = getImagesByDate(images)

  const handleImageClick = (image: IAxiosCalendar) => {
    console.log('entree', image)
    dispatch(decrement())
    console.log(count)
  }
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
                  onClick={() => handleImageClick(image)}
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
    </>
  )
}
