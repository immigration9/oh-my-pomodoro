import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from 'antd/lib/button';

export default class Start extends Component {
  render() {
    return (
      <div>
        <Button 
          type="primary"
          onClick={() => this.handleClick()}>
        Start
        </Button>
      </div>
    );
  }

  handleClick() {
    this.props.onStartClick();
  }
}

