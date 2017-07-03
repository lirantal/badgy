import React, { Component } from 'react';
import RepositoryInput from '../components/RepositoryInput';

class RepositoryContainer extends Component {
  render() {
    return (
      <div>
        npm:
        <RepositoryInput
          repositoryName="npm"
          onChangeCB={this.props.onRepositoryResourcesUpdate}
          placeholder="https://www.npmjs.org/lirantal/express-request-route"
        />

        <br/><br/>

        GitHub:
        <RepositoryInput
          repositoryName="github"
          onChangeCB={this.props.onRepositoryResourcesUpdate}
          placeholder="https://www.github.com/lirantal/dockly"
        />
      </div>
    )
  }
}

export default RepositoryContainer;
