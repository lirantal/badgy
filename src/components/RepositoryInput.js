import React, { Component } from 'react';
import { Form, Input } from 'antd';

const FormItem = Form.Item;
const formItemLayout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 14 }
};

class RepositoryInput extends Component {
  handleChange = (e) => {
    const url = e.target.value;
    this.props.onChangeCB({
      repositoryName: this.props.repositoryName,
      repositoryUrl: url
    });
  }

  render() {
    return (
      <FormItem
        label={this.props.label}
        {...formItemLayout}
      >
        <Input
          placeholder={this.props.placeholder}
          onChange={this.handleChange}
        />
      </FormItem>
    );
  }
}

export default RepositoryInput;
