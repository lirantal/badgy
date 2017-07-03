import React, { Component } from 'react';
import BadgeService from '../components/BadgeService';

class BadgeServiceContainer extends Component {
  render() {
    return (
      <div>
        <BadgeService
          type="npm"
          name="npmVersion"
          {...this.props}
        />
      </div>
    )
  }
}

export default BadgeServiceContainer;
