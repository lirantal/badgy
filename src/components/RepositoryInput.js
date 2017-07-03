import React, { Component } from 'react';

class RepositoryInput extends Component {
  handleChange = (e) => {
    const url = e.target.value;
    this.props.onChangeCB({
      repositoryName: this.props.repositoryName,
      repositoryUrl: url
    });
  }

  render() {
    const inputAttributes = {
      placeholder: this.props.placeholder,
      type: 'text',
      size: '100',
      className: 'repository-input'
    };

    return (
      <input
        {...inputAttributes}
        onChange={this.handleChange}
      />
    );
  }
}

export default RepositoryInput;
