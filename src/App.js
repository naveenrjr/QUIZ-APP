import React from 'react';
import  { Component } from 'react'
import StartGame from './components/'
import Container from '@material-ui/core/Container';
import './App.css';

export class App extends Component {
  
  render() {
    return (
      
      <div className="App">
      <Container fixed>
      <StartGame/>
      </Container>
     </div>
      

    )
  }
}

export default App

