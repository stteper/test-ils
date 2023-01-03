import { createAction, createReducer } from '@reduxjs/toolkit'

import { Order } from '../../Interfaces/order'

export interface OrderState {
  current: React.Key
  orders: Order[]
}

const initialState: OrderState = {
  current: '',
  orders: [
    {
      id: 1,
      from: {
        lat: 59.84660399,
        lng: 30.29496392,
      },
      to: {
        lat: 59.82934196,
        lng: 30.42423701,
      },
    },
    {
      id: 2,
      from: {
        lat: 59.82934196,
        lng: 30.42423701,
      },
      to: {
        lat: 59.82761295,
        lng: 30.41705607,
      },
    },
    {
      id: 3,
      from: {
        lat: 59.83567701,
        lng: 30.38064206,
      },
      to: {
        lat: 59.84660399,
        lng: 30.29496392,
      },
    },
    {
      id: 4,
      from: {
        lat: 59.84660399,
        lng: 30.29496392,
      },
      to: {
        lat: 59.82761295,
        lng: 30.41705607,
      },
    },
    {
      id: 5,
      from: {
        lat: 59.83567701,
        lng: 30.38064206,
      },
      to: {
        lat: 59.84660399,
        lng: 30.29496392,
      },
    },
  ],
}

export const setDefaultOrder = createAction<Order>('orders/setDefault')

const orderReducer = createReducer(initialState, (builder) => {
  builder.addCase(setDefaultOrder, (state, action) => {
    state.current = action.payload.id
  })
})

export default orderReducer
