import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import PageLayout from './PageLayout';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<PageLayout />, document.getElementById('root'));
registerServiceWorker();
