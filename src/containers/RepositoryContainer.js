import React, { Component } from 'react';
import RepositoryInput from '../components/RepositoryInput';

import { Form, Row } from 'antd';

class RepositoryContainer extends Component {
  render() {
    return (
      <div>
        <Form
        className="formLayout"
        >
          <Row gutter={40}>
            <RepositoryInput
              repositoryName="github"
              label="GitHub URL:"
              onChangeCB={this.props.onRepositoryResourcesUpdate}
              placeholder="https://www.npmjs.org/lirantal/express-request-route"
            />
          </Row>

          <Row gutter={40}>
            <RepositoryInput
              repositoryName="npm"
              label="npm URL:"
              onChangeCB={this.props.onRepositoryResourcesUpdate}
              placeholder="https://www.npmjs.org/lirantal/express-request-route"
            />
          </Row>
        </Form>
      </div>
    )
  }
}

export default RepositoryContainer;
