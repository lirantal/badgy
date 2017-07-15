import React, { Component } from 'react';
import BadgeService from '../components/BadgeService';
import badgeServicesList from '../badgeServices';

class BadgeServiceContainer extends Component {
  getBadgeServicesList() {
    return badgeServicesList();
  }

  render() {
    const badgeServices = [];
    const props = this.props;

    this.getBadgeServicesList().forEach((element, index) => {
        badgeServices.push(
          <BadgeService
            key={index}
            type={element.type}
            name={element.name}
            processBadge={element.template}
            {...props}
          />
        )
    })

    return (
      <div className="badgeServiceContainer">
        {badgeServices}
      </div>
    )
  }
}

export default BadgeServiceContainer;
