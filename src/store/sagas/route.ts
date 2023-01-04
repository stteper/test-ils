import { call, put, takeLatest } from 'redux-saga/effects'

import Api from '../../HTTP/Api'
import { Order } from '../../Interfaces/order'
import { RouteApiData } from '../../Interfaces/route'
import { setRoute, setWrongRoute } from '../reducers/mapReducer'
import { SetDefaultOrderAction } from '../reducers/orderReducer'

async function getRouteData(order: Order): Promise<RouteApiData> {
  const requestUrl = `driving/${order.from.lng},${order.from.lat};${order.to.lng},${order.to.lat}`
  const options = {
    steps: false,
    geometries: 'geojson',
  }

  return Api.get<RouteApiData>({ url: requestUrl, data: options })
}

function* fetchRoute(action: SetDefaultOrderAction) {
  const data: RouteApiData = yield call(getRouteData, action.payload)

  try {
    if (data.code !== 'Ok') {
      throw new Error('Wrong data')
    }

    yield put(setRoute(data))
  } catch (err) {
    yield put(setWrongRoute())
  }
}

export function* getRoute() {
  yield takeLatest('orders/setDefault', fetchRoute)
}
