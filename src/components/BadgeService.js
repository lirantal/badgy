import React, { Component } from 'react';
import { Checkbox } from 'antd';

class BadgeService extends Component {
  handleChange = (e) => {
    const badgeObject = {
      selected: e.target.checked,
      name: this.props.name,
      type: this.props.type,
      processBadge: this.props.processBadge
    };
    this.props.onBadgeServiceUpdate(badgeObject)
  }

  render() {
    return (
      <div>
        <Checkbox onChange={this.handleChange}>
          {this.props.name}
        </Checkbox>
      </div>
    )
  }
}

export default BadgeService;
