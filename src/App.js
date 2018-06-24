import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header.js'
import Intro from './components/Intro.js'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: 1
    }
  }
  renderElement = (yourName) => {
    return <p>{`Welcom to the world ${yourName}`}</p>
  }
  clickUp = () => {
    const value = this.state.value
    this.setState({
      value: value + 1
    })
  }
  render() {
    console.log('render')
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
