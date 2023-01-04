import { Route, Waypoint } from '../../Interfaces/route'
import { RootState } from '../store'

export const getRoute = (state: RootState): Route | undefined => state.map.routes[0]
export const getWaypoints = (state: RootState): Waypoint[] | undefined => state.map.waypoints
