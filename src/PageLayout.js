import React, { Component } from 'react';
import { Layout } from 'antd';
import PageHeader from './PageHeader';
import PageContent from './PageContent';
import './PageLayout.css';

const { Footer } = Layout;

class PageLayout extends Component {
  render() {
    return (
      <Layout className="layout">
        <PageHeader />
        <PageContent style={{ padding: '0 50px' }} />
        <Footer style={{ textAlign: 'center' }}>
          Liran Tal © 2017
        </Footer>
      </Layout>
    );
  }
}

export default PageLayout;
