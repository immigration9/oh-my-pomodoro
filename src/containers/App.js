import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import Pomodoro from '../static/oh-my-pomodoro.png';
import { startTimer, resetTimer, stopTimer } from '../actions/timerActions';
import PomodoroStatus from '../components/PomodoroStatus';
import Counter from './Counter';
import Start from '../components/Start';
import Stop from '../components/Stop';
import Reset from '../components/Reset';

const styles = {
  buttonLayout : {
    display: 'block',
    clear: 'both'
  }
}

class App extends Component {
  render() {
    const { startTimer, stopTimer, resetTimer, pomodoroStatus } = this.props;
    console.log(pomodoroStatus);
    return (
      <div className="App">
        <img src={Pomodoro} alt="Oh-My-Pomodoro" width="40%" />
        <PomodoroStatus pomodoroStatus={pomodoroStatus} />
        <Counter />
        <div style={styles.buttonLayout}>
          <Start onStartClick={startTimer}/>
          <Stop onStopClick={stopTimer}/>
          <Reset onResetClick={resetTimer}/>
        </div>
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    pomodoroStatus: state.timer.pomodoroStatus
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    startTimer: () => dispatch(startTimer()),
    stopTimer: (timer) => dispatch(stopTimer()),
    resetTimer: () => dispatch(resetTimer())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
