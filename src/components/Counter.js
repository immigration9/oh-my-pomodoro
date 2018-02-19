import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      current: 0
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

  }

  tick() {
    let { current } = this.state;
    const second = 1000;

    this.setState({
      current: current - second
    });
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

export default Counter;