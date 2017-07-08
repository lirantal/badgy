import React, { Component } from 'react';
import { Layout } from 'antd';
import App from './App';
const { Content } = Layout;

class PageContent extends Component {
  render() {
    return (
      <Content style={{ padding: '0 50px' }}>
        <div style={{ margin: '12px 0' }} />
        <div style={{ background: '#ffffff', padding: 24, minHeight: 480 }}>
          <App />
        </div>
      </Content>
    );
  }
}

export default PageContent
