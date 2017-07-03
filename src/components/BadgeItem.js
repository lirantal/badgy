import React, { Component } from 'react';

class BadgeItem extends Component {
  render() {
    return (
      <input
        type="button"
        name={this.props.name}
        value={this.props.value}
      />
    )
  }
}

export default BadgeItem;
