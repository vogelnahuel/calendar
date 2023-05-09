import { IAxiosCalendar } from '@/components/calendar/calendar.interface'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type DashboardState = {
  imageSelected: IAxiosCalendar;
  images: IAxiosCalendar[];
  isOpenModal: boolean;
};

const initialState: DashboardState = {
  imageSelected: {
    copyright: '',
    date: '',
    explanation: '',
    hdurl: '',
    image: '',
    title: '',
    url: ''
  },
  images: [],
  isOpenModal: false
}

export const dashboard = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    reset: () => initialState,
    setImageSelected: (state, action: PayloadAction<IAxiosCalendar>) => {
      state.imageSelected = action.payload
    },
    setImagesState: (state, action: PayloadAction<IAxiosCalendar[]>) => {
      state.images = action.payload
    },
    setIsOpenModal: (state, action: PayloadAction<boolean>) => {
      state.isOpenModal = action.payload
    }
  }
})

export const {
  setIsOpenModal,
  setImageSelected,
  setImagesState,
  reset
} = dashboard.actions
export default dashboard.reducer
