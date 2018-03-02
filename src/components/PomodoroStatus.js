import React, { Component } from 'react';
import { connect } from 'react-redux';

export default class PomodoroStatus extends Component {
  render() {
    const { pomodoroStatus } = this.props;
    return (
      <h2>{pomodoroStatus}</h2>
    );
  }
}

