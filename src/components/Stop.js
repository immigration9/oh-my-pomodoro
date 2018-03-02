import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from 'antd/lib/button';

export default class Stop extends Component {
  render() {
    let { timer } = this.props;
    return (
      <div>
        <Button 
          type="danger"
          onClick={() => this.handleClick()}>
        Stop
        </Button>
      </div>
    );
  }

  handleClick() {
    this.props.onStopClick();
  }
}