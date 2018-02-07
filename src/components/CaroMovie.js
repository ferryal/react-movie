import React, {Component} from 'react'
import {Carousel} from 'antd'


export default class carousel extends Component {
render() {
  const {carouselA, carouselB, carouselC, carouselD, carouselE, carouselF } = this.props
  return (
  <div>
    <Carousel autoplay>
      <div><img src={carouselA} alt={carouselA}/></div>
      <div><img src={carouselB} alt={carouselB}/></div>
      <div><img src={carouselC} alt={carouselC}/></div>
      <div><img src={carouselD} alt={carouselD}/></div>
      <div><img src={carouselE} alt={carouselE}/></div>
      <div><img src={carouselF} alt={carouselF}/></div>
    </Carousel>
</div>);

}
}
