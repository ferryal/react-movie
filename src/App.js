import React, { Component } from 'react';
import './App.css';
import HeaderMovie from './components/HeaderMovie'
import FooterMovie from './components/FooterMovie'
import CardMovie from './components/CardMovie'


class App extends Component {
  render() {
    return (
      <div>
        <HeaderMovie />
        <FooterMovie />
        <CardMovie />

      </div>
        );
  }
}

export default App;
