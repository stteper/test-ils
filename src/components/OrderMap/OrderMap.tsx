import React from 'react'

import { MapContainer } from 'react-leaflet'

import { Coordinate } from '../../Interfaces/route'
import OrderInnerMap from '../OrderInnerMap/OrderInnerMap'

const centerDefault: Coordinate = {
  lat: 55.7522,
  lng: 37.6156,
}
const OrderMap: React.FC = () => {
  return (
    <>
      <MapContainer
        center={centerDefault}
        zoom={13}
        scrollWheelZoom={true}
        attributionControl={false}
        style={{ height: 395 }}
      >
        <OrderInnerMap />
      </MapContainer>
    </>
  )
}

export default OrderMap
