import L, { latLngBounds } from 'leaflet'
import React, { useEffect } from 'react'

import { Marker, Popup, useMap, GeoJSON, TileLayer } from 'react-leaflet'

import { useRoutesHook } from '../../hooks/useRoutesHook'

import { Coordinate, GeometryCoordinate } from '../../Interfaces/route'

const convertCoord = (lngLat: GeometryCoordinate): Coordinate => {
  return {
    lat: lngLat[1],
    lng: lngLat[0],
  }
}

const hash = require('object-hash')

const zoomMapHandler = (parentMap: L.Map): void => {
  const bounds = latLngBounds([])

  parentMap.eachLayer((layer) => {
    layer instanceof L.FeatureGroup && bounds.extend(layer.getBounds())
    bounds.isValid() && parentMap.fitBounds(bounds)
  })
}

const OrderInnerMap: React.FC = () => {
  const { waypoints, route } = useRoutesHook()

  const parentMap = useMap()

  useEffect(() => {
    zoomMapHandler(parentMap)
  }, [route])

  const data: GeoJSON.Feature | null = route
    ? ({ type: 'Feature', geometry: route.geometry, properties: {} } as GeoJSON.Feature)
    : null

  return (
    <>
      <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
      {waypoints?.map((point, index) => (
        <Marker key={index} position={convertCoord(point.location)}>
          <Popup>{index === 0 ? 'Старт' : 'Финиш'}</Popup>
        </Marker>
      ))}

      {data && <GeoJSON key={hash(data)} data={data} />}
    </>
  )
}

export default OrderInnerMap
