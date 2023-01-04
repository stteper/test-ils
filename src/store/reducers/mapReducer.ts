import { createAction, createReducer } from '@reduxjs/toolkit'

import { RouteData } from '../../Interfaces/route'

export const setRoute = createAction<RouteData>('map/setRoute')
export const setWrongRoute = createAction('map/setWrongRoute')

const initialState: RouteData = {
  routes: [],
  waypoints: [],
}

const mapReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setRoute, (state, action) => {
      state.routes = action.payload.routes
      state.waypoints = action.payload.waypoints
    })
    .addCase(setWrongRoute, (state) => {
      state.routes = []
      state.waypoints = []
    })
})

export default mapReducer
