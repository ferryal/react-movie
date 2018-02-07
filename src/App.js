import React, { Component } from 'react';
import './App.css';
import HeaderMovie from './components/HeaderMovie'
import ContentMovie from './components/ContentMovie'
import FooterMovie from './components/FooterMovie'


class App extends Component {
  render() {
    return (
      <div>
        <HeaderMovie />
        <ContentMovie />
        <FooterMovie />
      </div>
        );
  }
}

export default App;
