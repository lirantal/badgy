import React, { Component } from 'react';
import BadgeItem from '../components/BadgeItem';

class BadgeContainer extends Component {
  render() {
    let badges = []
    this.props.badges.forEach((badgeData, badgeName) => {
      badges.push(<BadgeItem key={badgeName} name={badgeName} value={badgeData} />)
    })

    return (
      <div>
        {badges}
      </div>
    )
  }
}

export default BadgeContainer;
