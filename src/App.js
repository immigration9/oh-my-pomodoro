import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Counter from './components/Counter';
import './App.css';
import Pomodoro from './static/oh-my-pomodoro.png';

import Button from 'antd/lib/button';

const styles = {
  buttonLayout : {
    display: 'inline-block'
  }
}

const status = {

}

class App extends Component {
  render() {
    return (
      <div className="App">
        <img src={Pomodoro} alt="Oh-My-Pomodoro" width="40%" />
        <Counter />
        <div style={styles.buttonLayout}>
          <Button type="primary">Start</Button>
          <Button type="danger">Stop</Button>
          <Button type="default">Reset</Button>
        </div>
      </div>
    );
  }
}

export default App;
