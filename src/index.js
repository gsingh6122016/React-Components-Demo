import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App5';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App appTitle = "This is an awesome app!" />, document.getElementById('root'));
registerServiceWorker();
