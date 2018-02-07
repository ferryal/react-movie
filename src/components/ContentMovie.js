import React, {Component} from 'react'
import {Layout, Button} from 'antd'
import CaroMovie from './CaroMovie'
import Load from './Load'

export default class content extends Component {
  render() {
    const {Content} = Layout
    return (

      <div>
        <Layout>
          <Content style={{ marginTop: 30 }}>
            <div style={{ minHeight: 500 }}>
              <div className="App">
                <CaroMovie
                  carouselA="./images/carousel5.jpg"
                  carouselB="./images/carousel6.jpg"
                  carouselC="./images/carousel7.jpg"
                  carouselD="./images/carousel8.jpg"
                />
                <Button type="primary">Movies</Button>
              </div>
              <div>
                <Load/>
              </div>
            </div>
          </Content>
        </Layout>
      </div>
    );
  }
}
