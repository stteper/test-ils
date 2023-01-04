import { createAction, createReducer } from '@reduxjs/toolkit'

import { RouteData } from '../../Interfaces/route'

export const setRoute = createAction<RouteData>('map/setRoute')

const initialState: RouteData = {
  routes: [],
  waypoints: [],
}

const mapReducer = createReducer(initialState, (builder) => {
  builder.addCase(setRoute, (state, action) => {
    state.routes = action.payload.routes
    state.waypoints = action.payload.waypoints
  })
})

export default mapReducer
