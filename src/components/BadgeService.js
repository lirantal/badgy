import React, { Component } from 'react';

class BadgeService extends Component {
  handleChange = (e) => {
    this.props.onBadgeServiceUpdate({
      selected: e.target.checked,
      name: this.props.name,
      type: this.props.type,
      processBadge: (url) => {
        const urlItems = url.split('/');
        const packageName = urlItems[urlItems.length - 1]
        return `[![view on npm](http://img.shields.io/npm/v/${packageName}.svg)](https://www.npmjs.org/package/${packageName})`;
      }
    })
  }

  render() {
    return (
      <div>
        <input
          type="checkbox"
          name="badge-service1"
          onChange={this.handleChange}
        />
        {this.props.name}
      </div>
    )
  }
}

export default BadgeService;
