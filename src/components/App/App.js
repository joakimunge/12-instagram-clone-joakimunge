import React, { Component } from 'react';
import {Header, Footer} from '../../components';
import { Root } from '../../containers';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Root />
        <Footer />
      </div>
    );
  }
}

export default App;
