import React, { Component } from 'react';
import { Button } from 'antd';
import './App.css';
import CaroMovie from './components/CaroMovie'



class App extends Component {
  render() {
    return (
      <div className="App">
        <CaroMovie
          carouselA="./images/carousel5.jpg"
          carouselB="./images/carousel6.jpg"
          carouselC="./images/carousel7.jpg"
          carouselD="./images/carousel8.jpg"
        />
        <Button type="primary">Movies</Button>

      </div>
    );
  }
}

export default App;
