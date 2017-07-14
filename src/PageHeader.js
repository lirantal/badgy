import React, { Component } from 'react';
import { Layout, Menu } from 'antd';

const { Header } = Layout;

class PageHeader extends Component {
  render() {
    return (
      <Header>
        <Menu
          theme="dark"
          mode="horizontal"
          style={{ lineHeight: '64px' }}
        >
          <Menu.Item key="1">
            <a href="https://github.com/lirantal/badgy" target="_blank" rel="noopener noreferrer">GitHub Repo</a>
          </Menu.Item>
        </Menu>
      </Header>
    );
  }
}

export default PageHeader
