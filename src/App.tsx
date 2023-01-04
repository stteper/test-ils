import { Layout, Row, Col, Card } from 'antd'
import React from 'react'

import { Provider } from 'react-redux'

import './App.css'
import OrderMap from './components/OrderMap/OrderMap'
import OrderTable from './components/OrderTable/OrderTable'

import { store } from './store/store'

const { Header, Footer, Content } = Layout
const App: React.FC = () => {
  return (
    <>
      <Provider store={store}>
        <Layout className='main'>
          <Header>
            <span className='header'>Test Task</span>
          </Header>
          <Content className='content'>
            <Row gutter={[16, 16]}>
              <Col xs={24} xl={12}>
                <Card title={'Заявки'}>
                  <OrderTable />
                </Card>
              </Col>

              <Col xs={24} xl={12}>
                <Card title={'Карта'}>
                  <OrderMap />
                </Card>
              </Col>
            </Row>
          </Content>
          <Footer>&copy; Copyright 2022</Footer>
        </Layout>
      </Provider>
    </>
  )
}

export default App
