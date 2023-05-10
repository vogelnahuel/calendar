'use client'
import React, { useCallback, useEffect, useState } from 'react'
import { Calendar } from './Calendar'
import { getImages } from '@/services/dashboard'
import { IAxiosCalendar } from './calendar.interface'
import { DashboardState, setImageSelected, setImagesState, setIsOpenModal } from '@/redux/features/dashboardSlice'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
// patron presentational and container components
export const CalendarContainer = () => {
  const firstDate: Date = new Date('2023-02-01T00:00:00')
  const blankDays: number = firstDate.getDay() - 6
  const [windowWidth, setWindowWidth] = useState<number>(0)
  const [images, setImages] = useState<IAxiosCalendar[]>([])
  const dispatch = useAppDispatch()
  const dashboard: DashboardState = useAppSelector((state) => state.dashboardReducer)

  const getImag = useCallback(
    async ():Promise<void> => {
      if (Array.isArray(dashboard.images) && dashboard.images.length <= 0) {
        const data: IAxiosCalendar[] = await getImages('2023-02-01', '2023-02-28')
        setImages(data)
        dispatch(setImagesState(data))
      } else {
        setImages(dashboard.images)
      }
    },
    [dashboard.images, dispatch])

  const daysOfMonth: Date[] = [...Array(31)].map((_, i) => {
    const day: Date = new Date(firstDate)
    day.setDate(firstDate.getDate() + i + blankDays)
    return day
  })

  const getImagesByDate = (images: IAxiosCalendar[]) => {
    const imagesByDate: { [key: string]: IAxiosCalendar } = {}

    for (const image of images) {
      imagesByDate[image.date] = image
    }

    return imagesByDate
  }

  const imagesByDate = getImagesByDate(images)

  const handleImageClick = (image: IAxiosCalendar, day: Date) => {
    const startDate: Date = new Date('2023-02-01')
    const endDate: Date = new Date('2023-02-28T00:00:01')

    if (day >= startDate && day <= endDate) {
      dispatch(setImageSelected(image))
      dispatch(setIsOpenModal(true))
    } else {
      console.log('El día está fuera del rango especificado')
    }
  }

  useEffect(() => {
    getImag()
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }

    window.addEventListener('resize', handleResize)

    setWindowWidth(window.innerWidth)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [getImag])

  return (
    <>
      <Calendar
        windowWidth={windowWidth}
        images={images}
        daysOfMonth={daysOfMonth}
        imagesByDate={imagesByDate}
        handleImageClick={handleImageClick}
        setIsOpenModal={() => dispatch(setIsOpenModal(false))}
        isOpenModal={dashboard.isOpenModal}
      />
    </>
  )
}
