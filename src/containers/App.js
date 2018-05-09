import React, { Component } from 'react';

import './App.css';
import Header from '../components/header/header'
import Footer from '../components/footer/footer'

class App extends Component {
  state = {
    collapsed: true
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
        <Footer />
      </div>
    );
  }
}

export default App;
