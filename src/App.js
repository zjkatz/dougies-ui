import React, { Component } from 'react';
import './App.css';
import Homepage from './homepage/Homepage';
import { BrowserRouter } from 'react-router-dom';



class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Homepage />
      </ BrowserRouter>
    );
  }
}

export default App;
