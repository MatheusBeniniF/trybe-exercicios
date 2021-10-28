import React, { Component } from 'react';
import './App.css';
import Header from './header';
import Content from './Content';
import Footer from './footer';

class App extends Component {
  render () {
    return (
      <div>
        <Header />
        <Content />
        <Footer />
      </div>
    );
  }
}

export default App;
