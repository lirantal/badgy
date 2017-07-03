import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import RepositoryContainer from './containers/RepositoryContainer';
import BadgeContainer from './containers/BadgeContainer';
import BadgeServiceContainer from './containers/BadgeServiceContainer';

class App extends Component {
  constructor(props) {
    super(props);

    let badgeServices = new Map();

    this.state = {
      repositoryResources: {},
      badgeService: badgeServices
    }
  }

  onRepositoryResourcesUpdate = (repositoryResource) => {
    const repoName = repositoryResource.repositoryName;
    let repos = this.state.repositoryResources;

    repos[repoName] = repositoryResource;

    this.setState({
      repositoryResources: repos
    });
  }

  onBadgeServiceUpdate = (badgeService) => {
    let currentBadgeServices = this.state.badgeService;
    badgeService.selected
      ? currentBadgeServices.set(badgeService.name, badgeService)
      : currentBadgeServices.delete(badgeService.name);

    this.setState({
      badgeService: currentBadgeServices
    });
  }

  render() {
    const badges = new Map()
    this.state.badgeService.forEach((badge, key) => {
      if (this.state.repositoryResources.hasOwnProperty(badge.type)) {
        const repository = this.state.repositoryResources[badge.type];
        const badgeMarkdown = badge.processBadge(repository.repositoryUrl)
        badges.set(badge.name, badgeMarkdown)
      }
    })

    return (
      <div className="App">

        <div className="App-header">
          <RepositoryContainer
            onRepositoryResourcesUpdate={this.onRepositoryResourcesUpdate}
          />
          <img src={logo} className="App-logo" alt="logo" />
        </div>

        <div className="badge-container">
          <BadgeContainer badges={badges} />
        </div>

        <div className="badge-service-container">
          <BadgeServiceContainer
            repositories={this.state.repositoryResources}
            onBadgeServiceUpdate={this.onBadgeServiceUpdate}
          />
        </div>

      </div>
    );
  }
}

export default App;
