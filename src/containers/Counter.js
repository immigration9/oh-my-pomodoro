import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeTime } from '../actions/timerActions';

class Counter extends Component {
  constructor(props) {
    super(props)
    let { timerTime } = this.props;
    
    this.state = {
      status: false,
      current: (timerTime !== undefined) ? timerTime : 0
    };
    this.tick = this.tick.bind(this);
  }

  componentDidMount() {
    this.timer = setInterval(this.tick, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timer);
  }
  componentWillReceiveProps(nextProps) {
    let { timerStatus, timerTime } = nextProps;

    this.setState({
      status: nextProps.timerStatus,
      current: nextProps.timerTime
    });
  }

  tick() {
    let { status, current } = this.state;
    let { onChangeTime } = this.props;
    const second = 1000;

    if ( status === true && current !== 0) {
      // Change time when it is enabled
      onChangeTime();
    }
  }

  renderTimer() {
    let { current } = this.state;
    let cMinute = Math.floor(current/1000/60);
    let cSecond = Math.floor((current - (cMinute * 1000 * 60)) / 1000);
    const clockStopped = "00:00"
    
    if (cMinute === 0 && cSecond === 0) {
      return (
        <h1>{clockStopped}</h1>
      )
    } else {
      return (
        <h1>{(cMinute < 10) ? `0${cMinute}` : cMinute}:{(cSecond < 10) ? `0${cSecond}` : cSecond}</h1>
      );
    }
  }

  render() {
    return (
      <div>{this.renderTimer()}</div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    timerStatus: state.timer.timerStatus,
    timerTime: state.timer.timerValue
  }
} 

let mapDispatchToProps = (dispatch) => {
  return {
    onChangeTime: () => dispatch(changeTime())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);