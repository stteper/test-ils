import React from 'react'

import { Coordinate } from './route'

export interface Order {
  id: React.Key
  from: Coordinate
  to: Coordinate
}
