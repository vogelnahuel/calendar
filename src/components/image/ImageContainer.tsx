import React from 'react'
import ImagePage from './ImagePage'
import { IAxiosCalendar } from '../calendar/calendar.interface'
import { useAppSelector } from '@/redux/hooks'

export const ImageContainer = () => {
  const dashboard: IAxiosCalendar = useAppSelector((state) => state.dashboardReducer.imageSelected)
  return (
    <ImagePage dashboard={dashboard} />
  )
}
