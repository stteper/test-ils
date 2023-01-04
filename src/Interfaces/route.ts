export interface Coordinate {
  lat: number
  lng: number
}

export type GeometryCoordinate = [number, number]

export type GeometryType =
  | 'Point'
  | 'MultiPoint'
  | 'LineString'
  | 'MultiLineString'
  | 'Polygon'
  | 'MultiPolygon'
  | 'GeometryCollection'
  | 'Feature'
  | 'FeatureCollection'
export interface Geometry {
  type: GeometryType
  coordinates: GeometryCoordinate[]
}

export interface Route {
  distance: number
  duration: number
  weight: number
  weight_name: string
  geometry: Geometry
}

export interface Waypoint {
  hint: string
  distance: number
  name: string
  location: [number, number]
}

export interface RouteData {
  waypoints: Waypoint[]
  routes: Route[]
}

export interface RouteApiData extends RouteData {
  code: string
}
