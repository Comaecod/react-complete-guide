import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App appTitle='Vishnu&#39;s Person Manager' />, document.getElementById('root'));
registerServiceWorker();
