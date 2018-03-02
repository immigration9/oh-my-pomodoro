import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from 'antd/lib/button';

export default class Reset extends Component {
  render() {
    return (
      <div>
        <Button 
          type="dashed"
          onClick={() => this.handleClick()}>
        Reset
        </Button>
      </div>
    );
  }

  handleClick() {
    this.props.onResetClick();
  }
}

