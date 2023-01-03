import { Layout, Row, Col, Card } from 'antd'
import React from 'react'

import { Provider } from 'react-redux'

import styles from './App.module.css'
import OrderMap from './components/OrderMap/OrderMap'
import OrderTable from './components/OrderTable/OrderTable'

import { store } from './store/store'

const { Header, Footer, Content } = Layout
const App: React.FC = () => {
  return (
    <>
      <Provider store={store}>
        <Layout className={styles.main}>
          <Header>
            <span className={styles.header}>Test Task</span>
          </Header>
          <Content className={styles.content}>
            <Row gutter={[16, 16]}>
              <Col xs={24} md={12}>
                <Card title={'Заявки'}>
                  <OrderTable />
                </Card>
              </Col>

              <Col xs={24} md={12}>
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
