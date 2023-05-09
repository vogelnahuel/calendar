import { IAxiosCalendar } from '@/components/calendar/calendar.interface'
import axios from 'axios'

export const getImages = async (start:string, end:string):Promise<IAxiosCalendar[]> => {
  try {
    const res = await axios.get(`https://api.nasa.gov/planetary/apod?start_date=${start}&end_date=${end}&api_key=b0brazg3ruwZz3jZPff1S3EJZM7tlO0ltUe0xAhs`)
    return res.data
  } catch (error) {
    console.log('error', error)
  }
  return []
}
