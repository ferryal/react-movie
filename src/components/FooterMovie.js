import React, {Component} from 'react'
import {Layout} from 'antd'

export default class footer extends Component {
  render() {
    const {Footer} = Layout
    return (
      <div>
        <Layout>
          <Footer style={{ textAlign: 'center' }}>
            Ant Design ©2016 Created by Ant UED
          </Footer>
        </Layout>
      </div>
    );
  }
}
