import React, {Component} from 'react'
import {Layout, Menu} from 'antd'

export default class Head extends Component {
  render() {
    const {Header} = Layout
    return (
      <div>
        <Layout>
          <Header style={{ position: 'fixed', width:'100%'}}>
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={['2']}
              style={{ lineHeight: '30px' }}
            >
              <Menu.Item key="1">Home</Menu.Item>
              <Menu.Item key="2">Search</Menu.Item>
            </Menu>
          </Header>
        </Layout>
      </div>
    );

  }
}
