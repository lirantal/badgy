import React, { Component } from 'react';

class BadgeItem extends Component {
  render() {
    return (
      <div dangerouslySetInnerHTML={{__html: this.props.value}} />
    )
  }
}

export default BadgeItem;
