'use client'

import { store } from './store'
import { Provider } from 'react-redux'

// eslint-disable-next-line no-undef
export function Providers ({ children }: { children: React.ReactNode }) {
  return <Provider store={store}>{children}</Provider>
}
