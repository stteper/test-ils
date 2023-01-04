import { Table } from 'antd'
import React, { useCallback } from 'react'

import styled from 'styled-components'

import { useOrdersHook } from '../../hooks/useOrdersHook'
import { Order } from '../../Interfaces/order'
import { Coordinate } from '../../Interfaces/route'

import type { ColumnsType } from 'antd/es/table'

function renderCoord(coord: Coordinate): React.ReactNode {
  return coord ? `[${coord.lat}; ${coord.lng}]` : null
}

const columns: ColumnsType<Order> = [
  {
    title: '#',
    dataIndex: 'id',
    key: 'id',
    responsive: ['sm'],
  },
  {
    title: 'Старт',
    dataIndex: 'from',
    key: 'from',
    render: renderCoord,
  },
  {
    title: 'Финиш',
    dataIndex: 'to',
    key: 'to',
    render: renderCoord,
  },
]

const StyledTable = styled((props) => <Table {...props} />)`
  && tbody > tr.active > td {
    background-color: #b3e1f2;
  }
  && tbody > tr.active:hover > td {
    background-color: #b3e1f2;
  }
`

const OrderTable: React.FC = () => {
  const { orders, currentOrder, setCurrent } = useOrdersHook()

  const onRow = useCallback(
    (record: Order) => {
      return {
        className: currentOrder && record.id === currentOrder.id ? 'active' : '',
        onClick: () => {
          setCurrent(record)
        },
      }
    },
    [currentOrder, setCurrent],
  )

  return <StyledTable rowKey={'id'} onRow={onRow} dataSource={orders} columns={columns} />
}

export default OrderTable
