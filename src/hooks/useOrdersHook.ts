import { useCallback } from 'react'

import { useAppDispatch, useAppSelector } from './useAppStore'

import { Order } from '../Interfaces/order'
import { setDefaultOrder } from '../store/reducers/orderReducer'
import { getCurrentOrder, getOrders } from '../store/selectors/orders'

interface UseOrdersHook {
  orders: Order[]
  currentOrder: Order | undefined
  setCurrent: (payload: Order) => void
}

export const useOrdersHook = (): UseOrdersHook => {
  const dispatch = useAppDispatch()
  const orders = useAppSelector(getOrders)
  const currentOrder = useAppSelector(getCurrentOrder)

  const setCurrent = useCallback(
    (payload: Order) => {
      dispatch(setDefaultOrder(payload))
    },
    [dispatch],
  )

  return {
    orders,
    currentOrder,
    setCurrent,
  }
}
