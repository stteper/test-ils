import { call, put, takeLatest } from 'redux-saga/effects'

import { Order } from '../../Interfaces/order'
import { RouteApiData, RouteData } from '../../Interfaces/route'
import { setRoute } from '../reducers/mapReducer'
import { SetDefaultOrderAction } from '../reducers/orderReducer'

async function getRouteData(order: Order): Promise<Response> {
  const requestUrl = `https://router.project-osrm.org/route/v1/driving/${order.from.lng},${order.from.lat};${order.to.lng},${order.to.lat}?steps=false&geometries=geojson`
  return await fetch(requestUrl)
    .then((data) => data.json())
    .catch((e) => console.error(e))
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
