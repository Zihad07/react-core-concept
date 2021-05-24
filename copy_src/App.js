import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component{
 
  render() {
    const imgStyle = { width:'500px' };
    return(
      <div className="App">
        <header className="App-header">
          <img src={logo} alt="App-logo" style={imgStyle} />
          <h1 className="App-title">Welcome To React</h1>
        </header>

        <p className="App-intro">
          To get started, edit <code>src/App.js</code>
        </p>

      </div>
    );
  }
}
export default App;




