import { configureStore } from '@reduxjs/toolkit'

import mapReducer from './reducers/mapReducer'
import orderReducer from './reducers/orderReducer'

const makeStore = () =>
  configureStore({
    reducer: {
      order: orderReducer,
      //map: mapReducer,
    },
    devTools: true,
  })

type Store = ReturnType<typeof makeStore>
export type RootState = ReturnType<Store['getState']>

export const store = makeStore()
