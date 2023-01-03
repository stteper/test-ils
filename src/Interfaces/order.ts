import React from 'react'

import { Coordinate } from './coordinates'

export interface Order {
  id: React.Key
  from: Coordinate
  to: Coordinate
}
