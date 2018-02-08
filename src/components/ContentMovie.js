import React, {Component} from 'react'
import {Layout} from 'antd'
import CaroMovie from './CaroMovie'
import Load from './Load'
import CardMovie from './CardMovie'

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
                  carouselA="./images/carousel7.jpg"
                  carouselB="./images/carousel2.jpg"
                  carouselC="./images/carousel1.jpg"
                  carouselD="./images/carousel8.jpg"
                  carouselE="./images/carousel6.jpg"
                  carouselF="./images/carousel5.jpg"
                />
              </div>
              <div>
                <Load/>
                <CardMovie
                />
              </div>
            </div>
          </Content>
        </Layout>
      </div>
    );
  }
}
