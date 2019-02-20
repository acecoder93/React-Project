import React, { Component } from 'react';
import Title from './components/Homepage/Title';
import Video from './components/Homepage/Video';
import About from './components/Homepage/About';

class App extends Component {
  render() {
    return (
      <div>
        <Title />
        {/* <Video /> */}
        <About />

      </div>
    );
  }
}

export default App;
