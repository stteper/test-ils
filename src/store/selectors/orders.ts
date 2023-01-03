import { Order } from '../../Interfaces/order'
import { RootState } from '../store'

export const getCurrentOrder = (state: RootState): Order | undefined =>
  state.order.orders.find((order) => state.order.current === order.id)

export const getOrders = (state: RootState): Order[] => state.order.orders
