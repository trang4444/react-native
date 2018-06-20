import React, { Component } from 'react';
import './App.css';
import Header from './components/header.js';
import Intro from './components/intro.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header header = {this.props.header} />
        <Intro  intro = {this.props.intro} />  
      </div>
    );
  }
}

export default App;
