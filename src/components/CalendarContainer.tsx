'use client'
import React, { useCallback, useEffect, useState } from 'react'
import { Calendar } from './Calendar'
import { getImages } from '@/services/dashboard'
import { IAxiosCalendar } from './calendar.interface'

export const CalendarContainer = () => {
  const [images, setImages] = useState<IAxiosCalendar[]>([])
  const getImag = useCallback(
    async () => {
      const data: IAxiosCalendar[] = await getImages('2023-02-01', '2023-02-28')
      setImages(data)
    },
    [])
  useEffect(() => {
    getImag()
  }, [getImag])

  const generateCalendarDays = () => {
    const daysInMonth = 28 // Febrero 2023 tiene 28 días

    const days = []
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(i)
    }

    return days
  }

  return (
    <>
      <Calendar images={images} generateCalendarDays={generateCalendarDays} />
    </>
  )
}
