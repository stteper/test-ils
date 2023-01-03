import { Table } from 'antd'
import React, { useCallback } from 'react'

import styles from './OrderTable.module.css'

import { useOrdersHook } from '../../hooks/useOrdersHook'
import { Coordinate } from '../../Interfaces/coordinates'
import { Order } from '../../Interfaces/order'

import type { ColumnsType } from 'antd/es/table'

function renderCoord(coord: Coordinate): React.ReactNode {
  return coord ? `[${coord.lat}; ${coord.lng}]` : null
}

const columns: ColumnsType<Order> = [
  {
    title: '#',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'From',
    dataIndex: 'from',
    key: 'from',
    render: renderCoord,
  },
  {
    title: 'To',
    dataIndex: 'to',
    key: 'to',
    render: renderCoord,
  },
]

const OrderTable: React.FC = () => {
  const { orders, currentOrder, setCurrent } = useOrdersHook()

  const onRow = useCallback(
    (record: Order) => {
      return {
        className: currentOrder && record.id === currentOrder.id ? styles.active : '',
        onClick: () => {
          setCurrent(record)
        },
      }
    },
    [currentOrder, setCurrent],
  )

  return <Table rowKey={'id'} onRow={onRow} dataSource={orders} columns={columns} />
}

export default OrderTable