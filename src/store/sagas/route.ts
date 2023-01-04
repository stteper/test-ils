import { call, put, takeLatest } from 'redux-saga/effects'

import Api from '../../HTTP/Api'
import { Order } from '../../Interfaces/order'
import { RouteApiData, RouteData } from '../../Interfaces/route'
import { setRoute } from '../reducers/mapReducer'
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
  const emptyData: RouteData = { routes: [], waypoints: [] }

  try {
    const routeData: RouteData = data.code === 'Ok' ? { routes: data.routes, waypoints: data.waypoints } : emptyData
    yield put(setRoute(routeData))
  } catch (err) {
    yield put(setRoute(emptyData))
  }
}

export function* getRoute() {
  yield takeLatest('orders/setDefault', fetchRoute)
}
