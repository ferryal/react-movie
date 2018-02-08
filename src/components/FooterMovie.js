import React, {Component} from 'react'
import {Layout, Icon} from 'antd'
import '../App.css'

export default class footer extends Component {
  render() {
    const {Footer} = Layout
    return (
      <div>
        <Layout>
          <Footer style={{ textAlign: 'center' }}>
            Made by <Icon type="heart-o" /> from here.
            <div>
              <Icon type="github" style={{ fontSize: 16, color: '#696969', paddingTop:10, paddingRight:10 }}/>
              <Icon type="twitter" style={{ fontSize: 16, color: '#08c', paddingTop:10, paddingRight:10 }}/>
              <Icon type="linkedin" style={{ fontSize: 16, color: '#08c', paddingTop:10, paddingRight:10 }}/>
            </div>
          </Footer>
        </Layout>
      </div>
    );
  }
}
