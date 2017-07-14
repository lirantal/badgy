import React, { Component } from 'react';
import Marked from 'marked/lib/marked';
import { Checkbox } from 'antd';

class BadgeService extends Component {
  handleChange = (e) => {
    this.props.onBadgeServiceUpdate({
      selected: e.target.checked,
      name: this.props.name,
      type: this.props.type,
      processBadge: (url) => {
        const urlItems = url.split('/');
        const packageName = urlItems[urlItems.length - 1]
        return Marked.parse(`[![view on npm](http://img.shields.io/npm/v/${packageName}.svg)](https://www.npmjs.org/package/${packageName})`);
      }
    })
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
