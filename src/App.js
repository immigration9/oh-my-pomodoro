import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Counter from './containers/Counter';
import { connect } from 'react-redux';
import './App.css';
import Pomodoro from './static/oh-my-pomodoro.png';
import { startTimer, resetTimer, stopTimer } from './actions/actions';
import Start from './components/Start';
import Stop from './components/Stop';
import Reset from './components/Reset';

const styles = {
  buttonLayout : {
    display: 'inline-block'
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <img src={Pomodoro} alt="Oh-My-Pomodoro" width="40%" />
        <Counter />
        <div style={styles.buttonLayout}>
          <Start onStartClick={() => dispatch(startTimer())}/>
          <Stop onStopClick={() => dispatch(stopTimer())}/>
          <Reset onResetClick={() => dispatch(resetTimer())}/>
        </div>
      </div>
    );
  }
}


export default App;
