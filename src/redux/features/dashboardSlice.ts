import { IAxiosCalendar } from '@/components/calendar.interface'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type DashboardState = {
  value: number;
  image: IAxiosCalendar;
};

const initialState = {
  value: 0,
  image: {}
} as DashboardState

export const dashboard = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    reset: () => initialState,
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload
    },
    decrementByAmount: (state, action: PayloadAction<number>) => {
      state.value -= action.payload
    }
  }
})

export const {
  increment,
  incrementByAmount,
  decrement,
  decrementByAmount,
  reset
} = dashboard.actions
export default dashboard.reducer
