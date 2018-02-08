import React, { Component } from 'react';
import './App.css';
import HeaderMovie from './components/HeaderMovie'
import FooterMovie from './components/FooterMovie'



class App extends Component {
  render() {
    return (
      <div>
        <HeaderMovie />
        <FooterMovie />
      </div>
        );
  }
}

export default App;
