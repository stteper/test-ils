import { useAppSelector } from './useAppStore'

import { Route, Waypoint } from '../Interfaces/route'
import { getRoute, getWaypoints } from '../store/selectors/route'

interface UseOrdersHook {
  route: Route | undefined
  waypoints: Waypoint[] | undefined
}

export const useRoutesHook = (): UseOrdersHook => {
  const route = useAppSelector(getRoute)
  const waypoints = useAppSelector(getWaypoints)

  return {
    route,
    waypoints,
  }
}
