import { configureStore } from '@reduxjs/toolkit'

import createSagaMiddleware from 'redux-saga'

import mapReducer from './reducers/mapReducer'
import orderReducer from './reducers/orderReducer'

import { getRoute } from './sagas/route'
const sagaMiddleware = createSagaMiddleware()

const makeStore = () =>
  configureStore({
    reducer: {
      order: orderReducer,
      map: mapReducer,
    },
    devTools: true,
    middleware: [sagaMiddleware],
  })

type Store = ReturnType<typeof makeStore>
export type RootState = ReturnType<Store['getState']>

export const store = makeStore()

sagaMiddleware.run(getRoute)
