import React, { Component } from 'react';

import './App.css';
import Header from '../components/header/header'
import Footer from '../components/footer/footer'
import AppRouter from '../app-router'

class App extends Component {
  state = {
    collapsed: false
  }

  toggleNavbar = () => {
    this.setState({
      collapsed: !this.state.collapsed
    })
  }
  render() {
    return (
      <div className="App">
        <Header toggleNavbar = {this.toggleNavbar} collapsed = {this.state.collapsed} /> 
        <AppRouter />
        <Footer />
      </div>
    );
  }
}

export default App;
